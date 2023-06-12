let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*toda duda o consulta sobre el bot hablar a wa.me//51917518909* ${pesan}`
let teks = `*» 𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲 𝗽𝗹𝗮𝗻𝘁𝗮 𝗱𝗲 𝗺𝗿𝗱 🤬 «*\n\n ${oi}\n\n *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `🖤↬ @${mem.id.split('@')[0]}\n`}
teks += `*𝐁𝐫𝐢𝐢.𝐒𝐱𝐱 𝐁𝐨𝐭*\n\n*🖤🦋*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes)$/i
handler.admin = true
handler.group = true
export default handler

