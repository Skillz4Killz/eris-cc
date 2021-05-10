const Eris = require("eris");

// Replace TOKEN with your bot account's token
const bot = new Eris.CommandClient("", {
    maxShards: "auto",
    intents: [
        "directMessageReactions",
        "directMessages",
        "guildBans",
        "guildEmojis",
        "guildInvites",
        "guildMembers",
        "guildMessageReactions",
        "guildMessages",
        "guildVoiceStates",
        "guilds"
    ],
}, {
    description: "A test bot made with Eris",
    owner: "somebody",
    prefix: "!43qefw2r3w",
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
    console.log("Successfully connected to gateway");
    logMemory();
    setInterval(logMemory, 60000);
});

bot.on("shardReady", (id) => {
    console.log(`SHARD READY`, id);
})

bot.on("error", (err) => {
    console.error(err); // or your preferred logger
});

let counter = 1;
function logMemory() {
  const usage = process.memoryUsage();
  const bytes = 1000000;
  console.log(`[${counter} eris] Memory Usage RSS: ${usage.rss / bytes}MB Heap Used: ${usage.heapUsed/ bytes}MB Heap Total: ${usage.heapTotal / bytes}MB | Members ${bot.users.size} Guilds: ${bot.guilds.size}`);
  counter++;
}

bot.connect();




