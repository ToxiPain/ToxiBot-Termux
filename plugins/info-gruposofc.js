let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*HOLA TE INVITO A UNIRTE AL GRUPO SUPORT DE TOXI-BOT Y FORMAR PARTE DE LA COMUNIDAD*
*β€ πΆππππ πππππππ πππ π±ππ:*
*1.-https://chat.whatsapp.com/L2PCWj8QQQ6HPZvmR7izIT* 

β π£oxi-πot β
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
