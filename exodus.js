const aoifb = require("aoi.fb")
const firebase = aoifb.Create({
 apiKey: process.env.apikey,
 authDomain: process.env.authdomain,
 databaseURL: process.env.databaseurl,
 projectId: process.env.projectID,
 storageBucket: process.env.storagebucket,
 messagingSenderId: process.env.messagingsenderid,
 appId: process.env.appid,
 measurementId: process.env.measurementid
})

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const aoijs = require('aoi.js');
const res = require("express/lib/response")
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: ["$getServerVar[prefix]"],
  intents: "all",
  respondOnEdit:{
       commands:true,
       alwaysExecute:true, 
       nonPrefixed:true },
 database: {
         type: "aoi.fb",
         db: firebase
  }
});
bot.status({
  text: "+help!",
  type: "LISTENING",
  status: "idle",
  time: 12
})
bot.status({
  text: "$userTag[$botOwnerID]!",
  type: "LISTENING",
  status: "idle",
  time: 12
})
bot.status({
  text: "$sub[$allMembersCount;3] members!",
  type: "WATCHING",
  status: "idle",
  time: 12
})
const voice = new aoijs.Voice(bot, {
 soundcloud: {
   clientId: process.env.sclientid,
 },
 cache: {
   cacheType: "Memory",
   enabled: true,
 },
});

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
bot.variables(require('./variables.js'))

loader.setColors({
walking: ["blink", "dim", "fgWhite"],
failedWalking: {
name: ["bright", "fgYellow", "underline"],

text: ["bright", "fgRed"]
},
typeError: {
command: ["bright", "fgYellow"],
type: ["fgYellow"],
text: ["bright", "fgRed"]
},
failLoad: {
command: ["bright", "fgMagenta"],
type: ["fgRed"],
text: ["bright", "fgRed"],
},
loaded: {
command: ["bright", "fgCyan"],
type: ["bright", "fgBlue"],
text: ["bright", "fgGreen"]
},

})


bot.onMessage({
  respondToBots: true
  })
bot.onReactionAdd()
bot.onReactionRemove()
bot.onLeave()
bot.onJoin()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onBanAdd()
bot.onTypingStart()
bot.onRateLimit()
bot.onInviteCreate()
bot.onChannelDelete()
bot.onChannelUpdate()
bot.onChannelCreate()
bot.onInviteDelete()
bot.onVoiceStateUpdate()
bot.onRoleUpdate()
bot.onMemberUpdate()
bot.onRoleDelete()
bot.onRoleCreate()
bot.onBanRemove()
bot.onMessageUpdate()
bot.onPresenceUpdate()
bot.onUserUpdate()
bot.onMessageDelete()
bot.onInteractionCreate()
bot.onGuildUpdate()
bot.onEmojiCreate()
bot.onEmojiUpdate()
bot.onEmojiDelete()
bot.onMessageDeleteBulk()
bot.onWebhookUpdate()
bot.onChannelPinsUpdate()
bot.onVariableCreate()
bot.onVariableUpdate()
bot.onVariableDelete()
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate()
bot.onApplicationCmdDelete()