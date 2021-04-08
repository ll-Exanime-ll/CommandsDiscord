const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "help",
  aliases: ["h", "ayuda"],
  category: "Information",
  description: "Gives you command information",
  run: async (client, message, args) => {
    if (args[0]) {
      return getCMD(client, message, args[0]);
    } else {
      return getAll(client, message);
    }
  }
};

function getAll(client, message) {
  const embed = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor("Need help?")
    .setTitle(
      "> To see my commands Use: ``+commands`` \n> To see information about a command use: ``+help <Command>`` \n> More information in: https://discord-exabot.glitch.me/")
   .setFooter("Create by Exánime#0027");
  if (!message.guild.me.hasPermission("EMBED_LINKS")) {
    return message.channel.send("I don't have permissions for ember messages");
  }
  const commands = category => {
    return client.commands.map(cmd => ``).join(" ");
  };

  const info = client.categories
    .map(cat => stripIndents``)
    .reduce((string, category) => string + "\n ");

  return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
  const embed = new MessageEmbed();

  const cmd =
    client.commands.get(input.toLowerCase()) ||
    client.commands.get(client.aliases.get(input.toLowerCase()));

  let info = `No information found for command **${input.toLowerCase()}**`;

  if (!cmd) {
    return message.channel.send(embed.setColor("RED").setDescription(info));
  }

  if (cmd.name) info = `**Command name**: ${cmd.name}`;
  if (cmd.aliases)
    info += `\n**Alias**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
  if (cmd.description) info += `\n**Description**: ${cmd.description}`;
  if (cmd.usage) {
    info += `\n**Utilizacion**: ${cmd.usage}`;
    embed.setFooter(`Syntax: <> = required, [] = optional`);
  }

  return message.channel.send(embed.setColor("GREEN").setDescription(info));
}
