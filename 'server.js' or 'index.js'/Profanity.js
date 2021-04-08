client.on("message", async (message) => {
  let words = ["Choose all the bad words"]
  if(words.some(p => message.content.toLowerCase().split(' ').includes(p.toLowerCase()))) { 
  await message.delete();
  await message.channel.send(`> <@${message.author.id}> Moderate your vocabulary, so as not to be penalized.`);
}});
