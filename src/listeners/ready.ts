﻿import { Client, TextChannel } from 'discord.js';
import pgPool from '../structures/PostgreSQL';
import { cacheGuild, getGuildSetting } from '../structures/CacheManager';
import cliColors from '../structures/CLIColors';
import Utils from '../structures/Utils';
import DBL from 'dblapi.js';
import botStatus from '../structures/BotStatus';

import ApproveController from '../controllers/assessments/Approve';
import RejectController from '../controllers/assessments/Reject';

const utils: Utils = new Utils();

export default async (client: Client) => {

    const pgClient = await pgPool.connect();

    const res = await pgClient.query('SELECT channel, message FROM suggestions WHERE status = $1::text', ['Open']);

    await pgClient.release();

    if (res.rows.length) {
        for (let i = 0; i < res.rows.length; i++) {
            const channel = client.channels.cache.get(res.rows[i].channel) as TextChannel;

            // Temporary fix below in fact unneccesary fix below, but sometimes when a problem occurred in another component this makes sure that there won't show any errors for that problem
            let message;
            try {
                message = await channel.messages.fetch(res.rows[i].message);
            } catch (err) {
                // throw err;
                message = null;
            }
            if (message) {

                await cacheGuild(channel.guild.id);

                const positiveCount = message.reactions.cache.get("✅").count - 1;
                const negativeCount = message.reactions.cache.get("❎").count - 1;

                if (getGuildSetting(message.guild.id, 'auto_approve') <= positiveCount)
                    ApproveController(client, message, utils.languageCodeToObject(getGuildSetting(channel.guild.id, 'language')));
                else if (getGuildSetting(message.guild.id, 'auto_reject') <= negativeCount)
                    RejectController(client, message, utils.languageCodeToObject(getGuildSetting(channel.guild.id, 'language')));
            }
        }
    }

    console.log(cliColors.FgBlue + "\n---=[Loading Apis...]=---" + cliColors.Reset);

    // Api part
    const dbl = new DBL(process.env.APIS_DBL_TOKEN, client);
    setInterval(async () => {
        const res = await client.shard.fetchClientValues('guilds.cache.size');
        const shard_id = await client.shard.broadcastEval('this.guilds.cache.first().shardID');
        dbl.postStats(
            res.reduce((prev, guildCount) => prev + guildCount, 0),
            shard_id[0],
            client.shard.count
        );
    }, 1800000);
    console.log(cliColors.FgCyan + "Loaded the " + cliColors.FgYellow + "DBL (Top.GG)" + cliColors.FgCyan + " api." + cliColors.Reset);

    console.log(cliColors.FgBlue + "\n---=[Succesfully enabled the bot]=---" + cliColors.Reset);

    botStatus.setRunning(true);

}
