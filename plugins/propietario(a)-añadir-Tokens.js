import MessageType from '@adiwajshing/baileys' 
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}π«πππ πππππππππ ππ πππππππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}π°ππππππ ππ ππππππππ ππ π»ππππͺππππ`
if (isNaN(txt)) throw `${mg}πππ ππππ½ππππ, ππππ πππππππ πππππππ\n\nππ ππππ½πππ, ππππ πππππ ππππ½πππ`
let tok = parseInt(txt)
let joincount = tok
let pjk = Math.ceil(tok * pajak)
joincount += pjk
if (joincount < 1) throw `${mg}ππ ππππππ ππππππ ππΌππΌ πππππ(π) ππ *1*\n\nπππ πππππππ ππππ½ππ πππ πππππ(π) ππ *1*`
let users = global.db.data.users
users[who].joincount += tok

conn.sendHydrated(m.chat, `β­[π»ππππͺππππ πͺ ]β¬£\nβ\nβα¦ *PARA | FOR:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *SE LE AΓADIΓ | NOW YOU HAVE*\nβα¦ *${tok} π»ππππͺππππ* πͺ\nβ\nβ°βββββββββββββββ¬£`, wm, null, md, 'β π£oxi-πot β', null, null, [
['πͺππππππ', '.cartera'],
['β’οΈ π΄πππ ππ ππππππππ β’οΈ', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['aΓ±adirtokens', 'dartokens', 'dartoken'] 
handler.group = true
handler.owner = true
export default handler
