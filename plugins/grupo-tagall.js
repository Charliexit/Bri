let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐉𝐮𝐞𝐠𝐚𝐧 𝐨 𝐜𝐮𝐩𝐨 😡* ${pesan}`
let teks = `*» ᴅᴇꜱᴘɪᴇʀᴛᴇɴ ᴘʟᴀɴᴛᴀꜱ🌱« 😈ᴇꜱ ʜᴏʀᴀ ᴅᴇ ꜰʀᴇᴇ 😈*\n\n ${oi}\n\n *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `🍀➳ @${mem.id.split('@')[0]}\n`}
teks += `*𝐃𝐅 𝐎𝐟𝐢𝐜𝐢𝐚𝐥  𝐁𝐨𝐭*\n\n*👻🖤*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes)$/i
handler.admin = true
handler.group = true
export default handler

