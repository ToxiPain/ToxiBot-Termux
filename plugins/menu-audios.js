const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*γπ π·πΎπ»π° _${name}_ πε½‘*
${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}
*<ππππ ππππππ/>*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*
β _Noche de paz_
β _Buenos dias_
β _Audio hentai_
β _Fiesta del admin_
β _Fiesta del admin 2_
β _Fiesta del administrador_ 
β _Viernes_
β _Mierda de Bot_
β _Me olvidΓ©_
β _Baneado_
β _Feliz navidad_
β _A nadie le importa_
β _Sexo_
β _Vete a la vrg_
β _Ara ara_
β _Hola_
β _Un pato_
β _Nyanpasu_
β _Te amo_
β _Yamete_
β _Te diagnostico con gay_
β _Quien es tu sempai botsito 7w7_
β _BaΓ±ate_
β _Vivan los novios_
β _Marica quien_
β _Es puto_
β _La biblia_
β _Onichan_
β _Bot puto_
β _Feliz cumpleaΓ±os_
β _Pasa pack Bot_
β _Atencion grupo_
β _Homero chino_
β _Oh me vengo_
β _Murio el grupo_
β _Siuuu_
β _Rawr_
β _UwU_
β _:c_
β _a_
β _Hey_
β _Enojado_
β _Enojada_
β _Chao_
β _Hentai_
β _Triste_
β _Estoy triste_
β _Me pican los cocos_
β _Contexto_
β _Me voy_
β _Tengo los calzones del admin_
β _Entrada Γ©pica_ 
β _Esto va ser Γ©pico papus_
β _Ingresa Γ©picamente_
β _Bv_
β _Yoshi_
β _No digas eso papu_
β _Ma ma masivo_
β _Masivo_
β _Basado_
β _Basada_
β _Fino seΓ±ores_
β _Verdad que te engaΓ±e_
β _Sus_
β _Ohayo_
β _La voz de hombre_
β _Pero esto_
β _Bien pensado Woody_
β _Jesucristo_
β _Wtf_
β _Una pregunta_
β _Que sucede_
β _Hablame_
β _Pikachu_
β _Niconico_
β _Yokese_
β _Omaiga_
β _Nadie te preguntΓ³_
β _Bueno si_
β _Usted estΓ‘ detenido_
β _No me hables_
β _No chu_
β _El pepe_
β _PokΓ©mon_
β _No me hagas usar esto_
β _Esto va para ti_
β _Abduzcan_
β _Joder_
β _Hablar primos_
β _Mmm_
β _Orale_
β _Me anda buscando anonymous_
β _Blackpink in your area_
β _Cambiate a Movistar_
β _Momento equisde | Momento XD_
β _Todo bien | π_
β _Te gusta el Pepino | π₯_
β _El tΓ³xico_
β _Moshi moshi_
β _Calla Fan de BTS_
β _Que tal grupo_
β _Muchachos_
β _EstΓ‘ Zzzz | π΄_
β _Goku Pervertido_
β _Potaxio | π₯_
β _Nico nico_
β _El rap de Fernanfloo_
β _Tal vez_
β _Corte corte_
β _Buenas noches_
β _Porque ta tite_
β _Eres Fuerte_
β _Bueno Master | π«_
β _No Rompas mΓ‘s_
β _Traiganle una falda_
β _Se estΓ‘n riendo de mΓ­_
β _Su nivel de pendejo_
β _Bienvenido/a π€ | π_
β _Elmo sabe donde vives_
β _tunometecabrasaramambiche_
β _Y este quien es_
β _MotivaciΓ³n_
β _En caso de una investigaciΓ³n_
β _Buen dΓ­a grupo | π_
β _Las reglas del grupo_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', 'πΆπΈππ·ππ±', null, null, [
['β’οΈ π΄πππ ππ ππππππππ β’οΈ', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler
