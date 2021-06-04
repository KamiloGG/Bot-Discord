module.exports = {
    name: 'pause',
    aliases: ['pa'],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie brak muzyki!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Muzyka jest już wstrzymana!`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Muzyka ${client.player.getQueue(message).playing.title} wstrzymana!`);
    },
};