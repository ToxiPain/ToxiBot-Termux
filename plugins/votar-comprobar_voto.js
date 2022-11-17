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
return await conn.sendButton(m.chat, `${fg} 𝑵𝒐 𝒔𝒆 𝒉𝒂 𝒄𝒓𝒆𝒂𝒅𝒐 𝒏𝒊𝒏𝒈𝒖𝒏𝒂 𝒗𝒐𝒕𝒂𝒄𝒊ó𝒏 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐`, `\n\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒊𝒏𝒊𝒄𝒊𝒂𝒓 𝒖𝒏𝒂 𝒗𝒐𝒕𝒂𝒄𝒊𝒐𝒏 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: \n*${usedPrefix}crearvoto*`, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m)}

let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} 𝑳𝒊𝒔𝒕𝒂 𝒅𝒆 𝒗𝒐𝒕𝒐𝒔 ☢️*

*USUARIO(A)*
┊↳☢️┊ @${conn.getName(m.sender)}

*𝑴𝒐𝒕𝒊𝒗𝒐:➫* ${reason}

*${htjava} 𝑽𝒐𝒕𝒐𝒔 𝒂 𝒇𝒂𝒗𝒐𝒓*
*Total: ${upvote.length}*

${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} 𝑽𝒐𝒕𝒐𝒔 𝒆𝒏 𝒄𝒐𝒏𝒕𝒓𝒂:*
*Total: ${devote.length}*

${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['✅ 𝑽𝒐𝒕𝒂𝒓 𝒂 𝒇𝒂𝒗𝒐𝒓', `${usedPrefix}upvote`],
['❌ 𝑽𝒐𝒕𝒂𝒓 𝒆𝒏 𝒄𝒐𝒏𝒕𝒓𝒂', `${usedPrefix}devote`],
['🧾 𝑭𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝑽𝒐𝒕𝒂𝒄𝒊𝒐𝒏', `${usedPrefix}delvoto`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote|vervotos|vervoto|vervotaciones|votaciones|votacion|vervotacion$/i
handler.group = true
handler.botAdmin = true

export default handler
