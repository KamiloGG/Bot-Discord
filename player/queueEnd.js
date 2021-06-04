const { Discord } = require("discord-player")
const discord = require("discord.js")

module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} Muzyka Została Zatrzymana \nPowód: **Brak Muzyki W Kolejce**`);
}