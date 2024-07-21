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
global.owner = process.env.OWNER_NUMBER || "94710628554";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNXMTJ5NTZHdlQzb1p6TzU2c1B4MWovYk94ZHNsbllLT0xIelI4OW1HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVp4d0RmbS9TcHAwRk5BeEpwTlBHSTIzclRneWhBdGZ3OWZtNkMwSXN6az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRVF0dEMwRjNZVlpGMGkzemJEanNOL3NxT2xHdDE4WFhBVW1iaWM3Zms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVjkzZlZ2MlZ3Ri85MkpSand0Z013MGpyT3ZPZ3R6enpzSlVFM2dFbmdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FeXBGSm1pN01XWitQRU0ycnV2MXBlZlNGWVFuL3pER1lFa21wb0NPVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLaEJwSzNWZHJzOWZWU2svaE1oNVovYUtpaTI5Q0pLTHRlQjBUbmxuVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0IyNTB0ZFlZd2I0eHFSbXJadENRL1hFVmU4OCtOb1p0QytjY2ZsMkVuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnI0ZDhpMlZRWVpCeCsyQ3lNbUZ3TjhnY0NRSnhTcHJVbkJhU1N6RTMxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFpVTcvU3VxL2tpTDUrdlF1bGdidy9ackpIVDByOGkxdUNpZkdaZEZpUEE5N09xRThwL3BiNUJaQ2lqdnB6V3p2cGltU0x3MVYrVzB5N3lBVFVhMEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJRWUhSZ3NYa0pOV3FQNEtsQVpLNUtsZ0tNUVlHRWJxQmp4ZVVicVljZTFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDMwOTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM3MzU0NzhCOUYzOTM1OThGMjBGMTU3NEQ3ODVFRjcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1Mjc0ODN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDMwOTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc5MDdFRTk0OUNDQjRBMTVCNDE5QjhGNzNCMTlBODA0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1Mjc0ODN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDMwOTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgyQkRCNkI5Nzg1NjAzNEM5QzhDQUVBQjFGNEU5RkY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1Mjc0ODR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDMwOTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBNzYzNTVBQUYxRTYyMTRBQUI1NkM1OTEyQkU4RThDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1Mjc0ODR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlMRGFkX3JEUjQ2RHpZb1N1YS03NnciLCJwaG9uZUlkIjoiNGY3YmVlN2QtOWI0ZS00ZTVkLWFhNTQtZjc2YzdlNjFhNmM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLN1hjcUIrazMzR1BtTmRabFpnQXJpQWI3dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0N3pKQ2tSbkpkRnVYVG9IQ2dvUGJscWQ1cDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWU1OVk1OQ0wiLCJtZSI6eyJpZCI6Ijk0NzYyNDMwOTMzOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGlpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRFg2K0VFRUszWjhiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmUTJzZUJ6NEhPS0RzZWlSUFlnZnEwdVpXM2VQYmt6UVY1SEUxeWVvSUZBPSIsImFjY291bnRTaWduYXR1cmUiOiJMd3lxY3paMWNiLzY1RGpyRlFJb3NFcjlKUElaKzd6SmY4QnJ4U2FaSEl2YjFFYjF0VzBPZ1RtR0wzNElGWVM3Nkh5Z0tMeTArMjhCeURvOGdpaVVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicHdjaVU2cE1zWW4wQ1JMWkFObjJLNERWQXBtam5VQk9ncTlmem0vM1Y5THJvdGtCQktBNWJmK0NJbGRJYkRWbEwxLzJNMDJHeUhMalc3dnF2d0RzQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjQzMDkzMzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgwTnJIZ2MrQnppZzdIb2tUMklINnRMbVZ0M2oyNU0wRmVSeE5jbnFDQlEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1Mjc0ODEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGJkIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DUMIDU BOT",
  ownername: process.env.OWNER_NAME || "DUMIDU",
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
