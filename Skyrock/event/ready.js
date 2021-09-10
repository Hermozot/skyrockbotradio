module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Je suis connecter à ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status = [`Skyrock`,
                `By ๖̶ζ͜͡ND Hermozo#9999`,
                `Sur ${client.guilds.cache.size} Serveurs`
            ]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                status: "inactive",
                activity: {
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
url:"https://twitch.tv/hermozo_"
                }
            })
        }, 5000);
    }
}