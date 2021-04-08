const axios = require('axios')
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "bans",
  category: "Information",
  description: "It says how many bans there are in total",
  run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`Total ${bans.size} bans`)
        })

    }
}
