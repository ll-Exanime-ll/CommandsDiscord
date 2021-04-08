const axios = require('axios')
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "decode",
  category: "Information",
  description: "Binary to decimal transformation",
  run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(data.text)

        await message.channel.send(embed)
    }
}
