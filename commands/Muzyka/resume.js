module.exports = {
    name: 'resume',
    aliases: ['r'],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie brak muzyki!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Muzyka już gra!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Muzykę ${client.player.getQueue(message).playing.title} wznowiono !`);
    },
};