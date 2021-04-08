const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "Fun",
  description: "Show your avatar",
  run: async (client, message, args) => {
    let member = message.mentions.users.first();
    if (!member) {
      const embed = new Discord.MessageEmbed()
        .setImage(`${message.author.avatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar from ${message.author.tag}`);
      message.channel.send(embed);
    } else {
      const embed = new Discord.MessageEmbed()
        .setImage(`${member.avatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar from ${member.tag}`);
      if (!message.guild.me.hasPermission("EMBED_LINKS")) {
        return message.channel.send(
          "I don't have permissions for ember messages and insert links"
        );
      }
      message.channel.send(embed);
    }
  }
};
