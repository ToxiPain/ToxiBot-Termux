let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
*╭•·–| 👥 𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒃𝒂𝒏𝒆𝒂𝒅𝒐𝒔 |–·•*
│ *Total : ${users.length} Usuarios* ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios Baneados' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`.trim()

await conn.sendButton(m.chat, caption, `*Estos usuarios no puedes Usar a GataBot*\n\n` + wm, null, [ 
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^listabanuser|listausuarios|listbanuser|listabaneados|listban$/i

export default handler
