const discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',

    execute(client, message) {

        const embed = new discord.MessageEmbed()
        .setTitle("Debug!")
        .setDescription(`${client.emotes.success} - ${client.user.username} Podłączony Do: **${client.voice.connections.size}** Kanałów!`)
        .setFooter(`KamiloGG () Discord-Bot`)
        .setColor("BLUE")
        
        message.channel.send(embed)
    },
};