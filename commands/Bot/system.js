const Discord = require('discord.js')
const os = require('os')

module.exports = {
    name: 'system',
    description: 'stats',
    category: 'Infos',
 
  execute(client, message, args) {
      
    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();



    const embed = new Discord.MessageEmbed()
    .setTitle(`Informacje o ${client.user.tag}`)
    .setColor('RED')
    .addField("Ilość Serwerów", `${servercount}`, true)
    .addField("Ilość Użytkowników", `${usercount}`, true)
    .addField("Ilość Kanałów", `${channelscount}`, true)
    .addField('Architektura', `${arch}`, true)
    .addField('Platforma', `${platform}`, true)
    .setFooter(`KamiloGG () Discord-Bot`)

    message.channel.send(embed);
}
};