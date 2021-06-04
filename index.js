const discord = require("discord.js")
const fs = require("fs")

const { MessageEmbed } = require("discord.js")
const { Player } = require('discord-player');

const client = new discord.Client();

client.config = require('./config/bot');
client.prefix = require('./config/bot');
client.player = new Player(client);
client.commands = new discord.Collection();
client.filters = client.config.filters;
client.token = client.config.discord.token;
client.emotes = client.config.emoji;


fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Za³adowano ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Za³adowano ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Za³adowano ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};


client.on('message', message => {

    if (!message.guild) return;
    if (message.author.bot) return;

if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
  
    const embed = new discord.MessageEmbed()
    .setTitle("Discord-Bot")
    .addField("**Autor**", `KamiloGG`)
    .setFooter(`KamiloGG () Discord-Bot`)
    .setColor("BLUE")

    message.channel.send(embed)
}});

client.login(client.token)