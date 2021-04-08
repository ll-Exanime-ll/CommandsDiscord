module.exports = {
  name: "clear",
  aliases: ["purge", "nuke", "borrar"],
  category: "Moderation",
  description: "Delete text messages",
  run: async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10);

    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("> ❌ Enter a number from 2-100 to delete!");
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "I do not have permissions to delete messages"
      );
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "> ❌ You do not have permissions to perform this operation!"
      );
    await message.delete();
    const fetched = await message.channel.messages.fetch({
      limit: deleteCount
    });
    message.channel
      .bulkDelete(fetched)
      .catch(error =>
        message.reply(`> ❌ Messages could not be deleted due to: ${error}`)
      );
  }
};
