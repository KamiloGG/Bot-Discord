module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Proszę podać tytuł piosenki!`);

        client.player.play(message, args.join(" "), { firstResult: true });
        
    },
};