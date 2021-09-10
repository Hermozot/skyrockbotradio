const Discord = require('discord.js');
const config = require('./config.json')
const fs = require('fs');
const client = new Discord.Client({
	fetchAllMembers: true
})
client.config = require('./config.json')

client.on("message", async message => {
    if (message.channel.type == "dm" | message.author.bot) return;
    
    let msg = message.content.slice(7)
    let args = message.content.trim().split(/ +/g);
})

// EVENT HANDLER
const eventFiles = fs.readdirSync(__dirname + "/event").filter(file => file.endsWith(".js"));
// console.log(eventFiles)
for (const file of eventFiles) {
    const event = require(`./event/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
}

// COMMAND HANDLER
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(__dirname + "/command").filter(file => file.endsWith(".js"));
// console.log(commandFiles)
for (const file of commandFiles) {
    const command = require(`./command/${file}`);
    client.commands.set(command.name, command);
}

client.login(client.config.token);