module.exports = {
    Admins: ["221287211683938306",], //Admins of the bot
    ExpressServer: true, //If you wanted to make the website run or not
    DefaultPrefix: process.env['prefix'] || "!", //Default prefix, Server Admins can change the prefix
    Port: process.env['PORT'], //Which port website gonna be hosted
    SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
    Token: process.env['token'] || "", //Discord Bot Token
    ClientID: process.env['clientId'] || "", //Discord Client ID
    ClientSecret: process.env['clientSecret'] || "", //Discord Client Secret
    Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
    ServerDeafen: true, //If you want bot to stay deafened
    DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
    CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
    "24/7": false, //If you want the bot to be stay in the vc 24/7
    CookieSecret: process.env['pass'], //A Secret like a password
    IconURL:
      "https://raw.githubusercontent.com/PoorLaszlo/2Bot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
    EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
    Permissions: 8, //Bot Inviting Permissions
    Website: "https://2bot.up.railway.app", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
    
    Presence: {
      status: "online", // You can show online, idle, and dnd
      name: "!help for LAVALINK NODE NOT CONNECTED", // The message shown
      type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
    },
  
    //Lavalink
    Lavalink: {
        id: "Main", //- Used for indentifier. You can set this to whatever you want.
        host: "losingtime.dpaste.org", //- The host name or IP of the lavalink server.
        port: 2124, // The port that lavalink is listening to. This must be a number!
        pass: "SleepingOnTrains", //- The password of the lavalink server.
        secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
    },
    //Backup nodes:
    /*Lavalink: [
      {
          host:"lavalink.devin-dev.xyz",
          port:443,
          pass:"lava123",
          id:"devin-dev",
          secure: true
      },
      {
          host:"lavalink.devz.cloud",
          port:443,
          pass:"mathiscool",
          id:"devz",
          secure: true
      },
      {
          host:"lavalink2.devz.cloud",
          port:443,
          pass:"mathiscool",
          id:"devz 2",
          secure: true
      },
      {
          host:"www.lavalink-priyam.ml",
          port:443,
          pass:"methisbigbrain",
          id:"lavalink-pryam",
          secure: true
      },
      {
          host:"lavalink.scpcl.site",
          port:443,
          pass:"lvserver",
          id:"scpcl",
          secure: true
      },
      {
          host:"lavalink.mariliun.ml",
          port:443,
          pass:"lavaliun",
          id:"mariliun",
          secure: true
      }, 
      {
          host:"lavalinkinc.ml",
          port:443,
          pass:"incognito",
          id:"lavalinkinc",
          secure: true
      }, 
      {
          host:"www.lavalinknodepublic.ml",
          port:443,
          pass:"mrextinctcodes",
          id:"lavalinknodepublic",
          secure: true
      },
      {
          host:"lavalink.cobaltonline.net",
          port:443,
          pass:"cobaltlavanode23@",
          id:"cobaltonline",
          secure: true
      },
      {
          host:"lava.link",
          port:80,
          pass:"123",
          id:"lava.link",
          secure: false
      },
      {
          host:"losingtime.dpaste.org",
          port:2124,
          pass:"SleepingOnTrains",
          id:"dpaste",
          secure: false
      },
      {
          host:"lavalink.islantay.tk",
          port:8880,
          pass:"waifufufufu",
          id:"islantay",
          secure: false
      }
   ],
   LavalinkErela: [
      {
          host:"lavalink.devin-dev.xyz",
          port:443,
          pass:"lava123",
          identifer:"devin-dev",
          secure: true
      },
      {
          host:"lavalink.devz.cloud",
          port:443,
          pass:"mathiscool",
          identifer:"devz",
          secure: true
      },
      {
          host:"lavalink2.devz.cloud",
          port:443,
          pass:"mathiscool",
          identifer:"devz 2",
          secure: true
      },
      {
          host:"www.lavalink-priyam.ml",
          port:443,
          pass:"methisbigbrain",
          identifer:"lavalink-pryam",
          secure: true
      },
      {
          host:"lavalink.scpcl.site",
          port:443,
          pass:"lvserver",
          identifer:"scpcl",
          secure: true
      },
      {
          host:"lavalink.mariliun.ml",
          port:443,
          pass:"lavaliun",
          identifer:"mariliun",
          secure: true
      }, 
      {
          host:"lavalinkinc.ml",
          port:443,
          pass:"incognito",
          identifer:"lavalinkinc",
          secure: true
      }, 
      {
          host:"www.lavalinknodepublic.ml",
          port:443,
          pass:"mrextinctcodes",
          identifer:"lavalinknodepublic",
          secure: true
      },
      {
          host:"lavalink.cobaltonline.net",
          port:443,
          pass:"cobaltlavanode23@",
          identifer:"cobaltonline",
          secure: true
      },
      {
          host:"lava.link",
          port:80,
          pass:"123",
          identifer:"lava.link",
          secure: false
      },
      {
          host:"losingtime.dpaste.org",
          port:2124,
          pass:"SleepingOnTrains",
          identifer:"dpaste",
          secure: false
      },
      {
          host:"lavalink.islantay.tk",
          port:8880,
          pass:"waifufufufu",
          identifer:"islantay",
          secure: false
      }
    ],*/
    //Please go to https://developer.spotify.com/dashboard/
    Spotify: {
      ClientID: process.env['spotifyClientId'] || "", //Spotify Client ID
      ClientSecret: process.env['spotifyClientSecret'] || "", //Spotify Client Secret
    },
  };
  