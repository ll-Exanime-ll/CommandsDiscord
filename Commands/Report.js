const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

module.exports = {
  name: "report",
  aliases: ["reporte", "reportes"],
  category: "Report",
  description: "Do you want to report a bug or do you want to give us ideas? This is your command.",
  run: async (client, message, args) => {
    const user = message.author.tag;
    let texto = args.join(" ");
    let canal = client.channels.resolve('id') //If you want the message to be sent to a specific channel
    if (!texto) return message.channel.send("What is your report?\nCorrect use of the command: ``+report (the report)``");
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Nuevo reporte")
    .setDescription(texto)
    .setThumbnail(message.author.displayAvatarURL())
    .setFooter("De " + user)
    .setColor("0000FF")
    .setTimestamp();
canal.send({ embed: embedDatos });
message.delete();
message.channel.send("Thanks for your report " + user);
  }
};

