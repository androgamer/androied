
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ورحمة الله وبركاته') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
auto.js
جارٍ عرض auto.js.
