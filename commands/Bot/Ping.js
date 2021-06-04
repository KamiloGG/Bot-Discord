const discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',

    execute(client, message, args) {
       
        const ping = new discord.MessageEmbed()
        .setTitle(":ping_pong: Pong!")
        .setDescription(`${client.emotes.success} - Ping: **${client.ws.ping}ms** !`)
        .setFooter("KamiloGG () Discord-Bot")
        .setColor("BLUE")

        message.channel.send(ping)
    }
}