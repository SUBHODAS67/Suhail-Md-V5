const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "\n*RAJ-BOT-OFC BY RAJ-KUMAR*\nī.am https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" 


global.devs = "994407122025" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919064884766";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994407122025,994406212730,919064884766,918371079335";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994407122025,994406212730";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_28_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSU08wYlRoTmQ5OVNQOVBjSERuSTBaVTdJZXZmZUYyNkgrK25kSHBnSmFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODM3MTA3OTMzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzhFMTBCMTMxQTlEQUZGNzUxMzkzRjgyNjE1QkUwODNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NDQxNzA1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZrQ0pBTkFUUUlTQU03TmNIWWRqc1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmYxZDYzYmYtYzhjZS00ZjhmLTkwMTgtNmQ1NDUwYjc2OGIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTk4LFxuICAgICAgODMsXG4gICAgICAxMDksXG4gICAgICA4NixcbiAgICAgIDE3MixcbiAgICAgIDk3LFxuICAgICAgMTcwLFxuICAgICAgMTM2LFxuICAgICAgMTM2LFxuICAgICAgMTkzLFxuICAgICAgMTM0LFxuICAgICAgMTU3LFxuICAgICAgMTA3LFxuICAgICAgMjMxLFxuICAgICAgMjQxLFxuICAgICAgMTA2LFxuICAgICAgNzMsXG4gICAgICAyOCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDUyLFxuICAgICAgOTcsXG4gICAgICA0NSxcbiAgICAgIDIzOSxcbiAgICAgIDc3LFxuICAgICAgMjUxLFxuICAgICAgMjksXG4gICAgICAxOTAsXG4gICAgICA0NSxcbiAgICAgIDIxNCxcbiAgICAgIDYxLFxuICAgICAgODAsXG4gICAgICA1MCxcbiAgICAgIDEzNixcbiAgICAgIDE4NSxcbiAgICAgIDIwMCxcbiAgICAgIDEzMixcbiAgICAgIDExNCxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRFY4TDlQNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MzcxMDc5MzM1OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDk2NzEyMzA0NDc3Njg6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUMwL2VzRUVLSGYxTGdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVak5JN0VmbURMQVc3UjBudXNSU2xKb1RCME1TSVdkc043S1l0NjNQQkY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjkzYWpPZEdiOXJkWFhieGU2TGRjOHljcUozOFpMYlp4S0NUM0M1ZTJ6VThIZEZMb09tL3piV2ptK0lHemhBaFd1QmFhc3NOOExOU3grV0RETmt0TkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNDNTFncHFGaGRHVVJJTXV2U0VnOFV4bEJPUG9BbmZTb2N3MmFQMUJwL1YxOU53SmQwMXNvbXV3dmV3cDZQM3YxREtxeEY4SjNjVVgxVkdzcFBpWGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODM3MTA3OTMzNTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NDQxNzAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnlFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGeUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyTjdZRnFqM09yYXNCeTJMMXVMOGtjV1FKZXpQZnB2TGRlbWk3WW5IWnBnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMDAxOTE4MDcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "+994407122025",
  packname: process.env.PACK_NAME || "RajWhatsApp",
  botname : process.env.BOT_NAME  || "★★𝗥𝐀𝐉-𝐁𝐎𝐓-𝐎𝐅𝐂★★",
  ownername:process.env.OWNER_NAME|| "RAJ-WA-OFC",


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
