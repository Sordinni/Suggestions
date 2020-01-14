export default {

    /*
    General Part
     */
    insufficientPermissions: "You don't have permission to use that command! (<Permission> is required)",
    errorTitle: "Suggestions - Error",
    exampleTitle: "Example",
    comingSoonTitle: "Suggestions - Coming Soon!",
    comingSoonDescription: "This option will be available soon!",
    checkPrivateMessages: "Please check your private messages.",
    cannotSendPrivateMessages: "I cannot send you a private message, so I'll send it here instead.",

    /*
    Actual Suggestion Part
     */
    suggestionDescription: "**Description:** <Description>\n\n**Status:** <Status>\n**ID:** <ID>",
    suggestionStatusOpen: "Open",
    suggestionStatusApproved: "Approved",
    suggestionStatusRejected: "Rejected",

    /*
    Commands Part
     */
    uptimeTitle: "Suggestions - Uptime",
    uptimeDescription: "I've been online for <Days> days, <Hours> hours, <Minutes> minutes and <Seconds> seconds!",

    reportBugTitle: "Suggestions - Reportbug",
    reportBugMissingArguments: "Please enter a bug to report!",
    reportCooldownActive: "You can only report a bug every per hour!",
    reportBugSuccess: "Thanks for reporting that bug! Our team will look at it as soon as possible!",

    suggestMissingArguments: "Please enter a suggestion to suggest!",
    suggestExample: "<Prefix>suggest A brand new programming channel!",
    suggestInvalidChannel: "Please setup a valid `suggestion channel` using the config command.",
    suggestTitle: "Suggestions - Suggest",
    suggestSuccess: "Succesfully created your suggestion! ([Click here](<SuggestionURL>))",

    voteTitle: "Suggestions - Vote",
    voteDescription: "You can vote for us by clicking [here](<VoteURL>)",

    inviteTitle: "Suggestions - Invite",
    inviteDescription: "**BotInvite:** <BotURL>\n**Support Server:** <ServerURL>",

    approveMissingArguments: "Please enter at least a suggestion id to approve a suggestion!",
    approveExample: "<Prefix>approve 1 Yeah cool idea mate!",
    approveInvalidSuggestion: "Can't approve that suggestion since it doesn't exist!",
    approveSuggestionAlreadyApproved: "That suggestion is already approved!",
    approveAuthorTitle: "Suggestion Approval",
    approveAuthorDescription: "Your suggestions in `<GuildName>` has been approved.\n\n**Description:** <Description>\n\n**Reason:** <Reason>",
    approveTitle: "Suggestions - Approve",
    approveDescription: "Succesfull approved the suggestion with the id of `<SuggestionID>`!",

    rejectMissingArguments: "Please enter at least a suggestion id to reject a suggestion!",
    rejectExample: "<Prefix>reject 1 Nah not happening mate!",
    rejectInvalidSuggestion: "Can't reject that suggestion since it doesn't exist!",
    rejectSuggestionAlreadyRejected: "That suggestion is already rejected",
    rejectAuthorTitle: "Suggestion Rejection",
    rejectAuthorDescription: "Your suggestions in <GuildName> has been rejected.\n\n**Description:** <Description>\n\n**Reason:** <Reason>",
    rejectTitle: "Suggestions - Reject",
    rejectDescription: "Succesfull rejected the suggestion with the id of `<SuggestionID>`!",

    configTitle: "Suggestions - Config",

    configPrefixMissingArguments: "Please enter a character to change the prefix!",
    configPrefixExample: "<Prefix>config prefix ?",
    configPrefixSuccessDescription: "Successfully changed the prefix to `<NewPrefix>`",

    configChannelMissingArguments: "Please enter a valid channel!",
    configChannelExample: "<Prefix>config channel #suggestion-channel",
    configChannelSuccessDescription: "Successfully changed the channel to `<#<NewChannelID>>`",

    configLanguageIncorrectArguments: "Please fill in all the required arguments and make sure to use a valid language-code, like the example below.",
    configLanguageExample: "<Prefix>config language en_US",
    configLanguageListTitle: "Available Languages",
    configLanguageSuccessDescription: "Successfully changed the language to `<NewLanguageCode>`",

    donateTitle: "Suggestions - Donate",
    donateDescription: "Don't feel obligated to donate! It isn't a requirement but it helps us to maintenance our projects including Suggestions.\n\nIf you decided to donate contact `jerskisnow#8214` if you want to receive a premium rank on the official `CodedSnow` discord server ([Click here](<ServerURL>))! When you received the premium rank you'll get some extra perks and you'll be thanked gratefully!",
    donatePaymentmethodsTitle: "Payment Methods",

    listNoSuggestionsFoundDescription: "There aren't any open suggesties at the moment.",
    listTitle: "Suggestions - List",
    listDescription: "You can view all the active/open suggestion right below!",
    listSuggestionTitle: "Suggestion from <User>",
    listSuggestionDescription: "**Description:** <Description>\n**ID:** <SuggestionID>\n**Link:** [Click here](<SuggestionURL>)",

    helpTitle: "Suggestions - Help",
    helpExplanationApprove: "Approve a suggestion (MANAGE_MESSAGES required)",
    helpExplanationConfig: "Configure Suggestions (ADMINISTRATOR required)",
    helpExplanationDonate: "Receive information about donating",
    helpExplanationHelp: "Receive this message",
    helpExplanationInvite: "Receive the invite links",
    helpExplanationList: "See a list of all `active` suggestions",
    helpExplanationReject: "Reject a suggestion (MANAGE_MESSAGES required)",
    helpExplanationReportbug: "Report a bug to the developers",
    helpExplanationSuggest: "Suggest an idea",
    helpExplanationUptime: "See the uptime of Suggestions",
    helpExplanationVote: "Receive the vote link"

}
