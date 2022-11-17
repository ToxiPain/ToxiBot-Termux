let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
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
//if (!text) throw await conn.reply(m.chat, `${mg}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙇𝘼 𝙍𝘼𝙕𝙊𝙉 𝘿𝙀 𝙇𝘼 𝙑𝙊𝙏𝘼𝘾𝙄𝙊𝙉\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙍𝙀𝘼𝙎𝙊𝙉 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙑𝙊𝙏𝙀`, fkontak,  m)	
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
conn.vote = conn.vote ? conn.vote : {}
let id = m.chat

if (id in conn.vote) { 
return await conn.sendButton(m.chat, `🗃️ 𝑻𝒐𝒅𝒂𝒗𝒊𝒂 𝒉𝒂𝒚 𝒖𝒏𝒂 𝒗𝒐𝒕𝒂𝒄𝒊𝒐𝒏 𝒑𝒆𝒏𝒅𝒊𝒆𝒏𝒕𝒆 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐!!`, wm, null, [
['🧾 𝑭𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝑽𝒐𝒕𝒂𝒄𝒊𝒐𝒏', `${usedPrefix}-vote`]], fkontak, m)}
  
await conn.sendButton(m.chat, `☢️ 𝑵𝒖𝒆𝒗𝒂 𝑽𝒐𝒕𝒂𝒄𝒊𝒐𝒏 ☢️\n\n*CREADOR(A) DE LA VOTACIÓN:*\n🛃 @${conn.getName(m.sender)}\n\n*𝑴𝒐𝒕𝒊𝒗𝒐 ➫* ${text}`, `
*Puede usar los comandos de abajo o los botones para hacer una acción en la votación!!*

${htjava} 𝑫𝒖𝒓𝒂𝒏𝒕𝒆 𝒍𝒂 𝒗𝒐𝒕𝒂𝒄𝒊𝒐𝒏 ☢️
${dmenub} *${usedPrefix}sivotar | upvote* 
${dmenub} _Estar a favor_
${dmenub2} *┈┈┈┈┈┈┈┈┈┈┈┈*
${dmenub} *${usedPrefix}novotar*
${dmenub} _Estar en desacuerdo_
${dmenub2} *┈┈┈┈┈┈┈┈┈┈┈┈*
${dmenub} *${usedPrefix}vervotos*
${dmenub} _Comprobar el voto_
${dmenub2} *┈┈┈┈┈┈┈┈┈┈┈┈*
${dmenub} *${usedPrefix}delvoto*
${dmenub} _Borrar votos_
${dmenuf}`, null, [
['✅ 𝑽𝒐𝒕𝒂𝒓 𝒂 𝒇𝒂𝒗𝒐𝒓', `${usedPrefix}upvote`],
['❌ 𝑽𝒐𝒕𝒂𝒓 𝒆𝒏 𝒄𝒐𝒏𝒕𝒓𝒂', `${usedPrefix}devote`],
['📢 𝑰𝒏𝒗𝒊𝒕𝒂𝒓 𝒂 𝒗𝒐𝒕𝒂𝒓', `${usedPrefix}pedirayuda ✴️ @${conn.getName(m.sender)} *ESTA INVITANDO A QUE SE UNAN A LA VOTACIÓN!!*\n*USEN EL COMANDO ${usedPrefix}vervotos PARA VOTAR!!*`]
], fkontak, m) 
conn.vote[id] = [
text,
[],
[]
]
}

handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|crear|iniciar|empezar|\+)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.level = 4
handler.limit = 1

export default handler 
