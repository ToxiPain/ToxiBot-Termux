let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
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

let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
        
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg} π΅π ππ ππ ππππππ πππππππ ππππππΓ³π ππ ππππ πππππ`, `\n\nπΊπ πππππππ πππππππ πππ ππππππππ πππ ππ πππππππ: \n*${usedPrefix}crearvoto*`, null, [
['β’οΈ π΄πππ ππ ππππππππ β’οΈ', '/menu']], fkontak, m)}

let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} π³ππππ ππ πππππ β’οΈ*

*USUARIO(A)*
ββ³β’οΈβ @${conn.getName(m.sender)}

*π΄πππππ:β«* ${reason}

*${htjava} π½ππππ π πππππ*
*Total: ${upvote.length}*

${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} π½ππππ ππ ππππππ:*
*Total: ${devote.length}*

${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['β π½ππππ π πππππ', `${usedPrefix}upvote`],
['β π½ππππ ππ ππππππ', `${usedPrefix}devote`],
['π§Ύ π­ππππππππ π½πππππππ', `${usedPrefix}delvoto`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote|vervotos|vervoto|vervotaciones|votaciones|votacion|vervotacion$/i
handler.group = true
handler.botAdmin = true

export default handler
