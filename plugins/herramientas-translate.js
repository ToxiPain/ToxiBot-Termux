import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let user = global.db.data.users[m.sender]
let msg = `${mg}ππ πΎπππΌππΏπ ππ πππΌ πΏπ ππππΌ ππΌππππΌ\nπππππππ\n*${usedPrefix + command} (idioma) (texto)*\n*${usedPrefix + command} es Hola Bot*\n\nπππ πΎππππΌππΏ ππ ππππΏ ππππ ππΌπ\nπππΌππππ\n*${usedPrefix + command} (language) (text)*\n*${usedPrefix + command} en Hello Bot*\n\nππΏππππΌπ πΌπΏπππππΏππ | πππππππππΏ ππΌππππΌπππ\n*https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text

const idiomas = [['AfrikΓ‘ans',	'af'], ['AlbanΓ©s', 'sq'], ['AmΓ‘rico',	'am'], ['Γrabe',	'ar'], ['Armenio',	'hy'], ['AsamΓ©s',	'as'], ['Aimara',	'ay'], ['Azerbaiyano',	'az'], ['Bambara',	'bm'], ['Vasco',	'eu'], ['Bielorruso',	'be'], ['BengalΓ­',	'bn'], ['Bhospuri',	'bho'], ['Bosnio',	'bs'], ['BΓΊlgaro',	'bg'], ['CatalΓ‘n',	'ca'], ['Cebuano',	'ceb'], ['Chino (simplificado)',	'zh-CN'], ['Chino (tradicional)',	'ny'], ['Corso',	'co'], ['Croata',	'hr'], ['Checo',	'cs'], ['DanΓ©s',	'da'], ['Dhivehi',	'dv'], ['Dogri',	'doi'], ['NeerlandΓ©s',	'nl'], ['InglΓ©s',	'en'], ['Esperanto',	'eo'], ['Estonio',	'et'], ['Ewe',	'ee'], ['Filipino (tagalo)',	'fil'], ['FinΓ©s',	'fi'], ['FrancΓ©s',	'fr'], ['FrisΓ³n',	'fy'], ['Gallego',	'gl'], ['Georgiano',	'ka'], ['AlemΓ‘n',	'de'], ['Grieg',	'el'], ['GuaranΓ­',	'gn'], ['GuyaratΓ­',	'gu'], ['Criollo haitiano',	'ht'], ['Hausa',	'ha'], ['Hawaiano',	'haw'], ['Hebreo',	'he'], ['Hindi',	'hi'], ['Hmong',	'hmn'], ['HΓΊngaro',	'hu'], ['IslandΓ©s',	'is'], ['Igbo',	'ig'], ['Ilocano',	'ilo'], ['Indonesio',	'id'], ['IrlandΓ©s',	'ga'], ['Italiano',	'it'], ['JaponΓ©s',	'ja'], ['JavanΓ©s',	'jv'], ['CanarΓ©s',	'kn'], ['Kazajo',	'kk'], ['Jemer',	'km'], ['KiΓ±aruanda',	'rw'], ['Konkani',	'gom'], ['Corean',	'ko'], ['Krio',	'kri'], ['Curdo',	'ku'], ['Kurdo (Sorani)',	'ckb'], ['Kirg',	'ky'], ['Laosiano',	'lo'], ['LatΓ­n',	'la'], ['LetΓ³n',	'lv'], ['Lingala',	'ln'], ['Lituano',	'lt'], ['Luganda',	'lg'], ['LuxemburguΓ©s',	'lb'], ['Macedonio',	'mk'], ['Maithili',	'mai'], ['Malgache',	'mg'], ['Malayo',	'ms'], ['Malabar',	'ml'], ['MaltΓ©s',	'mt'], ['MaorΓ­',	'mi'], ['Marathi',	'mr'], ['Meiteilon (manipuri)',	'mni-Mtei'], ['Mizo',	'lus'], ['Mongol',	'mn'], ['Birmano',	'my'], ['NepalΓ­',	'ne'], ['Noruego',	'no'], ['Nyanja (chichewa)',	'ny'], ['Odia (oriya)',	'or'], ['Oromo',	'om'], ['Pashto',	'ps'], ['Persa',	'fa'], ['Polaco',	'pl'], ['PortuguΓ©s (Portugal y Brasil)',	'pt'], ['Punjabi',	'pa'], ['Quechua',	'qu'], ['Rumano',	'ro'], ['Ruso',	'ru'], ['Samoano',	'sm'], ['',	''], ['SΓ‘nscr',	'sa'], ['GaΓ©lico',	'gd'], ['Sepedi',	'nso'], ['Serbio',	'sr'], ['Sesoto',	'st'], ['Shona',	'sn'], ['Sindhi',	'sd'], ['CingalΓ©s',	'si'], ['Eslovaco',	'sk'], ['Esloveno',	'sl'], ['SomalΓ­',	'so'], ['EspaΓ±ol',	'es'], ['SundanΓ©s',	'su'], ['Suajili',	'sw'], ['Sueco',	'sv'], ['Tagalo (filipino)',	'tl'], ['Tayiko',	'tg'], ['Tamil',	'ta'], ['TΓ‘rtaro',	'tt'], ['TelugΓΊ',	'te'], ['TailandΓ©s',	'th'], ['TigriΓ±a',	'ti'], ['Tsonga',	'ts'], ['Turco',	'tr'], ['Turcom',	'tk'], ['Twi (Akan)',	'ak'], ['Ucraniano',	'uk'], ['Urdu',	'ur'], ['Uigur',	'ug'], ['Uzbeko',	'uz'], ['Vietnamita',	'vi'], ['GalΓ©s',	'cy'], ['Xhosa',	'xh'], ['Yiddish',	'yi'], ['Yoruba',	'yo'], ['ZulΓΊ',	'zu']]	
const sections = [
{
title: htjava + ' π πππππΌ πΏπ ππΏππππΌπ ' + htjava,
rows: [
{title: "πͺ " + idiomas[0][0], rowId: `${usedPrefix + command} ${idiomas[0][1]} ${text}`, description: `π°πππππ: ${idiomas[0][0]} | ${idiomas[0][1]}`},
{title: "πͺ " + idiomas[1][0], rowId: `${usedPrefix + command} ${idiomas[1][1]} ${text}`, description: `π°πππππ: ${idiomas[1][0]} | ${idiomas[1][1]}`},
{title: "πͺ " + idiomas[2][0], rowId: `${usedPrefix + command} ${idiomas[2][1]} ${text}`, description: `π°πππππ: ${idiomas[2][0]} | ${idiomas[2][1]}`},
{title: "πͺ " + idiomas[3][0], rowId: `${usedPrefix + command} ${idiomas[3][1]} ${text}`, description: `π°πππππ: ${idiomas[3][0]} | ${idiomas[3][1]}`},
{title: "πͺ " + idiomas[4][0], rowId: `${usedPrefix + command} ${idiomas[4][1]} ${text}`, description: `π°πππππ: ${idiomas[4][0]} | ${idiomas[4][1]}`},
{title: "πͺ " + idiomas[5][0], rowId: `${usedPrefix + command} ${idiomas[5][1]} ${text}`, description: `π°πππππ: ${idiomas[5][0]} | ${idiomas[5][1]}`},
{title: "πͺ " + idiomas[6][0], rowId: `${usedPrefix + command} ${idiomas[6][1]} ${text}`, description: `π°πππππ: ${idiomas[6][0]} | ${idiomas[6][1]}`},
{title: "πͺ " + idiomas[7][0], rowId: `${usedPrefix + command} ${idiomas[7][1]} ${text}`, description: `π°πππππ: ${idiomas[7][0]} | ${idiomas[7][1]}`},
{title: "πͺ " + idiomas[8][0], rowId: `${usedPrefix + command} ${idiomas[8][1]} ${text}`, description: `π°πππππ: ${idiomas[8][0]} | ${idiomas[8][1]}`},
{title: "πͺ " + idiomas[9][0], rowId: `${usedPrefix + command} ${idiomas[9][1]} ${text}`, description: `π°πππππ: ${idiomas[9][0]} | ${idiomas[9][1]}`},
{title: "πͺ " + idiomas[10][0], rowId: `${usedPrefix + command} ${idiomas[10][1]} ${text}`, description: `π°πππππ: ${idiomas[10][0]} | ${idiomas[10][1]}`},
{title: "πͺ " + idiomas[11][0], rowId: `${usedPrefix + command} ${idiomas[11][1]} ${text}`, description: `π°πππππ: ${idiomas[11][0]} | ${idiomas[11][1]}`},
{title: "πͺ " + idiomas[12][0], rowId: `${usedPrefix + command} ${idiomas[12][1]} ${text}`, description: `π°πππππ: ${idiomas[12][0]} | ${idiomas[12][1]}`},
{title: "πͺ " + idiomas[13][0], rowId: `${usedPrefix + command} ${idiomas[13][1]} ${text}`, description: `π°πππππ: ${idiomas[13][0]} | ${idiomas[13][1]}`},
{title: "πͺ " + idiomas[14][0], rowId: `${usedPrefix + command} ${idiomas[14][1]} ${text}`, description: `π°πππππ: ${idiomas[14][0]} | ${idiomas[14][1]}`},
{title: "πͺ " + idiomas[15][0], rowId: `${usedPrefix + command} ${idiomas[15][1]} ${text}`, description: `π°πππππ: ${idiomas[15][0]} | ${idiomas[15][1]}`},
{title: "πͺ " + idiomas[16][0], rowId: `${usedPrefix + command} ${idiomas[16][1]} ${text}`, description: `π°πππππ: ${idiomas[16][0]} | ${idiomas[16][1]}`},
{title: "πͺ " + idiomas[17][0], rowId: `${usedPrefix + command} ${idiomas[17][1]} ${text}`, description: `π°πππππ: ${idiomas[17][0]} | ${idiomas[17][1]}`},
{title: "πͺ " + idiomas[18][0], rowId: `${usedPrefix + command} ${idiomas[18][1]} ${text}`, description: `π°πππππ: ${idiomas[18][0]} | ${idiomas[18][1]}`},
{title: "πͺ " + idiomas[19][0], rowId: `${usedPrefix + command} ${idiomas[19][1]} ${text}`, description: `π°πππππ: ${idiomas[19][0]} | ${idiomas[19][1]}`},
{title: "πͺ " + idiomas[20][0], rowId: `${usedPrefix + command} ${idiomas[20][1]} ${text}`, description: `π°πππππ: ${idiomas[20][0]} | ${idiomas[20][1]}`},
{title: "πͺ " + idiomas[21][0], rowId: `${usedPrefix + command} ${idiomas[21][1]} ${text}`, description: `π°πππππ: ${idiomas[21][0]} | ${idiomas[21][1]}`},
{title: "πͺ " + idiomas[22][0], rowId: `${usedPrefix + command} ${idiomas[22][1]} ${text}`, description: `π°πππππ: ${idiomas[22][0]} | ${idiomas[22][1]}`},
{title: "πͺ " + idiomas[23][0], rowId: `${usedPrefix + command} ${idiomas[23][1]} ${text}`, description: `π°πππππ: ${idiomas[23][0]} | ${idiomas[23][1]}`},
{title: "πͺ " + idiomas[24][0], rowId: `${usedPrefix + command} ${idiomas[24][1]} ${text}`, description: `π°πππππ: ${idiomas[24][0]} | ${idiomas[24][1]}`},
{title: "πͺ " + idiomas[25][0], rowId: `${usedPrefix + command} ${idiomas[25][1]} ${text}`, description: `π°πππππ: ${idiomas[25][0]} | ${idiomas[25][1]}`},
{title: "πͺ " + idiomas[26][0], rowId: `${usedPrefix + command} ${idiomas[26][1]} ${text}`, description: `π°πππππ: ${idiomas[26][0]} | ${idiomas[26][1]}`},
{title: "πͺ " + idiomas[27][0], rowId: `${usedPrefix + command} ${idiomas[27][1]} ${text}`, description: `π°πππππ: ${idiomas[27][0]} | ${idiomas[27][1]}`},
{title: "πͺ " + idiomas[28][0], rowId: `${usedPrefix + command} ${idiomas[28][1]} ${text}`, description: `π°πππππ: ${idiomas[28][0]} | ${idiomas[28][1]}`},
{title: "πͺ " + idiomas[29][0], rowId: `${usedPrefix + command} ${idiomas[29][1]} ${text}`, description: `π°πππππ: ${idiomas[29][0]} | ${idiomas[29][1]}`},
{title: "πͺ " + idiomas[30][0], rowId: `${usedPrefix + command} ${idiomas[30][1]} ${text}`, description: `π°πππππ: ${idiomas[30][0]} | ${idiomas[30][1]}`},
{title: "πͺ " + idiomas[31][0], rowId: `${usedPrefix + command} ${idiomas[31][1]} ${text}`, description: `π°πππππ: ${idiomas[31][0]} | ${idiomas[31][1]}`},
{title: "πͺ " + idiomas[32][0], rowId: `${usedPrefix + command} ${idiomas[32][1]} ${text}`, description: `π°πππππ: ${idiomas[32][0]} | ${idiomas[32][1]}`},
{title: "πͺ " + idiomas[33][0], rowId: `${usedPrefix + command} ${idiomas[33][1]} ${text}`, description: `π°πππππ: ${idiomas[33][0]} | ${idiomas[33][1]}`},
{title: "πͺ " + idiomas[34][0], rowId: `${usedPrefix + command} ${idiomas[34][1]} ${text}`, description: `π°πππππ: ${idiomas[34][0]} | ${idiomas[34][1]}`},
{title: "πͺ " + idiomas[35][0], rowId: `${usedPrefix + command} ${idiomas[35][1]} ${text}`, description: `π°πππππ: ${idiomas[35][0]} | ${idiomas[35][1]}`},
{title: "πͺ " + idiomas[36][0], rowId: `${usedPrefix + command} ${idiomas[36][1]} ${text}`, description: `π°πππππ: ${idiomas[36][0]} | ${idiomas[36][1]}`},
{title: "πͺ " + idiomas[37][0], rowId: `${usedPrefix + command} ${idiomas[37][1]} ${text}`, description: `π°πππππ: ${idiomas[37][0]} | ${idiomas[37][1]}`},
{title: "πͺ " + idiomas[38][0], rowId: `${usedPrefix + command} ${idiomas[38][1]} ${text}`, description: `π°πππππ: ${idiomas[38][0]} | ${idiomas[38][1]}`},
{title: "πͺ " + idiomas[39][0], rowId: `${usedPrefix + command} ${idiomas[39][1]} ${text}`, description: `π°πππππ: ${idiomas[39][0]} | ${idiomas[39][1]}`},
{title: "πͺ " + idiomas[40][0], rowId: `${usedPrefix + command} ${idiomas[40][1]} ${text}`, description: `π°πππππ: ${idiomas[40][0]} | ${idiomas[40][1]}`},
{title: "πͺ " + idiomas[41][0], rowId: `${usedPrefix + command} ${idiomas[41][1]} ${text}`, description: `π°πππππ: ${idiomas[41][0]} | ${idiomas[41][1]}`},
{title: "πͺ " + idiomas[42][0], rowId: `${usedPrefix + command} ${idiomas[42][1]} ${text}`, description: `π°πππππ: ${idiomas[42][0]} | ${idiomas[42][1]}`},
{title: "πͺ " + idiomas[43][0], rowId: `${usedPrefix + command} ${idiomas[43][1]} ${text}`, description: `π°πππππ: ${idiomas[43][0]} | ${idiomas[43][1]}`},
{title: "πͺ " + idiomas[44][0], rowId: `${usedPrefix + command} ${idiomas[44][1]} ${text}`, description: `π°πππππ: ${idiomas[44][0]} | ${idiomas[44][1]}`},
{title: "πͺ " + idiomas[45][0], rowId: `${usedPrefix + command} ${idiomas[45][1]} ${text}`, description: `π°πππππ: ${idiomas[45][0]} | ${idiomas[45][1]}`},
{title: "πͺ " + idiomas[46][0], rowId: `${usedPrefix + command} ${idiomas[46][1]} ${text}`, description: `π°πππππ: ${idiomas[46][0]} | ${idiomas[46][1]}`},
{title: "πͺ " + idiomas[47][0], rowId: `${usedPrefix + command} ${idiomas[47][1]} ${text}`, description: `π°πππππ: ${idiomas[47][0]} | ${idiomas[47][1]}`},
{title: "πͺ " + idiomas[48][0], rowId: `${usedPrefix + command} ${idiomas[48][1]} ${text}`, description: `π°πππππ: ${idiomas[48][0]} | ${idiomas[48][1]}`},
{title: "πͺ " + idiomas[49][0], rowId: `${usedPrefix + command} ${idiomas[49][1]} ${text}`, description: `π°πππππ: ${idiomas[49][0]} | ${idiomas[49][1]}`},
{title: "πͺ " + idiomas[50][0], rowId: `${usedPrefix + command} ${idiomas[50][1]} ${text}`, description: `π°πππππ: ${idiomas[50][0]} | ${idiomas[50][1]}`},
{title: "πͺ " + idiomas[51][0], rowId: `${usedPrefix + command} ${idiomas[51][1]} ${text}`, description: `π°πππππ: ${idiomas[51][0]} | ${idiomas[51][1]}`},
{title: "πͺ " + idiomas[52][0], rowId: `${usedPrefix + command} ${idiomas[52][1]} ${text}`, description: `π°πππππ: ${idiomas[52][0]} | ${idiomas[52][1]}`},
{title: "πͺ " + idiomas[53][0], rowId: `${usedPrefix + command} ${idiomas[53][1]} ${text}`, description: `π°πππππ: ${idiomas[53][0]} | ${idiomas[53][1]}`},
{title: "πͺ " + idiomas[54][0], rowId: `${usedPrefix + command} ${idiomas[54][1]} ${text}`, description: `π°πππππ: ${idiomas[54][0]} | ${idiomas[54][1]}`},
{title: "πͺ " + idiomas[55][0], rowId: `${usedPrefix + command} ${idiomas[55][1]} ${text}`, description: `π°πππππ: ${idiomas[55][0]} | ${idiomas[55][1]}`},
{title: "πͺ " + idiomas[56][0], rowId: `${usedPrefix + command} ${idiomas[56][1]} ${text}`, description: `π°πππππ: ${idiomas[56][0]} | ${idiomas[56][1]}`},
{title: "πͺ " + idiomas[57][0], rowId: `${usedPrefix + command} ${idiomas[57][1]} ${text}`, description: `π°πππππ: ${idiomas[57][0]} | ${idiomas[57][1]}`},
{title: "πͺ " + idiomas[58][0], rowId: `${usedPrefix + command} ${idiomas[58][1]} ${text}`, description: `π°πππππ: ${idiomas[58][0]} | ${idiomas[58][1]}`},
{title: "πͺ " + idiomas[59][0], rowId: `${usedPrefix + command} ${idiomas[59][1]} ${text}`, description: `π°πππππ: ${idiomas[59][0]} | ${idiomas[59][1]}`},
{title: "πͺ " + idiomas[60][0], rowId: `${usedPrefix + command} ${idiomas[60][1]} ${text}`, description: `π°πππππ: ${idiomas[60][0]} | ${idiomas[60][1]}`},
{title: "πͺ " + idiomas[61][0], rowId: `${usedPrefix + command} ${idiomas[61][1]} ${text}`, description: `π°πππππ: ${idiomas[61][0]} | ${idiomas[61][1]}`},
{title: "πͺ " + idiomas[62][0], rowId: `${usedPrefix + command} ${idiomas[62][1]} ${text}`, description: `π°πππππ: ${idiomas[62][0]} | ${idiomas[62][1]}`},
{title: "πͺ " + idiomas[63][0], rowId: `${usedPrefix + command} ${idiomas[63][1]} ${text}`, description: `π°πππππ: ${idiomas[63][0]} | ${idiomas[63][1]}`},
{title: "πͺ " + idiomas[64][0], rowId: `${usedPrefix + command} ${idiomas[64][1]} ${text}`, description: `π°πππππ: ${idiomas[64][0]} | ${idiomas[64][1]}`},
{title: "πͺ " + idiomas[65][0], rowId: `${usedPrefix + command} ${idiomas[65][1]} ${text}`, description: `π°πππππ: ${idiomas[65][0]} | ${idiomas[65][1]}`},
{title: "πͺ " + idiomas[66][0], rowId: `${usedPrefix + command} ${idiomas[66][1]} ${text}`, description: `π°πππππ: ${idiomas[66][0]} | ${idiomas[66][1]}`},
{title: "πͺ " + idiomas[67][0], rowId: `${usedPrefix + command} ${idiomas[67][1]} ${text}`, description: `π°πππππ: ${idiomas[67][0]} | ${idiomas[67][1]}`},
{title: "πͺ " + idiomas[68][0], rowId: `${usedPrefix + command} ${idiomas[68][1]} ${text}`, description: `π°πππππ: ${idiomas[68][0]} | ${idiomas[68][1]}`},
{title: "πͺ " + idiomas[69][0], rowId: `${usedPrefix + command} ${idiomas[69][1]} ${text}`, description: `π°πππππ: ${idiomas[69][0]} | ${idiomas[69][1]}`},
{title: "πͺ " + idiomas[70][0], rowId: `${usedPrefix + command} ${idiomas[70][1]} ${text}`, description: `π°πππππ: ${idiomas[70][0]} | ${idiomas[70][1]}`},
{title: "πͺ " + idiomas[71][0], rowId: `${usedPrefix + command} ${idiomas[71][1]} ${text}`, description: `π°πππππ: ${idiomas[71][0]} | ${idiomas[71][1]}`},
{title: "πͺ " + idiomas[72][0], rowId: `${usedPrefix + command} ${idiomas[72][1]} ${text}`, description: `π°πππππ: ${idiomas[72][0]} | ${idiomas[72][1]}`},
{title: "πͺ " + idiomas[73][0], rowId: `${usedPrefix + command} ${idiomas[73][1]} ${text}`, description: `π°πππππ: ${idiomas[73][0]} | ${idiomas[73][1]}`},
{title: "πͺ " + idiomas[74][0], rowId: `${usedPrefix + command} ${idiomas[74][1]} ${text}`, description: `π°πππππ: ${idiomas[74][0]} | ${idiomas[74][1]}`},
{title: "πͺ " + idiomas[75][0], rowId: `${usedPrefix + command} ${idiomas[75][1]} ${text}`, description: `π°πππππ: ${idiomas[75][0]} | ${idiomas[75][1]}`},
{title: "πͺ " + idiomas[76][0], rowId: `${usedPrefix + command} ${idiomas[76][1]} ${text}`, description: `π°πππππ: ${idiomas[76][0]} | ${idiomas[76][1]}`},
{title: "πͺ " + idiomas[77][0], rowId: `${usedPrefix + command} ${idiomas[77][1]} ${text}`, description: `π°πππππ: ${idiomas[77][0]} | ${idiomas[77][1]}`},
{title: "πͺ " + idiomas[78][0], rowId: `${usedPrefix + command} ${idiomas[78][1]} ${text}`, description: `π°πππππ: ${idiomas[78][0]} | ${idiomas[78][1]}`},
{title: "πͺ " + idiomas[79][0], rowId: `${usedPrefix + command} ${idiomas[79][1]} ${text}`, description: `π°πππππ: ${idiomas[79][0]} | ${idiomas[79][1]}`},
{title: "πͺ " + idiomas[80][0], rowId: `${usedPrefix + command} ${idiomas[80][1]} ${text}`, description: `π°πππππ: ${idiomas[80][0]} | ${idiomas[80][1]}`},
{title: "πͺ " + idiomas[81][0], rowId: `${usedPrefix + command} ${idiomas[81][1]} ${text}`, description: `π°πππππ: ${idiomas[81][0]} | ${idiomas[81][1]}`},
{title: "πͺ " + idiomas[82][0], rowId: `${usedPrefix + command} ${idiomas[82][1]} ${text}`, description: `π°πππππ: ${idiomas[82][0]} | ${idiomas[82][1]}`},
{title: "πͺ " + idiomas[83][0], rowId: `${usedPrefix + command} ${idiomas[83][1]} ${text}`, description: `π°πππππ: ${idiomas[83][0]} | ${idiomas[83][1]}`},
{title: "πͺ " + idiomas[84][0], rowId: `${usedPrefix + command} ${idiomas[84][1]} ${text}`, description: `π°πππππ: ${idiomas[84][0]} | ${idiomas[84][1]}`},
{title: "πͺ " + idiomas[85][0], rowId: `${usedPrefix + command} ${idiomas[85][1]} ${text}`, description: `π°πππππ: ${idiomas[85][0]} | ${idiomas[85][1]}`},
{title: "πͺ " + idiomas[86][0], rowId: `${usedPrefix + command} ${idiomas[86][1]} ${text}`, description: `π°πππππ: ${idiomas[86][0]} | ${idiomas[86][1]}`},
{title: "πͺ " + idiomas[87][0], rowId: `${usedPrefix + command} ${idiomas[87][1]} ${text}`, description: `π°πππππ: ${idiomas[87][0]} | ${idiomas[87][1]}`},
{title: "πͺ " + idiomas[88][0], rowId: `${usedPrefix + command} ${idiomas[88][1]} ${text}`, description: `π°πππππ: ${idiomas[88][0]} | ${idiomas[88][1]}`},
{title: "πͺ " + idiomas[89][0], rowId: `${usedPrefix + command} ${idiomas[89][1]} ${text}`, description: `π°πππππ: ${idiomas[89][0]} | ${idiomas[89][1]}`},
{title: "πͺ " + idiomas[90][0], rowId: `${usedPrefix + command} ${idiomas[90][1]} ${text}`, description: `π°πππππ: ${idiomas[90][0]} | ${idiomas[90][1]}`},
{title: "πͺ " + idiomas[91][0], rowId: `${usedPrefix + command} ${idiomas[91][1]} ${text}`, description: `π°πππππ: ${idiomas[91][0]} | ${idiomas[91][1]}`},
{title: "πͺ " + idiomas[92][0], rowId: `${usedPrefix + command} ${idiomas[92][1]} ${text}`, description: `π°πππππ: ${idiomas[92][0]} | ${idiomas[92][1]}`},
{title: "πͺ " + idiomas[93][0], rowId: `${usedPrefix + command} ${idiomas[93][1]} ${text}`, description: `π°πππππ: ${idiomas[93][0]} | ${idiomas[93][1]}`},
{title: "πͺ " + idiomas[94][0], rowId: `${usedPrefix + command} ${idiomas[94][1]} ${text}`, description: `π°πππππ: ${idiomas[94][0]} | ${idiomas[94][1]}`},
{title: "πͺ " + idiomas[95][0], rowId: `${usedPrefix + command} ${idiomas[95][1]} ${text}`, description: `π°πππππ: ${idiomas[95][0]} | ${idiomas[95][1]}`},
{title: "πͺ " + idiomas[96][0], rowId: `${usedPrefix + command} ${idiomas[96][1]} ${text}`, description: `π°πππππ: ${idiomas[96][0]} | ${idiomas[96][1]}`},
{title: "πͺ " + idiomas[97][0], rowId: `${usedPrefix + command} ${idiomas[97][1]} ${text}`, description: `π°πππππ: ${idiomas[97][0]} | ${idiomas[97][1]}`},
{title: "πͺ " + idiomas[98][0], rowId: `${usedPrefix + command} ${idiomas[98][1]} ${text}`, description: `π°πππππ: ${idiomas[98][0]} | ${idiomas[98][1]}`},
{title: "πͺ " + idiomas[99][0], rowId: `${usedPrefix + command} ${idiomas[99][1]} ${text}`, description: `π°πππππ: ${idiomas[99][0]} | ${idiomas[99][1]}`},
{title: "πͺ " + idiomas[100][0], rowId: `${usedPrefix + command} ${idiomas[100][1]} ${text}`, description: `π°πππππ: ${idiomas[100][0]} | ${idiomas[100][1]}`},
{title: "πͺ " + idiomas[101][0], rowId: `${usedPrefix + command} ${idiomas[101][1]} ${text}`, description: `π°πππππ: ${idiomas[101][0]} | ${idiomas[101][1]}`},
{title: "πͺ " + idiomas[102][0], rowId: `${usedPrefix + command} ${idiomas[102][1]} ${text}`, description: `π°πππππ: ${idiomas[102][0]} | ${idiomas[102][1]}`},
{title: "πͺ " + idiomas[103][0], rowId: `${usedPrefix + command} ${idiomas[103][1]} ${text}`, description: `π°πππππ: ${idiomas[103][0]} | ${idiomas[103][1]}`},
{title: "πͺ " + idiomas[104][0], rowId: `${usedPrefix + command} ${idiomas[104][1]} ${text}`, description: `π°πππππ: ${idiomas[104][0]} | ${idiomas[104][1]}`},
{title: "πͺ " + idiomas[105][0], rowId: `${usedPrefix + command} ${idiomas[105][1]} ${text}`, description: `π°πππππ: ${idiomas[105][0]} | ${idiomas[105][1]}`},
{title: "πͺ " + idiomas[106][0], rowId: `${usedPrefix + command} ${idiomas[106][1]} ${text}`, description: `π°πππππ: ${idiomas[106][0]} | ${idiomas[106][1]}`},
{title: "πͺ " + idiomas[107][0], rowId: `${usedPrefix + command} ${idiomas[107][1]} ${text}`, description: `π°πππππ: ${idiomas[107][0]} | ${idiomas[107][1]}`},
{title: "πͺ " + idiomas[108][0], rowId: `${usedPrefix + command} ${idiomas[108][1]} ${text}`, description: `π°πππππ: ${idiomas[108][0]} | ${idiomas[108][1]}`},
{title: "πͺ " + idiomas[109][0], rowId: `${usedPrefix + command} ${idiomas[109][1]} ${text}`, description: `π°πππππ: ${idiomas[109][0]} | ${idiomas[109][1]}`},
{title: "πͺ " + idiomas[110][0], rowId: `${usedPrefix + command} ${idiomas[110][1]} ${text}`, description: `π°πππππ: ${idiomas[110][0]} | ${idiomas[110][1]}`},
{title: "πͺ " + idiomas[111][0], rowId: `${usedPrefix + command} ${idiomas[111][1]} ${text}`, description: `π°πππππ: ${idiomas[111][0]} | ${idiomas[111][1]}`},
{title: "πͺ " + idiomas[112][0], rowId: `${usedPrefix + command} ${idiomas[112][1]} ${text}`, description: `π°πππππ: ${idiomas[112][0]} | ${idiomas[112][1]}`},
{title: "πͺ " + idiomas[113][0], rowId: `${usedPrefix + command} ${idiomas[113][1]} ${text}`, description: `π°πππππ: ${idiomas[113][0]} | ${idiomas[113][1]}`},
{title: "πͺ " + idiomas[114][0], rowId: `${usedPrefix + command} ${idiomas[114][1]} ${text}`, description: `π°πππππ: ${idiomas[114][0]} | ${idiomas[114][1]}`},
{title: "πͺ " + idiomas[115][0], rowId: `${usedPrefix + command} ${idiomas[115][1]} ${text}`, description: `π°πππππ: ${idiomas[115][0]} | ${idiomas[115][1]}`},
{title: "πͺ " + idiomas[116][0], rowId: `${usedPrefix + command} ${idiomas[116][1]} ${text}`, description: `π°πππππ: ${idiomas[116][0]} | ${idiomas[116][1]}`},
{title: "πͺ " + idiomas[117][0], rowId: `${usedPrefix + command} ${idiomas[117][1]} ${text}`, description: `π°πππππ: ${idiomas[117][0]} | ${idiomas[117][1]}`},
{title: "πͺ " + idiomas[118][0], rowId: `${usedPrefix + command} ${idiomas[118][1]} ${text}`, description: `π°πππππ: ${idiomas[118][0]} | ${idiomas[118][1]}`},
{title: "πͺ " + idiomas[119][0], rowId: `${usedPrefix + command} ${idiomas[119][1]} ${text}`, description: `π°πππππ: ${idiomas[119][0]} | ${idiomas[119][1]}`},
{title: "πͺ " + idiomas[120][0], rowId: `${usedPrefix + command} ${idiomas[120][1]} ${text}`, description: `π°πππππ: ${idiomas[120][0]} | ${idiomas[120][1]}`},
{title: "πͺ " + idiomas[121][0], rowId: `${usedPrefix + command} ${idiomas[121][1]} ${text}`, description: `π°πππππ: ${idiomas[121][0]} | ${idiomas[121][1]}`},
{title: "πͺ " + idiomas[122][0], rowId: `${usedPrefix + command} ${idiomas[122][1]} ${text}`, description: `π°πππππ: ${idiomas[122][0]} | ${idiomas[122][1]}`},
{title: "πͺ " + idiomas[123][0], rowId: `${usedPrefix + command} ${idiomas[123][1]} ${text}`, description: `π°πππππ: ${idiomas[123][0]} | ${idiomas[123][1]}`},
{title: "πͺ " + idiomas[124][0], rowId: `${usedPrefix + command} ${idiomas[124][1]} ${text}`, description: `π°πππππ: ${idiomas[124][0]} | ${idiomas[124][1]}`},
{title: "πͺ " + idiomas[125][0], rowId: `${usedPrefix + command} ${idiomas[125][1]} ${text}`, description: `π°πππππ: ${idiomas[125][0]} | ${idiomas[125][1]}`},
{title: "πͺ " + idiomas[126][0], rowId: `${usedPrefix + command} ${idiomas[126][1]} ${text}`, description: `π°πππππ: ${idiomas[126][0]} | ${idiomas[126][1]}`},
{title: "πͺ " + idiomas[127][0], rowId: `${usedPrefix + command} ${idiomas[127][1]} ${text}`, description: `π°πππππ: ${idiomas[127][0]} | ${idiomas[127][1]}`},
{title: "πͺ " + idiomas[128][0], rowId: `${usedPrefix + command} ${idiomas[128][1]} ${text}`, description: `π°πππππ: ${idiomas[128][0]} | ${idiomas[128][1]}`},
{title: "πͺ " + idiomas[129][0], rowId: `${usedPrefix + command} ${idiomas[129][1]} ${text}`, description: `π°πππππ: ${idiomas[129][0]} | ${idiomas[129][1]}`},
{title: "πͺ " + idiomas[130][0], rowId: `${usedPrefix + command} ${idiomas[130][1]} ${text}`, description: `π°πππππ: ${idiomas[130][0]} | ${idiomas[130][1]}`},
{title: "πͺ " + idiomas[131][0], rowId: `${usedPrefix + command} ${idiomas[131][1]} ${text}`, description: `π°πππππ: ${idiomas[131][0]} | ${idiomas[131][1]}`},
{title: "πͺ " + idiomas[132][0], rowId: `${usedPrefix + command} ${idiomas[132][1]} ${text}`, description: `π°πππππ: ${idiomas[132][0]} | ${idiomas[132][1]}`},
{title: "πͺ " + idiomas[133][0], rowId: `${usedPrefix + command} ${idiomas[133][1]} ${text}`, description: `π°πππππ: ${idiomas[133][0]} | ${idiomas[133][1]}`},
{title: "πͺ " + idiomas[134][0], rowId: `${usedPrefix + command} ${idiomas[134][1]} ${text}`, description: `π°πππππ: ${idiomas[134][0]} | ${idiomas[134][1]}`}
]}]	
try {   
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
const listMessage = {
text: result.text,
footer: `*π£π₯ππ ππ¨π  ${user.premium ? "β": "β"}*\n${wm}`,
title: `*ββββκ€ π πππΌπΏππΎπΎπππ κ€ββββ*`,
buttonText: `πͺ ππ‘ππππ§ ππππ€π’π πͺ`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
await m.reply(result.text)
  
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
const listMessage = {
text: result2.text,
footer: `*π£π₯ππ ππ¨π  ${user.premium ? "β": "β"}*\n${wm}`,
title: `*ββββκ€ π πππΌπΏππΎπΎπππ κ€ββββ*`,
buttonText: `πͺ ππ‘ππππ§ ππππ€π’π πͺ`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
await m.reply(result2.text)
} catch { 
await m.reply(`${fg}\`\`\`NO SE LOGRΓ TRADUCIR SU TEXTO, REPORTE ESTE COMANDO CON EL COMANDO #reporte\`\`\``)    
}}}
handler.command = /^(translate|traducir|trad)$/i
export default handler
