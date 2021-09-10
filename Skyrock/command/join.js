const Discord = require('discord.js')

module.exports = {
    info: {
      name: "join",
      description: "Rejoindre le vocal et diffuser Skyrock",
      usage: "join this voc",
      aliases: ["jn,skyrock"],
    },
  
    run: async function (client, message, args) {
  
   if(message.guild === null)return;
  

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        var VC = message.member.voice.channel;
  
        var newUserChannel = message.member.voice.channel;
 
	if (message.content.startsWith(client.config.prefix + ">join")) {
        var VC = message.member.voice.channel;
        if (!VC) return; 
    	VC.join("870798658755506229").then(connection => {
            const dispatcher = connection.play('http://www.skyrock.fm/stream.php/tunein16_128mp3.mp3');
            dispatcher.on("end", end => {VC.leave()})
        	message.reply("Je joue actuellement la radio Skyrock :musical_note:" );
        })
    }
},
    name: "join"
}