const Discord = require('discord.js')
const client = new Discord.Client();



client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("ROOM_ID").join(); //by : Omààr CODES .
    });



 client.login("TOKEN");

