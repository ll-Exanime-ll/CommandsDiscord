const Discord = require("discord.js");

module.exports = {
  name: "infouser",
  aliases: ["infousuario"],
  category: "Information",
  description: "Displays user information",
  run: async (client, message, args) => {
    let userm = message.mentions.users.first();
    if (!userm) {
      var user = message.author;

      const embed = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL())
        .setAuthor(user.username + "#" + user.discriminator, user.avatarURL)
        .addField(
          "Playing",
          user.presence.game != null ? user.presence.game.name : "Nothing",
          true
        )
        .addField("ID", user.id, true)
        .addField("State", user.presence.status, true)
        .addField("Nickname", message.member.nickname, true)
        .addField("Account Created", user.createdAt.toDateString(), true)
        .addField("Date of admission", message.member.joinedAt.toDateString())
        .addField(
          "Roles",
          message.member.roles.cache
            .map(roles => `\`${roles.name}\``)
            .join(", ")
        )
        .setColor(0x66b3ff);

      message.channel.send({ embed });
    } else {
      const embed = new Discord.MessageEmbed()
        .setThumbnail(userm.avatarURL())
        .setAuthor(
          userm.username + "#" + userm.discriminator,
          userm.avatarURL()
        )
        .addField(
          "Playing",
          userm.presence.game != null ? userm.presence.game.name : "Nothing",
          true
        )
        .addField("ID", userm.id, true)
        .addField("State", userm.presence.status, true)
        .addField("Account Created", userm.createdAt.toDateString(), true)
        .setColor(0x66b3ff);
      if (!message.guild.me.hasPermission("EMBED_LINKS")) {
        return message.channel.send(
          "I don't have permissions for ember messages and insert links"
        );
      }
      message.channel.send({ embed });
    }
  }
};
