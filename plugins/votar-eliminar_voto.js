let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
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

if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
  
let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg}𝑵𝒐 𝒔𝒆 𝒉𝒂 𝒄𝒓𝒆𝒂𝒅𝒐 𝒏𝒊𝒏𝒈𝒖𝒏𝒂 𝒗𝒐𝒕𝒂𝒄𝒊ó𝒏 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐`, `𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒊𝒏𝒊𝒄𝒊𝒂𝒓 𝒖𝒏𝒂 𝒏𝒖𝒆𝒗𝒂 𝒗𝒐𝒕𝒂𝒄𝒊ó𝒏 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}crearvoto*`, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m)}
  
delete conn.vote[id]
await conn.sendButton(m.chat, `${eg}𝑳𝒂 𝒗𝒐𝒕𝒂𝒄𝒊ó𝒏 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒂`, `𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒊𝒏𝒊𝒄𝒊𝒂𝒓 𝒖𝒏𝒂 𝒏𝒖𝒆𝒗𝒂 𝒗𝒐𝒕𝒂𝒄𝒊ó𝒏 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *${usedPrefix}crearvoto*`, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m)}

handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(del|delete|hapus|-)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler
