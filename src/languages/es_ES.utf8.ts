/**
 * Language: Spanish / Español (es_ES)
 * Date: 12/07/2020 (MM/DD/YYYY)
 *
 * Translation by Krak798 (Discord: ҠЯѦҞ7̴̑̿9̵̆̉8̸̥͠#4342)
 */
export default {

    /**
     * Global part
     *
     * Often used messages which are not necessarily associated with a specific function / implementation
     * are stated below
     */
    insufficientPermissions: "¡No tienes permiso para utilizar ese comando! (El permiso <Permission> es obligatorio)",
    errorTitle: "Suggestions - Error",

    /**
     * Commands part
     *
     * Messages associated to commands are stated below
     */
    commands: {
        config: {
            title: "Suggestions - Configuración",
            names: {
                prefix: "Prefijo",
                language: "Lengua",
                channel: "Canal",
                autoApprove: "Auto aprobar",
                autoReject: "Auto rechazar",
                deleteApproved: "Eliminar aprobados",
                deleteRejected: "Eliminar rechazados"
            },
            prefix: {
                description: "Por favor introduzca el nuevo prefijo...",
                missingInput: "Has olvidado introducir el nuevo prefijo.",
                updated: "El prefijo se ha establecido a``<Prefix>``."
            },
            language: {
                description: "Por favor, introduzca la nueva lengua...",
                availableTitle: "Lenguas disponibles",
                missingInput: "Has olvidado introducir la lengua nueva.",
                invalidLanguage: "Suggestions no está disponible en esa lengua.",
                updated: "La lengua ha sido cambiada a ``<Language>``."
            },
            channel: {
                description: "Por favor, introduzca un nuevo canal...",
                missingInput: "Has olvidado introducir el canal nuevo.",
                invalidChannel: "Has introducido un canal no válido.",
                updated: "El canal ha sido actualizado a <#<ChannelID>>."
            },
            autoApprove: {
                description: "Por favor, introduzca cantidad necesaria de reacciones positivas para aprobar la sugerencia...\n\n*Introduzca -1 para deshabilitar*",
                missingInput: "Has olvidado introducir el número de reacciones necesarias.",
                invalidNumber: "Ese no es un número válido.",
                numberIsTooLow: "El número debe ser -1 o superior.",
                updated: "La cantidad necesaria de reacciones positivas para auto probar es ahora ``<Number>``."
            },
            autoReject: {
                description: "Por favor, introduzca cantidad necesaria de reacciones negativas para rechazar la sugerencia...\n\n*Introduzca -1 para deshabilitar*",
                missingInput: "Has olvidado introducir el número de reacciones necesarias.",
                invalidNumber: "Ese no es un número válido.",
                numberIsTooLow: "El número debe ser -1 o superior.",
                updated: "La cantidad necesaria de reacciones positivas para auto rechazar es ahora ``<Number>``."
            },
            deleteApproved: {
                description: "Por favor, seleccione **on** u **off**...",
                missingInput: "Has olvidado seleccionar entre **on** y **off**.",
                invalidInput: "Solo puedes seleccionar entre **on** u **off**.",
                updated: "Las sugerencias aprobadas se eliminarán automáticamente."
            },
            deleteRejected: {
                description: "Por favor, seleccione **on** u **off**...",
                missingInput: "Has olvidado seleccionar entre **on** y **off**.",
                invalidInput: "Solo puedes seleccionar entre **on** u **off**.",
                updated: "Las sugerencias rechazadas se eliminarán automáticamente."
            }
        },
        suggest: {
            title: "Suggestions - Sugerencia",
            invalidChannel: "Por favor, confirma que el dueño del servidor haya configurado correctamente el servidor.",
            descriptionRequired: "Por favor, danos una descripción de la sugerencia que quieres sugerir.",
            description: "**Descripción:** <Description>\n\n**Estado:** <Status>\n**ID:** <ID>",
            sent: "Tu sugerencia ha sido creada correctamente! ([Click aquí](<Url>))"
        },
        approve: {
            title: "Suggestions - Aprobar",
            descriptionRequired: "Por favor, introduzca una ID válida.",
            invalidInput: "Has introducido una ID no válida.",
            noSuggestionsFound: "No puedo encontrar ninguna sugerencia aprobable.",
            approved: "He completado el aprobado correctamente."
        },
        reject: {
            title: "Suggestions - Rechazar",
            descriptionRequired: "Por favor, introduzca una ID válida.",
            invalidInput: "Has introducido una ID no válida.",
            noSuggestionsFound: "No puedo encontrar ninguna sugerencia rechazable.",
            rejected: "He completado el rechazo correctamente."
        },
        list: {
            title: "Suggestions - Lista",
            noSuggestions: "No hay ninguna sugerencia abierta para este servidor.",
            description: "Puedes ver todas la sugerencias abiertas aquí abajo.",
            suggestionDescription: "**Descripción:** <Description>\n**ID:** <ID>\n**Enlace:** [Click aquí](<Url>)"
        },
        uptime: {
            title: "Suggestions - Tiempo de funcionamiento",
            description: "He estado funcionando durante <Days> días, <Hours> horas, <Minutes> minutos y <Seconds> segundos!"
        },
        help: {
            title: "Suggestions - Ayuda",
            commandTitle: "Ayuda sobre los comandos",
            serverTitle: "Servidor de soporte"
        },
        vote: {
            title: "Suggestions - Votación"
        },
        reportbug: {
            title: "Suggestions - Reporte de error",
            descriptionRequired: "Por favor, danos una descripción del error o problema.",
            sent: "Tu reporte ha sido enviado a los desarrolladores del bot.\n\n*Gracias por sumisión!*"
        }
    },

    /*
     * Suggestions part
     *
     * Words associated with suggestions are stated below
     */
    suggestions: {
        open: "Abierta",
        approved: "Aprovada",
        rejected: "Rechazada"
    }

}
