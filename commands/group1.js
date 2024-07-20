module.exports = {
    handleCommand: async (ptz, msg) => {
        const command = msg.message.conversation.toLowerCase();
        if (command === 'hello') {
            await ptz.sendMessage(msg.key.remoteJid, { text: 'Hello, Group 1!' });
        }
    }
};
