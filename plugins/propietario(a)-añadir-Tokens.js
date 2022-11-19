import MessageType from '@adiwajshing/baileys' 
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝑫𝒆𝒃𝒆 𝒆𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒍𝒂 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅 𝒅𝒆 𝑻𝒐𝒙𝒊𝑪𝒐𝒊𝒏𝒔`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let tok = parseInt(txt)
let joincount = tok
let pjk = Math.ceil(tok * pajak)
joincount += pjk
if (joincount < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 𝙏𝙊𝙆𝙀𝙉(𝙎) 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙊𝙍 𝙏𝙊𝙆𝙀𝙉(𝙎) 𝙄𝙎 *1*`
let users = global.db.data.users
users[who].joincount += tok

conn.sendHydrated(m.chat, `╭[𝑻𝒐𝒙𝒊𝑪𝒐𝒊𝒏𝒔 🪙 ]⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${tok} 𝑻𝒐𝒙𝒊𝑪𝒐𝒊𝒏𝒔* 🪙\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '♛ 𝓣oxi-𝓑ot ♛', null, null, [
['𝑪𝒂𝒓𝒕𝒆𝒓𝒂', '.cartera'],
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirtokens', 'dartokens', 'dartoken'] 
handler.group = true
handler.owner = true
export default handler
