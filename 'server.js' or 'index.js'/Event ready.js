// Extra
Constants.DefaultOptions.ws.properties.$browser = `Discord Android`; //or Discord iOS       //For the bot to be on mobile.
//

client.on("ready", () => {
  console.log(
    `I'm ready!, connected in ${client.guilds.cache.size} servers and ${client.users.cache.size} users and connecting to discord successfully!`
  );

  setInterval(movimientoWithcraft, 4000);

  function movimientoWithcraft() {
    let elementos = [
      `${client.guilds.cache.size} servers`,
      `${client.users.cache.size} users`,
      `+help`
    ];

    client.user.setPresence({
      status: "online", // dnd, idle, online, invisible
      activity: {
        name: elementos[Math.floor(elementos.length * Math.random())],
        url: null, //Only when it is "STREAMING"
        type: "WATCHING" //"PLAYING", "WATCHING", "LISTENING" and "STREAMING"
      }
    });
  }
});
