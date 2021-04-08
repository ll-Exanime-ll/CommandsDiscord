const Discord = require("discord.js");

module.exports = {
  name: "join",
  aliases: ["entrar", "entra"],
  category: "Music",
  description: "Joins the channel",
  run: async (client, message, args) => {
    let canalvoz = message.member.voice.channel;
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send(
        "> ❌ You do not have permissions to perform this operation!"
      );
    if (!canalvoz || canalvoz.type !== "voice") {
      message.channel.send("You need to join a voice channel first!.");
    } else if (message.guild.voiceConnection) {
      message.channel.send("I am already connected on a voice channel.");
    } else {
      message.channel
        .send("Connecting ...")
        .then(m => {
          canalvoz
            .join()
            .then(() => {
              m.edit("Successfully connected.").catch(error =>
                console.log(error)
              );
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    }
  }
};
