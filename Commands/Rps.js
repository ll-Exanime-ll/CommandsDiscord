const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "rps",
  aliases: ["ppt"],
  category: "Information",
  description: "rock-paper-scissors game",
  run: async (client, message, args) => {
  
  const option = args[0]
  if(!option) return message.channel.send("You must choose an option **(rock, paper or scissors)**")
  
  let optionsbot = ['rock', 'paper', 'scissors']
  let optionbot = optionsbot[Math.floor(Math.random() * optionsbot.length)]
  
  if(option === 'scissors'){
  
    if(optionbot === 'scissors'){
    
      const embed = new Discord.MessageEmbed()
      
      .setTitle("Tie!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("YELLOW")
      
      return message.channel.send(embed)
    }
    
    if(optionbot === 'paper'){
    
          const embed = new Discord.MessageEmbed()
      
      .setTitle("You've won!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("GREEN")
      
      return message.channel.send(embed)
    
    }
    
    if(optionbot === 'rock'){
    
          const embed = new Discord.MessageEmbed()
      
      .setTitle("You have lost!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("RED")
      
      return message.channel.send(embed)
      
    }
    }
    
  if(option === 'paper'){
  
    if(optionbot === 'scissors'){
    
      const embed = new Discord.MessageEmbed()
      
      .setTitle("You have lost!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("RED")
      
      return message.channel.send(embed)
    }
    
    if(optionbot === 'paper'){
    
          const embed = new Discord.MessageEmbed()
      
      .setTitle("Tie!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("YELLOW")
      
      return message.channel.send(embed)
    
    }
    
    if(optionbot === 'rock'){
    
          const embed = new Discord.MessageEmbed()
      
      .setTitle("You've won!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("GREEN")
      
      return message.channel.send(embed)
      
    }
    }
    
  if(option === 'rock'){
  
    if(optionbot === 'scissors'){
    
      const embed = new Discord.MessageEmbed()
      
      .setTitle("You've won!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("GREEN")
      
      return message.channel.send(embed)
    }
    
    if(optionbot === 'paper'){
    
          const embed = new Discord.MessageEmbed()
      
      .setTitle("You have lost!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("RED")
      
      return message.channel.send(embed)
    
    }
    
    if(optionbot === 'rock'){
    
          const embed = new Discord.MessageEmbed()
      
      .setTitle("Tie!")
      .setDescription(`The bot has chosen **${optionbot}** and you have chosen **${option}**`)
      .setColor("YELLOW")
      
      return message.channel.send(embed)
      
    }
    
    message.channel.send(`The option **${option}** is not available!`)
  }}
  }
