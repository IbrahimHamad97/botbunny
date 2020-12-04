require("dotenv").config();

const Discord = require("discord.js");
// partials is for specifying the when i guess
const { MessageAttachment } = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageDelete", (msg) => {
  msg.channel.send(msg.author.username + " Bish i saw u deleting");
});

client.on("message", (msg) => {
  content = msg.content.toLowerCase();
  if (content === "meow") {
    msg.reply("MEOW BISH");
    msg.react("❤");
  }

  if (
    content === "morning" ||
    content === "good morning" ||
    content === "good mornin" ||
    content === "mornin"
  ) {
    msg.reply("Good morning ! Have a nice day ^^");
  }

  if (content === "meow-") {
    msg.reply("Please add a command !");
  }

  if (content === "meow-avatar") {
    msg.reply(msg.author.displayAvatarURL());
  }

  if (content === "meow-rip") {
    const attachment = new MessageAttachment("https://i.imgur.com/w3duR07.png");
    msg.channel.send(attachment);
  }

  if (content === "meow-hubby") {
    msg.channel.send("Hubby Dubby");
    msg.react("❤");
  }

  if (content === "meow-bun") {
    msg.channel.send("BuNBunbUNbuNBuNBUNBunbuNbUNbunbunbunbunbunbunbun.......");
    msg.react("❤");
  }

  if (content === "meow-firas") {
    msg.channel.send("Detectiiiiiveeeeee");
    msg.react("❤");
  }

  if (content === "meow-brho") {
    msg.channel.send("Queen Hoe");
    msg.react("❤");
  }

  if (content === "meow-noora") {
    msg.channel.send("Queen Wak-chan");
    msg.react("❤");
  }

  if (content === "meow-njay") {
    msg.channel.send("Dubba");
    msg.react("❤");
  }

  if (content === "meow-oush") {
    msg.channel.send("Who dis?");
    msg.react("❓");
  }

  if (content === "meow-3omar") {
    msg.channel.send("meh");
    msg.react("😒");
  }

  if (content === "meow-chicken") {
    msg.channel.send("ba8 ba8 babeeee8");
    msg.react("🐔");
  }

  if (content === "meow-luigi") {
    msg.channel.send("why does this guy have a meow he was born in 2000");
  }

  if (content === "meow-undertale") {
    msg.channel.send(
      "Amaze game 10/10 must play " +
        "https://www.youtube.com/watch?v=srZdDAJbHfc&t=9112s"
    );
  }

  if (content === "meow-ow") {
    msg.member.roles.add("467988662362177538");
    msg.channel.send("Role Added ^^");
  }
});

client.on("message", async (message) => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === "meow-join") {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  let disp = null;
  if (message.content === "meow-play" || message.content === "meow-p") {
    const connection = await message.member.voice.channel.join();
    const ytdl = require("ytdl-core");
    disp = connection.play(
      ytdl("https://youtu.be/srZdDAJbHfc?t=8805", {
        filter: "audioonly",
      })
    );
  }

  if (message.content === "meow-leave") {
    const connection = await message.member.voice.channel.leave();
  }
});

client.login(process.env.BOT_TOKEN);
