const Discord = require('discord.js')

module.exports = {
execute(client, message, args){
message.delete()
        message.channel.send(new Discord.MessageEmbed()
.setTitle('Inviter le bot sur le serveur')
.setColor('#FFFFFF')
.setDescription('[Clique Ici](https://discord.com/api/oauth2/authorize?client_id=877221223535366204&permissions=3210496&scope=bot)')                                                      
.setFooter(`๖̶ζ͜͡CB Skyrock`)
);
    },
name: "addbot"
}