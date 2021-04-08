const Discord = require("discord.js");

module.exports = {
  name: "infoserver",
  aliases: ["infoservidor"],
  category: "Information",
  description: "Show server info",
  run: async (client, message, args) => {
    var server = message.guild;

    const embed = new Discord.MessageEmbed()
      .setThumbnail(server.iconURL())
      .setAuthor(server.name, server.iconURL())
      .addField("ID", server.id, true)
      .addField("Region", server.region, true)
      .addField("Created the", server.joinedAt.toDateString(), true)
      .addField(
        "Server Owner",
        server.owner.user.tag + "(" + server.owner.user.id + ")",
        true
      )
      .addField("Members", server.memberCount, true)
      .addField("Roles", server.roles.cache.size, true)
      .setColor(0x66b3ff);
    if (!message.guild.me.hasPermission("EMBED_LINKS")) {
      return message.channel.send(
        "I don't have permissions for ember messages and insert links"
      );
    }
    message.channel.send(embed);
  }
};
