import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ๐', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '๐ป ๐ฆ๐๐ฝ๐ฒ๐ฟ ๐๐ฎ๐๐ฎ๐๐ผ๐-๐ ๐ - ๐ช๐ต๐ฎ๐๐๐๐ฝ๐ฝ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()}๐ฌ๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐\n๐ฌ๐๐๐๐๐๐\n*${usedPrefix + command} System of a down - Toxicity*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}๐ต๐ ๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐จ๐๐๐๐/๐๐๐๐๐, ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐`
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `เฆ ${title}
0:35 โโโโโโโโโโ -${durationH}
โป     โฒ  โก  โณ     โบ
VOLUME: โโโโโโโ 100%
โโโโโโ โขโงโงโข โโโโโโ
๐ *Publicado:* ${publishedTime}
โโโโโโ โขโงโงโข โโโโโโ
โโโโโโ โขโงโงโข โโโโโโ
๐ *Vistas:* ${viewH}
โโโโโโ โขโงโงโข โโโโโโ
โโโโโโ โขโงโงโข โโโโโโ
๐ *URL:* 
 ${url}
โโโโโโ โขโงโงโข โโโโโโ
${vs}`, thumbnail, [['โข๏ธ ๐ด๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐ โข๏ธ', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' ๐ก ๐ง๐๐ฃ๐ข๐ฆ ๐๐ ๐๐๐ฆ๐๐๐ฅ๐๐๐ฆ ' + fin,
rows: [
{title: "๐ ๐จ๐๐๐๐ (1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "๐ ๐จ๐๐๐๐ (2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "๐ ๐จ๐๐๐๐ ๐๐ข๐", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "๐ฅ ๐ฝ๐๐๐๐ (1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "๐ฅ ๐ฝ๐๐๐๐ (2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "๐ฅ ๐ฝ๐๐๐๐ ๐๐ข๐", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' ๐ ๐๐จ๐ฆ๐ค๐จ๐๐๐ ๐๐ฉ๐๐ก๐ญ๐๐๐ ' + fin,
rows: [
{title: "โข๏ธ ๐ด๐๐ ๐น๐๐๐๐๐๐๐๐๐ โข๏ธ", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*๐๐๐๐๐ผ ๐๐๐ ๐๐ผ ๐๐ผ๐พ๐๐ ๐พ๐๐  ${text}*`,
  footer: global.wm,
  title: `${htki} *โป๏ธ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐* ${htka}`,
  buttonText: `๐ ๐๐๐๐๐๐๐ ๐`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${lenguajeGB['smsAvisoFG']()}๐๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐\n๐๐๐ ๐ผ๐๐ผ๐๐`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 1
export default handler
