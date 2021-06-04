const { Discord } = require("discord-player")
const discord = require("discord.js")

module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nie Znaleziono Muzyki Dla ${query}`);
}