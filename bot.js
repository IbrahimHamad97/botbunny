require("dotenv").config();

const Discord = require("discord.js");
// partials is for specifying the when i guess
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Bish i saw u deleting");
});

client.on("message", (msg) => {
  if (msg.content === "meow") {
    msg.reply("MEOW BISH");
    msg.react("❤");
  }
  if (msg.content === "meow-") {
    msg.reply("Please add a command !");
  }
  if (msg.content === "meow-ow") {
    msg.member.roles.add("783632383445303296");
  }
});

client.login(process.env.BOT_TOKEN);
