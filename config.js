const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="subhodas8080@gmail.com"
global.location="Kolkata, India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VamwTvzBvvsmvIihYD1W || "https://whatsapp.com/channel/0029VamwTvzBvvsmvIihYD1W" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "\n*SUBHO-BOT-OFC BY SUBHO DAS\nī.am https://whatsapp.com/channel/0029VamwTvzBvvsmvIihYD1W" 


global.devs = "918391937667" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919735393974";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918391937667,919735393974,917679327461,994407122025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/e6TVzEU.mp4"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "918391937667,917679327461";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_18_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZINVl1LzFsemdvZjRLempVNC9OemFEd2JnS3lqZDY0NFZ5ZFV3ekVNR3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9jNkMwdXhyUzVtSldXbjRPcGl6MmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzE0ZTYxZjQtYTRlMC00OGIyLWJkNWEtMzNhODU5MGY5NTk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDEwMixcbiAgICAgIDksXG4gICAgICAyMyxcbiAgICAgIDE3MSxcbiAgICAgIDE5NyxcbiAgICAgIDMyLFxuICAgICAgNzUsXG4gICAgICAyMjAsXG4gICAgICAyMjUsXG4gICAgICAxNDUsXG4gICAgICAxNzIsXG4gICAgICA3NSxcbiAgICAgIDE5MCxcbiAgICAgIDIwOCxcbiAgICAgIDg1LFxuICAgICAgNixcbiAgICAgIDE0MSxcbiAgICAgIDIyMyxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDEyNSxcbiAgICAgIDUxLFxuICAgICAgMTgyLFxuICAgICAgMTkwLFxuICAgICAgNjMsXG4gICAgICAyNDUsXG4gICAgICAyMzcsXG4gICAgICAxNzAsXG4gICAgICAzOSxcbiAgICAgIDI0NyxcbiAgICAgIDIzNixcbiAgICAgIDE4LFxuICAgICAgOTUsXG4gICAgICAxMSxcbiAgICAgIDE3MCxcbiAgICAgIDE5NixcbiAgICAgIDE4NixcbiAgICAgIDE4LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFaMjE1OUE3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgzNzEwNzkzMzU6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTY3MTIzMDQ0Nzc2ODo4MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTzAvZXNFRUl2cjNMZ0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVqTkk3RWZtRExBVzdSMG51c1JTbEpvVEIwTVNJV2RzTjdLWXQ2M1BCRjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwick00L0o2enU1cEZobWNxUThsRSt3bHlWNTdaL3BEa29yM0o1dUdRYW11R2w5N2RsSk1adVZTeW10MGJzTitnTTc4Qk5Sa2JkVm44RkVtbHA3bmIwQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWlHWWVjbHJVeVJwMmYwNEhZTndQdkZ2eWlpLzlYV2pwK0pwY2x4MnBHVjRERjlsc2dUQjBGL1g3TkxyaDk1eEVKeloyeGUzaFgrdHRYQ09MSWhXQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MzcxMDc5MzM1OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1NzQyODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGeVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ5VS5qc29uIjogIntcImtleURhdGFcIjpcIlJ1N20vSzVCWkhTcjhuZ2plMVVFRm50SHFMeUtScHpHZDJXR28vbkk2dDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMwMDE5MTgxMSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "+918391937667",
  packname: process.env.PACK_NAME || "SubhoWhatsApp",
  botname : process.env.BOT_NAME  || "★★SUBHO-𝐁𝐎𝐓-★★",
  ownername:process.env.OWNER_NAME|| "SUBHO DAS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
