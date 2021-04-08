const axios = require('axios')
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "binary",
  category: "Information",
  description: "Decimal to binary transformation",
  run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Node leave the command empty, please`)
        }

        const embed = new MessageEmbed()
            .setTitle('Text to Binary')
            .setDescription(data.binary)

        await message.channel.send(embed)
    }
}
