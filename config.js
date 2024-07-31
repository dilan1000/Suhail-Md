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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_58_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIKzZKbEF5L1gwRXkzc2U0enFKZjhpdWRnd2xHZWI2K0pHRVNVaXpqaGtjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIyOTQ2MjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MjRGREU1ODg4QzUyMEMxNTMyNTc4Qjc2ODQ0OEYyM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MzQzMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMjk0NjI0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjBEMTZCOEU5QzYyRUVDOTEyRUVCQ0E0Njc3OUZFNjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDM0MzAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhuMFVRaGFQU2lTRXMzdFdrZHkwS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGEzOTY3NTctYTI1Mi00N2ZiLThkZjUtZGMyYjEwNzc3YmIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDI1LFxuICAgICAgMTE5LFxuICAgICAgNjAsXG4gICAgICAxNzEsXG4gICAgICA5OCxcbiAgICAgIDUxLFxuICAgICAgNzEsXG4gICAgICAzOCxcbiAgICAgIDI3LFxuICAgICAgMjI4LFxuICAgICAgMTA4LFxuICAgICAgMjExLFxuICAgICAgMTcxLFxuICAgICAgMjA4LFxuICAgICAgMTY5LFxuICAgICAgMjM1LFxuICAgICAgMTk5LFxuICAgICAgNDUsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxNTUsXG4gICAgICAyMzEsXG4gICAgICA4NyxcbiAgICAgIDk4LFxuICAgICAgMTg0LFxuICAgICAgMTY3LFxuICAgICAgNDAsXG4gICAgICAxNTksXG4gICAgICA5LFxuICAgICAgMTgzLFxuICAgICAgNTUsXG4gICAgICA5NixcbiAgICAgIDM5LFxuICAgICAgMTU0LFxuICAgICAgMjMwLFxuICAgICAgMTg2LFxuICAgICAgMTE0LFxuICAgICAgOCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRQ0VCVFBEM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjI5NDYyNDk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyMjIzNjcwMjcyMTcwOjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4oiCzrnihJPOsc63X+Kck1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Ec2o0b0ZFUGlGcWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiME9mSTlTazJucCt4MHpTZFVuQnVodXpvSVQvamUySW93bWQ0R1VyWnhFMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCTFE4QjdBU0ovL3ZHbGY3c29qd2dhY2llK2NrOThrckZuMlhrM3k1NCtqd05zdmhhWUJzRWFmUU5Ocmo2RnBqQVMvajhNbDBwZjZDaDc1Rm55cUtEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFV3RlaDJSSEt0aVNjZDdFeWtJSU5sVWF1eXBTd28wVFBhNWJ0WXVMRlZFMW5sejNnN1JHTlU1amlaVjhVTUs0Zjd5azg1MGZITTF0SnZHdTlYUEZBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyMjk0NjI0OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQzNDMwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpSYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlJiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaDVEeEJSTmJ2M1pDWUw0YjYzTWt0NTJYc1pkMURaSDRXRzVpOWtkcUQ0bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzYzNDA4NDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MzQzMDE4NTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "DILAN",
  botname : process.env.BOT_NAME  || "DILAN_MD",
  ownername:process.env.OWNER_NAME|| "DILAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
