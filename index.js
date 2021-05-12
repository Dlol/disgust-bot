const bot_token = "Put your bot token here";
const channel_id = "Put your channel id here";
const Discord = require("discord.js")
const client = new Discord.Client()
var confession
client.on('ready', () => {
    console.log("ub")
    confession = client.channels.cache.get(channel_id)
})

client.on('message', (message) => {
    if(message.content[0] == "_"){
        console.log("Confession with msg")
	confession.send("Anon confessed: " + message.content.slice(1,message.content.length))
        if(message.channel.type != 'dm'){
            message.delete()
        }
    }
    if(message.content[0] == ">"){
	console.log("Blank confession : " + message.content.slice(1,message.content.length))
        confession.send("" + message.content.slice(1,message.content.length))
        if(message.channel.type != 'dm'){
            message.delete()
        }
    }
    // confession.send("Annon confessed: " + message)
})

client.login(bot_token)
