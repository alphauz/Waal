module.exports = {
    handleCommand: async (ptz, msg) => {
        const command = msg.message.conversation.toLowerCase();
        if (command === 'hi') {
            await ptz.sendMessage(msg.key.remoteJid, { text: 'Hi, Group 2!' });
        }
    }
};
