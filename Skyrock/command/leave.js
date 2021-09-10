const Discord = require('discord.js')

module.exports = {
  info: {
    name: "leave",
    description: "Leave le voc",
    usage: "skipto <number>",
    aliases: ["lv"],
  },

  run: async function (client, message, args) {

    if (message.guild === null) return;


    // Leave a voice channel
    if (message.content.startsWith(client.config.prefix + "leave"))
    message.guild.me.voice.channel.leave()
    message.reply(`J'ai quitté le vocal !`)
  },
    name: "leave"
}