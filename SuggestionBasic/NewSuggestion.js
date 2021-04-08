const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

module.exports = {
  name: "suggestion",
  aliases: ["sugerencia"], //If you don't want any aliases you can delete this line.
  category: "Suggestions",
  description: "Suggestions",
  run: async (client, message, args) => { 
    const user = message.author.tag;
    let texto = args.join(" ");
    if (!texto) return message.delete();
    let canal = client.channels.resolve('id') //ID of the channel you want the suggestion to be sent  .
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("New Suggestion")
    .setDescription(texto)
    .setThumbnail(message.author.displayAvatarURL())
    .setFooter("From " + user)
    .setColor("0000FF")
    .setTimestamp();
canal.send({ embed: embedDatos });
    message.delete();
  }
};
