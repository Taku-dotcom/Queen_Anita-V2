//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBjWlM1a1k2V2x4a1JOZVRFMThUS3pJM21lN1ZxaVZ3cXl5cHRwN2EyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTVVOTA5RzhyMWpuY1J0ZFl6aTVNT1daSzNlUzFnbS9DVUJ3SlU0SHNCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQUYzaGZBOEE2MkMwOG0xUzU2NXIweWEzaEdLRGlQbkJDK0t2NjkzRTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKZmc0R3laUjlMZElCay9kVldIc2I4K2c3YkZCWlBIRWZHNkxXR2xJZzBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LdGJmc3RZb25WQncrODAyUkdJakFmVXh2QlJtZ1ovZ01pYVRqY3M0RWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpGbUtyT3NEMWR0QzZyYzFwK3ZxSDlJeXd0eTJKektCOUlmS3RiK2Fpamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxaZjN1eFF0Smt0TVN4cjREdlFRdncvcEdlbXFydlBPSTNIZ1N0M1kwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2ZmZ1ByWTNzcENnSmREYlFIY1lLejN2T2J6LzNabVVzaHFBRitkL05Udz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpoMk9ocVpNeXhzdVp3YkFEbEcwWlF5RHNMZjhtejNBYUFPbjhlT0pDQnBrV0loMGs1U2pJektUTHVucGRwNGVEMFpwRnFPN254WlpEdlR0WXR1SUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiIrUndJQXFlUHN1SHlDa1pHY2NkaFR3Ull0SEtvVVoxamZ2N3FMTXlmVE1nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMDM4NjY1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNDlBNTg1Mzk1RTc2REQyNzRGQTI1MTBEOUQyRjM4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMDgyODEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTAzODY2NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTFCQkY3MzBGOEM5QjlGQzE3ODQ4N0MyNDkxNUVGNzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTA4MjgxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNkJ0T2lGXzlTR0NhQnVXMEpiaU1tZyIsInBob25lSWQiOiJmNjZjYzg4Ni1hNDZiLTRkZTYtYmZlYS0xNGQ5NTNkM2VmNmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblRBUFFxTllnc3UrQ2F2ZGpZanRKUEkzLzU0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA4bFRKMXkzR2pJNTlNaS94djVJWGtTdjBFWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQNDJBWkhLRSIsIm1lIjp7ImlkIjoiMjYzNzEwMzg2NjU4OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidGFrdSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExSak1JRkVLM0gxclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTndsYjFUcG9RZEpiV0RGSFZLcEo0VHg0QVk5KzJTMzlTLytUa0NmVmdYMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFFPWVppdDRKZ1BMbmoyZk9pRHNPS0pPNUZWMW5UQW5Na05LM1NwSjRNajhLcS93RVNLUk9Obm1TamQ1cE9UZ2t3RXh3UG8rKzFucXNjUTM0ZzhKQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImVzcmt5UkNrRjI5bkw1RFVKampmRTk4ZkZGMEVVTU9ybnBiWFgzYW4yMzhWbUsvZGwvemNheDVpS2xRRUh2akVReWZ6Y0pMSi83eFdtY0lobWJreERRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzEwMzg2NjU4OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGNKVzlVNmFFSFNXMWd4UjFTcVNlRThlQUdQZnRrdC9Vdi9rNUFuMVlGOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA4MjgxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZkMifQ==";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
