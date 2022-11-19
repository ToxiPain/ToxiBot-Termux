import fetch from 'node-fetch' 
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒆𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆 𝒒𝒖𝒊𝒆𝒏 𝒒𝒖𝒊𝒆𝒓𝒂 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒔𝒖 𝒑𝒂𝒓𝒆𝒋𝒂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `${fg}𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒆𝒏 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐`, wm, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}𝑫𝒆𝒋𝒂 𝒆𝒍 𝒏𝒂𝒓𝒄𝒊𝒄𝒊𝒔𝒎𝒐, 𝒕𝒖 𝒎𝒊𝒔𝒎𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆𝒔 𝒔𝒆𝒓 𝒕𝒖 𝒑𝒂𝒓𝒆𝒋𝒂`, wm, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}𝒀𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒐 𝒔𝒆𝒓 𝒔𝒖 𝒑𝒂𝒓𝒆𝒋𝒂 :c`, wm, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `𝑵𝒐 𝒑𝒖𝒆𝒅𝒆𝒔 𝒂𝒄𝒆𝒑𝒕𝒂𝒓 𝒔𝒊 𝒏𝒂𝒅𝒊𝒆 𝒔𝒆 𝒉𝒂 𝒅𝒆𝒄𝒍𝒂𝒓𝒂𝒅𝒐, 𝒅𝒆𝒄𝒍𝒂𝒓𝒂𝒕𝒆 𝒄𝒐𝒏 *${tu}* 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒅𝒊𝒈𝒂 𝒔𝒊 𝒕𝒆 𝒂𝒄𝒆𝒑𝒕𝒂 𝒐 𝒓𝒆𝒄𝒉𝒂𝒛𝒂`, wm, null, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.sendButton(m.chat, `🥳💖 𝙁𝙀𝙇𝙄𝘾𝙄𝙏𝘼𝘾𝙄𝙊𝙉𝙀𝙎!!! *${tu}*\n✅ 𝑫𝒆 𝒎𝒂𝒏𝒆𝒓𝒂 𝒐𝒇𝒊𝒄𝒊𝒄𝒂𝒍 𝒆𝒔𝒕𝒂𝒏 𝒆𝒏 𝒖𝒏𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏\n\n𝑯𝒂𝒄𝒆𝒏 𝒃𝒐𝒏𝒊𝒕𝒂 𝒑𝒂𝒓𝒆𝒋𝒂 😁` + wm, img5, [
['☢️ 𝑴𝒆𝒏𝒖 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 ☢️', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(aceptar|acepto|accept)$/i
handler.group = true
export default handler
