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
return await conn.sendButton(m.chat, `${fg}π΅π ππ ππ ππππππ πππππππ ππππππΓ³π ππ ππππ πππππ`, `πΊπ πππππππ πππππππ πππ πππππ ππππππΓ³π πππ ππ πππππππ *${usedPrefix}crearvoto*`, null, [
['β’οΈ π΄πππ ππ ππππππππ β’οΈ', '/menu']], fkontak, m)}
  
delete conn.vote[id]
await conn.sendButton(m.chat, `${eg}π³π ππππππΓ³π ππ ππππ πππππππππ`, `πΊπ πππππππ πππππππ πππ πππππ ππππππΓ³π πππ ππ πππππππ *${usedPrefix}crearvoto*`, null, [
['β’οΈ π΄πππ ππ ππππππππ β’οΈ', '/menu']], fkontak, m)}

handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(del|delete|hapus|-)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler
