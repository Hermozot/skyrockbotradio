module.exports = {
    name: "message",
    async execute(client, message) {
        if (message.channel.type == "dm" || message.author.bot) return;

        if (!message.content.startsWith(client.config.prefix)) return;

        // ANALYSEUR DE COMMANDES
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
        if (!args[0]) return message.channel.send(`Mon préfixe sur le serveur est \`${client.config.prefix}\``);
        const commandName = args.shift().toLowerCase();

        // check commande
        const command = client.commands.get(commandName) || client.commands.find(command => command.aliases && command.aliases.includes(commandName));
        if (!command) return;

        try {
            command.execute(client, message, args);
        } catch (error) {
            console.log(`${error}`);
            // message.reply(`il y a eu une erreur en exécutant la commande ! (${error})`);
        
        }
    }
}