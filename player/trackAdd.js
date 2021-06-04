const { Discord } = require("discord-player")
const discord = require("discord.js")

module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.success} Dodano Do Kolejki: \n**${track.title}**`);
}