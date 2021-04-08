const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

module.exports = {
  name: "sa",
  category: "Suggestions",
  description: "Suggestions approved",
  run: async (client, message, args) => {
    if (message.author.id !== "id") return; //If you want the message to be sent to a specific channel.
    message.delete();
    let user = message.mentions.users.first() || message.author;
    let canal = client.channels.resolve('id') //ID of the channel you want the suggestion to be sent.
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Suggestions approved")
    .setDescription("Suggestion message")
    .setThumbnail(user.displayAvatarURL())
    .setFooter("From " + user.tag) //It is important to name the owner of the suggestion, otherwise it will come out that the suggestion is yours.
    .setColor("00CC00")
    .setTimestamp();
canal.send({ embed: embedDatos });
}};
