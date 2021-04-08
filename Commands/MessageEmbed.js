const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

module.exports = {
  name: "embed",
  category: "Test",
  description: "Test in Embed",
  run: async (client, message, args) => {
    if (message.author.id !== "id") return; //This will only respond to the Discord profile of that ID (delete if you want everyone to be able to use this command).
    message.delete();
    //let canal = client.channels.resolve('id') //If you want the message to be sent to a specific channel
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("New Commands:")
    .setDescription("``+invites``\n\nMore command information: ``+help <command>``")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("00CC00")
    .setTimestamp();

message.channel.send({ embed: embedDatos }); //If you want the message to be sent on the channel where the command is executed.
//canal.send({ embed: embedDatos }); //If you want the message to be sent to a specific channel.
}};
