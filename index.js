const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "MTAwOTg3ODQyNjA2MjE2MDAxMg.GV04xp.4FNIe8NWxgd44QlA_M-0H_BH8JjLQg8VY7h6Jo",
  prefix: "",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})
//евенты
bot.onMessage()
bot.onInteractionCreate()
//перенаправление
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./comandos/')
