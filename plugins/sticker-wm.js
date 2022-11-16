import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!m.quoted) throw `${mg}𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒄𝒐𝒏 𝒖𝒏𝒂 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐𝒏 𝒚 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\n*${usedPrefix + command} Texto1|Texto2*`
let stiker = false 
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `${mg}𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒄𝒐𝒏 𝒖𝒏𝒂 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐𝒏 𝒚 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\n*${usedPrefix + command} Texto1|Texto2*`
let img = await m.quoted.download()
if (!img) throw `${mg}𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒄𝒐𝒏 𝒖𝒏𝒂 𝒅𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐𝒏\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\n*${usedPrefix + command} Texto1|Texto2*`
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw `${fg}𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙉 𝙐𝙉𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝙔 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Texto1|Texto2*\n\n𝙍𝙀𝙈𝙀𝙈𝘽𝙀𝙍 𝙏𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙒𝙄𝙏𝙃 𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉 𝘼𝙉𝘿 𝙉𝘼𝙈𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Text1|Text2*`
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^sname|wm|rename$/i
handler.level = 4
export default handler
