let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `๐ ๐ณ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐
*โญโขยทโโโโโโโโโโโโโโโโโโโยทโข*
โ *Total : ${relacion.length} Usuarios* ${relacion ? '\nโ\n' + relacion.map(([jid], i) => `
โ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Pareja' : conn.getName(jid)}
โ ${isOwner ? '@' + jid.split`@`[0] : jid}\nโ - - - - - - - - -`.trim()).join('\n') : ''}
*โฐโขยทโโโโโโโโโโโโโโโโโโโยทโข*`
await conn.sendButton(m.chat, caption, `๐ ๐ด๐ ๐ท๐๐๐๐๐ โข ${pareja ? `*${user} ๐ ${conn.getName(pareja)}*` : `โ *No tiene Pareja*`}\n${wm}`, null, [ 
['โข๏ธ ๐ด๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐ โข๏ธ', '/menu']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|listarelacion|listship|listpareja)$/i

export default handler
