let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.sendButton(m.chat, `*${usuario}* ππ ππππππ ππΌππππΌ\n\nπππ πΌππ πππ ππ πΌ ππππΌππππππππ`, `*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a alguien._*\n\n` + wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.sendButton(m.chat, `*${usuario}* π ππππΌπ ππ πππΌ ππππΌπΎπππ πΎππ *${await conn.getName(persona)}* π`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

conn.sendButton(m.chat, `π€¨ ππΌπππΎπ πππ *${await conn.getName(persona)}* ππ ππΌ πΌπΎππππΌπΏπ ππ πππΎππΌππΌπΏπ ππ πππππππππΌ πΏπ ππππΌπ πΌππ½ππ ππ πππΌ ππππΌπΎπππ`, `*_Vista la situaciΓ³n se anularΓ‘ este pendiente_*\n\n` + wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})
global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler
