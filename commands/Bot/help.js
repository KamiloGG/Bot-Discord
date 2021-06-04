const { MessageEmbed } = require("discord.js")
const config = require("../../config/bot")

module.exports = {
    name: 'help',
    aliases: ['pomoc'],

    execute(client, message, args) {

            const Bot = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const Muzyka = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const Filtry = client.filters

        const embed = new MessageEmbed()
        .setTitle('Pomoc')
        .setDescription(`Aby Użyć Filtrów **${client.config.discord.default_prefix}Filter ( Nazwa )** np: ${client.config.discord.default_prefix}Filter 8D`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("BLUE")
        .setFooter("KamiloGG () Discord-Bot")
        .addFields(
            { name: 'Bot', value: Bot },
            { name: 'Muzyka', value: Muzyka }
        )
	.addField("8D, gate, haas, phaser, treble, tremolo, vibrato, reverse, karaoke, flanger, mcompand, pulsator, subboost, bassboost, vaporwave, nightcore, normalizer, surrounding")

        message.channel.send(embed)
            
        
        
    }
}