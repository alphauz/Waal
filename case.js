const groupCommands = {
    'group1@g.us': require('./commands/group1'),
    'group2@g.us': require('./commands/group2')
};

async function handleCase(ptz, msg, chatUpdate, store) {
    const sender = msg.key.remoteJid;
    const isGroup = sender.endsWith('@g.us');

    if (isGroup) {
        if (groupCommands[sender]) {
            await groupCommands[sender].handleCommand(ptz, msg);
        }
    } else {
        // Respon untuk pesan pribadi
        await ptz.sendMessage(sender, { text: 'Pesan diterima secara pribadi!' });
    }
}

module.exports = { handleCase };
