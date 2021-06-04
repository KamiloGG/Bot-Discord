module.exports = async (client) => {
    console.log(`Zalogowano Jako ${client.user.username} ( ${client.user.id} ) Na ${client.guilds.cache.size} Serwerach`);

    client.user.setActivity(`Discord-Bot ❤`,{ type: "WATCHING"});
};