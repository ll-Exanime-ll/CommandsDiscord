const Discord = require("discord.js");

module.exports = {
  name: "leave",
  aliases: ["salir", "sal", "exit"],
  category: "Music",
  description: "Leaves the canal",
  run: async (client, message, args) => {
    let canalvoz = message.member.voice.channel;
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send(
        "> ❌ You do not have permissions to perform this operation!"
      );
    if (!canalvoz) {
      message.channel.send("You are not connected to a voice channel.");
    } else {
      message.channel
        .send("Leaving the voice channel.")
        .then(() => {
          canalvoz.leave();
        })
        .catch(error => console.log(error));
    }
  }
};
