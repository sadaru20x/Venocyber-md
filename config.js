//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5hV2t6NUNaNGUvd2RZNHUrODJCUjRMSjVHUzduTEowaWVKNjJzNWxIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVJwOFB6cEFhSXppaU5NdzR4Y1JhYTkzWkpiazlCOHJqblpFTHFGY2swaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTmhpTTJubUFPMHFYaGZLbnU0aDdmb25ld1dINGpUNkF6eUtZRUUvKzAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0WlhrYjRkNjN6aU5LOVU3U3ZSUzhwbXFIaElmN3NhMmY0dDBGQm9ab21RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDRk1WQ2ZLaFJxNUM2QjN5Q2psRXJQWHhMUEM4OERPREhIaDZUalNsM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVwb0xPdTBia2ozWXJ4bEowNkJEM2J0S3pGcmUrOFR0VURZcFpnNE5xUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkU1bklaMEJOOXE3V0xqSEV4U1NraXdWc2NZU2tsUzNBY2JsOWRwRnAwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjArQXhkNnR2T1JEeWlmSzl0Z0cwcHNJNm9SS1Zqb29XS1Y2bzFHQ29Scz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDUE96ZFRwSkZqamErY2VpbXVoVTZYc092cFV5VXdjWERsL0ZHNVl4akp3UFR5YlhLdERGNTBmSkdySWZ3S044emNWd00xQ0srQTRGM0VSTmJOQkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6ImlITWRLY0lPd2dLVlVRSUR4V0JIcjJMRmVlTjRFSG82bDVRNytlajF4ejQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEIxNTYwQzJCNzU5NDE4ODMzOTZGOEQ4MjhGQTYyMjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTU0NTcyOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTg4NzM1OEM1MDczQ0ZERDg5MjI3ODU3NzYyRTUzOUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTU0NTczMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI0MzA5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjg5MjBCNkUzRDczREJCMDY1MzA2M0Q2Qjc5RDE5RjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTU0NTczMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib3pwaXppdGxUUHFZb2RuM0hPOHpsQSIsInBob25lSWQiOiJmMzNlNzcxMS1hZjdiLTRkZTktYTcyNy03OTllMDZiODY0ZGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDl5N3VLRnBWMUdTcGpEL3ZPeStKN1A4V3ZZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZVVWI5cnR1ZVJHaWpXaG1YTjJxZnJ4ZjJBND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOMkQ1U0pRTCIsIm1lIjp7ImlkIjoiOTQ3NjI0MzA5MzM6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIaWkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUWDYrRUVFUFBuOHJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZRMnNlQno0SE9LRHNlaVJQWWdmcTB1WlczZVBia3pRVjVIRTF5ZW9JRkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImM4bjYwQmxLN0hmcDZuaG1QNVFPbkZUVzMwYTRLVkNyL0dGZlhZRmI3Ujd6LzVJT3JOR2ZDRkMwTjZFcUx5dTVoZjA4MnR2aTU0dENJQ1NWNkVWQ0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0OXVuRGluRmpiTnptR0RQeThwMXZuQWZsdXFJZ0tRSDFxSkR5N01TQmlkVEVxcDBFQkhWbG4xelVGeThQOXM4dENmamxOZGw0c2djeER3ZWpzcStBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyNDMwOTMzOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDBOckhnYytCemlnN0hva1QySUg2dExtVnQzajI1TTBGZVJ4TmNucUNCUSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTU0NTcyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJYjUifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
