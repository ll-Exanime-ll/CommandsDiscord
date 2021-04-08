const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Information",
  description: "Show the latency you have in discord.",
  run: async (client, message, args) => {
    let ping = Math.floor(message.client.ws.ping);

    message.channel.send("**PONG!**").then(m => {
      message.channel.bulkDelete("1");
      const embed = new MessageEmbed()
        .setDescription(
          `:incoming_envelope: Ping Message: \`${m.createdTimestamp -
            message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``
        )
        .setColor("#36393f");
      if (!message.guild.me.hasPermission("EMBED_LINKS")) {
        return message.channel.send(
          "I don't have permissions for ember messages"
        );
      }
      message.channel.send(embed);
    });
  }
};
