import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}π¬ππππππ ππ ππππππ πππ πππππ π πππππ ππ πππππππ`, fkontak,  m)
try {
let search = await yts(args.join(" "))
let listAudio = []
let listVideo = []
let listAudioDoc = []
let listVideoDoc = []
let teskd = `π½πͺπ¨π¦πͺπππ ππ *${args.join(" ")}*`

const sections = [{ title: comienzo + ' π¨ππππ ' + fin, rows: listAudio },
{ title: comienzo + ' π½ππππ ' + fin, rows: listVideo },
{ title: comienzo + ' π¨ππππ π π’ π ' + fin, rows: listAudioDoc },
{ title: comienzo + ' π½ππππ π π’ π ' + fin, rows: listVideoDoc }]

const listMessage = {
text: teskd,
footer: 'ππ‘πππ π¨πͺ π½πͺπ¨π¦πͺπππ π₯ππ§π π₯π€πππ§ πΏππ¨πππ§πππ§\n' + wm,
title: `${htki} *πππππππΌπΏππ* ${htka}`,
buttonText: "π π©πππππ",
sections}

for (let i of search.all) {
listAudio.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listAudioDoc.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listVideo.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listVideoDoc.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}Β‘π°ππππππ ππ πππππ!`)
}}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 4
export default handler
