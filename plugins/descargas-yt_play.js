import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒐 𝒕𝒊𝒕𝒖𝒍𝒐\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*${usedPrefix + command} System of a down - Toxicity*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}𝑵𝒐 𝒔𝒆 𝒑𝒖𝒅𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓 𝒆𝒍 𝑨𝒖𝒅𝒊𝒐/𝒗𝒊𝒅𝒆𝒐, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒕𝒆𝒏𝒕𝒂 𝒄𝒐𝒏 𝒐𝒕𝒓𝒐 𝒏𝒐𝒎𝒃𝒓𝒆`
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `ও ${title}
0:35 ━❍──────── -${durationH}
↻     ⊲  Ⅱ  ⊳     ↺
VOLUME: ▁▂▃▄▅▆▇ 100%
┌───── •✧✧• ─────┐
📆 *Publicado:* ${publishedTime}
└───── •✧✧• ─────┘
┌───── •✧✧• ─────┐
👀 *Vistas:* ${viewH}
└───── •✧✧• ─────┘
┌───── •✧✧• ─────┐
📎 *URL:* 
 ${url}
└───── •✧✧• ─────┘
${vs}`, thumbnail, [['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' 📡 𝗧𝗜𝗣𝗢𝗦 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ' + fin,
rows: [
{title: "🔊 𝑨𝒖𝒅𝒊𝒐 (1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "🔊 𝑨𝒖𝒅𝒊𝒐 (2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "🔊 𝑨𝒖𝒅𝒊𝒐 𝗗𝗢𝗖", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "🎥 𝑽𝒊𝒅𝒆𝒐 (1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "🎥 𝑽𝒊𝒅𝒆𝒐 (2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "🎥 𝑽𝒊𝒅𝒆𝒐 𝗗𝗢𝗖", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' 🔎 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔 ' + fin,
rows: [
{title: "☢️ 𝑴𝒂𝒔 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔 ☢️", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${lenguajeGB['smsAvisoFG']()}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 1
export default handler
