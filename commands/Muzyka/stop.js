module.exports = {
    name: 'stop',
    aliases: ['st'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie brak muzyki!`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success} - Muzyka ** zatrzymała się ** na tym serwerze!`);
    },
};