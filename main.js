const Discord = require('discord.js')
var fs = require('fs');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Configurations
const bulan = new Date();
const { owner, prefix, token } = require('./cfg.json')

client.on('ready', () => {
    console.log("redy! asfuk")
});

// Only for user who have registered
client.on("message", message => {

// Create teh arguments
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
// Local database file path
const dbPath = `./database/${message.author.id}.json`;

if(message.content.startsWith(prefix)) {
    if(fs.existsSync(dbPath)) {
        // The users has registered so. lets give them command
            if(command == "hi") {
                message.reply("this your first command!...")
            } else {
                if(command == "unregister") {
                    fs.unlinkSync(dbPath);
                    message.reply("youre now unregistered!");
                } else {
                if(command == "me") {
                    if(fs.existsSync(dbPath)) {
                    const data = fs.readFileSync(dbPath);
                    message.reply(data);
                      } else {
                    message.reply("somethign went wrong");
                      }
                   } else {
                if(command == "YOUR_NEXT_COMMAND") {
                    message.reply("YOUR_NEXT_REPLT_:)")
                     }
                   }
                }
            }
        } else {
            if(command == "register") {
        
            } else {
                message.reply(`idk who are you, try to ${prefix}register`)
            }
        }
}
})

// And here. the command only for users who didnt registered.
client.on("messageCreate", message => {

// Create teh arguments
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
// Local database file path
const dbPath = `./database/${message.author.id}.json`;

if(command == "register") {
    const hisName = args[0];
    if(!hisName) {
        message.reply(`registered without name? thats a Crazy ;Think. ${prefix}register frenzy`)
    } else {
    if(fs.existsSync(dbPath)) {
    // They already registered. so what they want?
        message.reply("register, since u are already? how?!");
    } else {
const content = `{ "name": "${hisName}", "id": "${message.author.id}" }`;
fs.writeFileSync(dbPath, content);
message.reply("succes registered!")
    }
    }
}

})

client.login(token);

/*
    if(command == "hi") {
        message.reply("this your first command!...")
    } else {
        if(command == "unregister") {
            fs.unlinkSync(dbPath);
            message.reply("youre now unregistered!");
        } else {
        if(command == "me") {
            if(fs.existsSync(dbPath)) {
            const data = fs.readFileSync(dbPath);
            message.reply(data);
              } else {
            message.reply("somethign went wrong");
              }
           } else {
        if(command == "YOUR_NEXT_COMMAND") {
            message.reply("YOUR_NEXT_REPLT_:)")
             }
           }
*/