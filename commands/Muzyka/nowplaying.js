module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie brak muzyki!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                fields: [
                    { name: 'Kanał', value: track.author, inline: true },
                    { name: 'Na wniosek', value: track.requestedBy.username, inline: true },
                    { name: 'Z playlisty', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Wyświetlenia', value: track.views, inline: true },
                    { name: 'Trwanie', value: track.duration, inline: true },
                    { name: 'Filtry aktywowane', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Głośność', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Tryb powtarzania', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Obecnie wstrzymane', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Pasek postępu', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};