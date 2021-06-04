const { Discord } = require("discord-player")
const discord = require("discord.js")

module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.success} Gra Teraz: \n**${track.title}**`);
}