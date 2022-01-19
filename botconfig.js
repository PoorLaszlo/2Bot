module.exports = {
    Admins: ["221287211683938306",], //Admins of the bot
    ExpressServer: true, //If you wanted to make the website run or not
    DefaultPrefix: process.env['prefix'] || "!", //Default prefix, Server Admins can change the prefix
    Port: 3000, //Which port website gonna be hosted
    SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
    Token: process.env['token'] || "", //Discord Bot Token
    ClientID: process.env['clientId'] || "", //Discord Client ID
    ClientSecret: process.env['clientSecret'] || "", //Discord Client Secret
    Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
    ServerDeafen: false, //If you want bot to stay deafened
    DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
    CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
    "24/7": false, //If you want the bot to be stay in the vc 24/7
    CookieSecret: process.env['pass'], //A Secret like a password
    IconURL:
      "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
    EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
    Permissions: 2205281600, //Bot Inviting Permissions
    Website: "https://discord-musicbot.poorlaszlo.repl.co", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
    
    Presence: {
      status: "online", // You can show online, idle, and dnd
      name: "!help for REVEALING OUTFIT", // The message shown
      type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
    },
  
    //Lavalink
    Lavalink: {
      id: "Main",
      host: "lavalink-replit.poorlaszlo.repl.co",
      port: 443, // The port that lavalink is listening to. This must be a number!
      pass: "2bcoom",
      secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
    },
  
    //Please go to https://developer.spotify.com/dashboard/
    Spotify: {
      ClientID: process.env['spotifyClientId'] || "", //Spotify Client ID
      ClientSecret: process.env['spotifyClientSecret'] || "", //Spotify Client Secret
    },
  };
  