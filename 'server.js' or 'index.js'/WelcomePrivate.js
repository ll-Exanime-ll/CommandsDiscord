client.on("guildMemberAdd", member => {
  member.send(
    `> Hey <@${member.user.id}>, welcome to the server **${member.guild.name}**, Have fun!`
  );
});

//Welcomes in private
