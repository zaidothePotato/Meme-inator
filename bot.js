const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';
const memes = ["https://cdn.discordapp.com/attachments/927590556798943263/927591208795111484/AB5EA91B-0749-4DAD-883B-68AECC461E48.png", 
"https://cdn.discordapp.com/attachments/927590556798943263/927595355787370496/image0.gif",
"https://cdn.discordapp.com/attachments/927590556798943263/927597627007205436/aZrg1D0_460s.png",
"https://cdn.discordapp.com/attachments/927590556798943263/927597627959296022/69D957B5-F0DD-419F-810E-E698568626D5.jpg",
"https://cdn.discordapp.com/attachments/927590556798943263/927597829344591912/F36D7D5D-73D4-4F6C-BC25-26F83E83D720.png",
"https://cdn.discordapp.com/attachments/927590556798943263/927597987557953586/802D95A8-0E05-4CEB-ACD7-655BC44B5D2B.jpg",
"https://cdn.discordapp.com/attachments/927590556798943263/927598100506370118/7A441D57-12D2-465E-AC37-D9B40F4E72AA.jpg",
"https://cdn.discordapp.com/attachments/927590556798943263/927599865956024341/D8CA6FE6-A029-43B2-942A-A6E59873E84A.jpg",
"https://tenor.com/view/the-jefferson-cut-gif-20330337",
"https://cdn.discordapp.com/attachments/640737437328343063/795079103094194206/unknown.png",
"https://cdn.discordapp.com/attachments/874447411144171610/924373824051494923/IMG_2406.png",
"https://cdn.discordapp.com/attachments/927590556798943263/927603153346658354/89763A8D-18AC-4D70-851B-E357DDF337D7.jpg",

];
// read read UIDs from .env file
const dotenv = require('dotenv');
dotenv.config();
// its configuring it and making sure its the right token
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  var args = msg.content.slice(PREFIX.length).trim().split(' ');
  var command = args.shift().toLowerCase();

    if (command === 'ping') {
        msg.channel.send('@everyone');
    }else if (msg.content === `${PREFIX}meme`) {
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      msg.channel.send(randomMeme); 
      
    }else if(msg.content === `${PREFIX}Self Destruct`){
      msg.channel.send("💥");

    }else if(msg.content === `${PREFIX}name`){  
      msg.channel.send("My name is Dr. Heinz Doofenshmirtz and this is my meme-inator, its a working progress for now, but it will get some updates now and than");

    }else if(msg.content ===`${PREFIX}help`){
      msg.channel.send("!ping-@-everyone",
        "meme-shows a random meme",
        "!Self Destruct--explodes",
         "!name--about me");
    
        }else if(msg.content ===`${PREFIX}joke`){
      msg.channel.send("What are the 2 hardest things in coding. Naming things and off-by-one errors");
    }
  //  msg.react('<:blubber:928063851163955203>');
    
    if(Math.random() > .99){
        msg.reply('@everyone');
    } 
});






// So bot can log in
client.login(process.env.token);
