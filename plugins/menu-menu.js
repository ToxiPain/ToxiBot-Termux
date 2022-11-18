import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './media/menus/Menuvid1.mp4'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}


let str = 
`╭═✦͜͡ৡৢ╡♛𝓣oxi-𝓑ot♛╞ৡৢ͜͡✦═
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟ *      
║◄🔰┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🔰►
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈  
║┊:Creador: 𝑻𝒐𝒙𝒊𝒑𝒂𝒏 
║┊:Num: wa.me/50557418454
║┊:Tiempo activo: 
║┊ *${uptime}*
║┊:Fecha: 
║┊ *${week}, ${date}*
║┊:      ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ 
║◄🔰┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🔰►
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟ *      
╰═✦͜͡ৡৢ╡♛𝓣oxi-𝓑ot♛╞ৡৢ͜͡✦═
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ 
*INFO COMANDOS:*
💳: Comandos de Owner/Admins
         -
*🤖 CONVERTIRSE EN BOT: 🤖* 
_${usedPrefix}serbot_
_${usedPrefix}detener_
_${usedPrefix}bots_
         -
╭▬▬▬▬▬▬▬ *˚✯ཻ⸙ ̥•┉┉•
*_⊱✦•INFORMACION DEL BOT ℹ️_*
▋╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅   
▋┋ _${usedPrefix}infobot_
▋┋ _${usedPrefix}speedtest_
▋┋ _${usedPrefix}grupos_
▋┋ _${usedPrefix}grouplist_
▋┋ _${usedPrefix}owner_
▋┋ _Bot (Sin prefijo)_
▋┋ _${usedPrefix}roleplay_ 
▋┋ _${usedPrefix}enable/disable_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•JUEGOS 🎯_*
╰────────────────╯
■█🎯█■▱▰▱▰▱█🎯█■
▋┋ _${usedPrefix}mates_
▋┋ _${usedPrefix}suitpvp *<@tag>*_
▋┋ _${usedPrefix}ttt *<nombre sala>*_
▋┋ _${usedPrefix}delttt_
▋┋ _${usedPrefix}verdad_
▋┋ _${usedPrefix}reto_
▋┋ _${usedPrefix}top *<texto>*_
▋┋ _${usedPrefix}historiaromantica_
▋┋ _${usedPrefix}fraseromantica_
▋┋ _${usedPrefix}consejo_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•Herramientas ⚙️_*
╰────────────────╯
■█⚙️█■▱▰▱▰▱█⚙️█■
▋┋ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
▋┋ _${usedPrefix}afk *<motivo>*_
▋┋ _${usedPrefix}whatmusic *<tag a un aud>*_
▋┋ _${usedPrefix}del *<tag a un msje del Bot>*_
▋┋ _${usedPrefix}styletext *<texto>*_
▋┋ _${usedPrefix}inv_
▋┋ _${usedPrefix}traducir *<texto>*_
▋┋ _${usedPrefix}calc *<operacion math>*_
▋┋ _${usedPrefix}dado_
▋┋ _${usedPrefix}morse_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•MAKER/CREAR 🖍️_*
╰────────────────╯
■█🖍️█■▱▰▱▰▱█🖍️█■
▋┋ --- *STICKER* ---
▋┋ _${usedPrefix}sticker/s *<tag a una img o vid>*_
▋┋ _${usedPrefix}attp (2,3) *<texto>*_ 
▋┋ _${usedPrefix}ttp (2,3,4,5) *<texto>*_ 
▋┋ _${usedPrefix}stickermarker *<efecto> <tag a una img>*_
▋┋ _${usedPrefix}wm *<packname> <autor>*_
▋┋ _${usedPrefix}stickerfilter *<efecto> <tag a una img>*_
▋┋ _${usedPrefix}scircle *<tag a una img>*_
▋┋ _${usedPrefix}pat_
▋┋ _${usedPrefix}slap_
▋┋ _${usedPrefix}kiss_
▋┋ --- *CONVERTIR* ---
▋┋ _${usedPrefix}toimg *<tag a un sticker>*_
▋┋ _${usedPrefix}tomp3 *<tag a un video / aud>*_
▋┋ _${usedPrefix}toptt *<tag a un vid / aud>*_
▋┋ _${usedPrefix}tts es *<texto>*_
▋┋ --- *CREADOR* ---
▋┋ _${usedPrefix}logos *<efecto> <texto>*_
▋┋ _${usedPrefix}simpcard *<@tag>*_
▋┋ _${usedPrefix}gay *<@tag>*_
▋┋ _${usedPrefix}hornycard *<@tag>*_
▋┋ _${usedPrefix}ytcomment *<texto>*_
▋┋ _${usedPrefix}phmaker *<opcion><tag a una img>*_
▋┋ _${usedPrefix}lolice *<@tag>*_
▋┋ _${usedPrefix}pixelar_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•ADMINS💳_*
╰────────────────╯
■█💳█■▱▰▱▰▱█💳█■
▋┋ _${usedPrefix}infobot_ 💳
▋┋ _${usedPrefix}grupo *<abrir / cerrar>*_ 💳
▋┋ _${usedPrefix}promote *<@tag>*_ 💳
▋┋ _${usedPrefix}demote *<@tag>*_ 💳
▋┋ _${usedPrefix}setname *<texto>*_ 💳
▋┋ _${usedPrefix}setdesc *<texto>*_ 💳
▋┋ _${usedPrefix}tagall *<texto>*_ 💳
▋┋ _${usedPrefix}hidetag *<texto>*_ 💳
▋┋ _${usedPrefix}fantasmas_ 💳
▋┋ _${usedPrefix}votar_ 💳 
■█🔰█■▰▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•Efecto de Audios 🎤_*
╰────────────────╯
■█🎤█■▱▰▱▰▱█🎤█■
▋┋ _${usedPrefix}menuaudios_
▋┋ _${usedPrefix}bass_
▋┋ _${usedPrefix}blown_
▋┋ _${usedPrefix}deep_
▋┋ _${usedPrefix}earrape_
▋┋ _${usedPrefix}fast_
▋┋ _${usedPrefix}fat_
▋┋ _${usedPrefix}nightcore_
▋┋ _${usedPrefix}reverse_
▋┋ _${usedPrefix}robot_
▋┋ _${usedPrefix}slow_
▋┋ _${usedPrefix}smooth_
▋┋ _${usedPrefix}tupai_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•BUSCADORES 🔍_*
╰────────────────╯
■█🔍█■▱▰▱▰▱█🔍█■
▋┋ _${usedPrefix}stickersearch *<texto>*_
▋┋ _${usedPrefix}animeinfo *<texto>*_
▋┋ _${usedPrefix}google *<texto>*_
▋┋ _${usedPrefix}letra *<texto>*_
▋┋ _${usedPrefix}wikipedia *<texto>*_
▋┋ _${usedPrefix}ytsearch *<texto>*_
▋┋ _${usedPrefix}apkdone *<texto>*_
▋┋ _${usedPrefix}apkgoogle *<texto>*_
▋┋ _${usedPrefix}apkmody *<texto>*_
▋┋ _${usedPrefix}apkshub *<texto>*_
▋┋ _${usedPrefix}happymod *<texto>*_
▋┋ _${usedPrefix}playstore *<texto>*_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•CHAT ANONIMO 📳_*
╰────────────────╯
■█📳█■▱▰▱▰▱█📳█■
▋┋ _${usedPrefix}start_
▋┋ _${usedPrefix}next_
▋┋ _${usedPrefix}leave_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•COMANDOS HORNY🔞_*
╰────────────────╯
■█🔞█■▱▰▱▰▱■█🔞█■
▋┋ ${usedPrefix}hotmenu
■█🔰█■▱▰▱▰▱■█🔰█■
╭────────────────╮
*_⊱✦•DESCARGAS 📥_*
╰────────────────╯
■█📥█■▱▰▱▰▱■█📥█■
▋┋ _${usedPrefix}facebook *<enlace>*_
▋┋ _${usedPrefix}instagram *<enlace>*_
▋┋ _${usedPrefix}mediafire *<enlace>*_
▋┋ _${usedPrefix}stickerpack *<enlace>*_
▋┋ _${usedPrefix}gdrive *<enlace>*_
▋┋ _${usedPrefix}tiktok *<enlace>*_
▋┋ _${usedPrefix}ytmp3 *<enlace>*_
▋┋ _${usedPrefix}ytmp4 *<enlace>*_ 
▋┋ _${usedPrefix}ytmp3doc *<enlace>*_
▋┋ _${usedPrefix}ytmp4doc *<enlace>*_
▋┋ _${usedPrefix}play.1 *<texto / enlace>*_
▋┋ _${usedPrefix}play.2 *<texto / enlace>*_ 
▋┋ _${usedPrefix}play *<texto>*_ 
▋┋ _${usedPrefix}playdoc *<texto>*_
▋┋ _${usedPrefix}playlist *<texto>*_
▋┋ _${usedPrefix}playlist2 *<texto>*_
▋┋ _${usedPrefix}ringtone *<texto>*_
▋┋ _${usedPrefix}imagen *<texto>*_
▋┋ _${usedPrefix}pinteret *<texto>*_
▋┋ _${usedPrefix}wallpaper *<texto>*_
▋┋ _${usedPrefix}wallpaper2 *<texto>*_
▋┋ _${usedPrefix}pptiktok *<usuario>*_
▋┋ _${usedPrefix}igstalk *<usuario>*_
▋┋ _${usedPrefix}igstory *<usuario>*_ 
▋┋ _${usedPrefix}tiktokstalk *<usuario>*_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•RANDOM 👾_*
╰────────────────╯
■█👾█■▱▰▱▰▱█👾█■
▋┋ _${usedPrefix}menurandom_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
_➼✰︙OWNERS MENU 🎭_
╰────────────────╯
■█🎭█■▱▰▱▰▱█🎭█■
▋┋ _${usedPrefix}banchat_ 💳
▋┋ _${usedPrefix}unbanchat_ 💳
▋┋ _${usedPrefix}banuser *<@tag>*_ 💳
▋┋ _${usedPrefix}unbanuser *<@tag>*_ 💳 
▋┋ _${usedPrefix}restart_ 💳
▋┋ _${usedPrefix}msg *<texto>*_ 💳
▋┋ _${usedPrefix}addprem *<@tag>*_ 💳
▋┋ _${usedPrefix}delprem *<@tag>*_ 💳
▋┋ _${usedPrefix}listprem_ 💳 
▋┋_${usedPrefix}cmd add/del_ 💳
▋┋_${usedPrefix}cmd list_ 💳
■█🔰█■▱▰▱▰▱█🔰█■
 ┏ೋ━ೋ✧ೋ━ೋ┓
*REPORTAR FALLOS:*
_${usedPrefix}reporte *<texto>*_
*Grupo Oficial del bot:*
https://chat.whatsapp.com/L2PCWj8QQQ6HPZvmR7izIT
*Grupo Roleplay:*
https://chat.whatsapp.com/LY6J8bHh7G5AwHSjUL0Pjh
 ┗ೋ━ೋ✧ೋ━ೋ┛
*■█🔰█■▱▰▱▰▱█🔰█■
`.trim()

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendHydrated2(m.chat, str, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', [
['💖 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['💝 𝙈𝙚𝙣𝙪 𝘼𝙪𝙙𝙞𝙤𝙨 💝', '.audios']
], m,)
	
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, `${fg}𝙀𝙍𝙍𝙊𝙍 𝙀𝙉 𝙀𝙇 𝙈𝙀𝙉𝙐, 𝙍𝙀𝙋𝙊𝙍𝙏𝘼 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#reporte*\n\n𝙀𝙍𝙍𝙊𝙍 𝙄𝙉 𝙏𝙃𝙀 𝙈𝙀𝙉𝙐, 𝙍𝙀𝙋𝙊𝙍𝙏 𝙏𝙃𝙄𝙎 𝙒𝙄𝙏𝙃 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *#report*`, m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|list\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')} 
