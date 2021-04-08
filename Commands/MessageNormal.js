const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

module.exports = {
  name: "msg",
  category: "Test",
  description: "Test",
  run: async (client, message, args) => {
    if (message.author.id !== "id") return; //This will only respond to the Discord profile of that ID (delete if you want everyone to be able to use this command).
    message.delete();
    message.channel.send(
      "Hello",
//If you want to send an image:
//    {
//    files: [
//    ""
//    ]
//  }
//End image
    );
  }
};
