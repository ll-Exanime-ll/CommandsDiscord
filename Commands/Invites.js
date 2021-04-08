const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "invites",
  category: "Information",
  description: "Binary to decimal transformation",
  run: async (client, message, args) => {
message.guild.fetchInvites().then(invs => {
    let user = message.mentions.users.first() || message.author
    let personalInvites = invs.filter(i => i.inviter.id === user.id);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(new Discord.MessageEmbed()
    .setTitle('Invites')
    .setDescription(`${user} has **${inviteCount}** Invites in this server!`)
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
    .setColor("GREEN"));
})
}
}
