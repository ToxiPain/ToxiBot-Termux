import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒄𝒂𝒏𝒂𝒍 𝒅𝒆 𝒚𝒐𝒖𝒕𝒖𝒃𝒆`, fkontak,  m)
try {
let search = await yts(args.join(" "))
let listAudio = []
let listVideo = []
let listAudioDoc = []
let listVideoDoc = []
let teskd = `𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙙𝙚 *${args.join(" ")}*`

const sections = [{ title: comienzo + ' 𝑨𝒖𝒅𝒊𝒐 ' + fin, rows: listAudio },
{ title: comienzo + ' 𝑽𝒊𝒅𝒆𝒐 ' + fin, rows: listVideo },
{ title: comienzo + ' 𝑨𝒖𝒅𝒊𝒐 𝗗 𝗢 𝗖 ' + fin, rows: listAudioDoc },
{ title: comienzo + ' 𝑽𝒊𝒅𝒆𝒐 𝗗 𝗢 𝗖 ' + fin, rows: listVideoDoc }]

const listMessage = {
text: teskd,
footer: '𝙀𝙡𝙞𝙟𝙖 𝙨𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙥𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧\n' + wm,
title: `${htki} *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎* ${htka}`,
buttonText: "🔎 𝑩𝒖𝒔𝒄𝒂𝒓",
sections}

for (let i of search.all) {
listAudio.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listAudioDoc.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listVideo.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listVideoDoc.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}¡𝑰𝒏𝒕𝒆𝒏𝒕𝒆 𝒅𝒆 𝒏𝒖𝒆𝒗𝒐!`)
}}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 4
export default handler
