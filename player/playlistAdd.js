module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.success}  - ${playlist.title} został dodany do kolejki (**${playlist.tracks.length}** piosenek) !`);
};