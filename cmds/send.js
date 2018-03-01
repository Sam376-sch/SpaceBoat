module.exports.run = async (bot, message, args) => {
    if (message.author.id == 166125035092836352) {
        message.channel.send(args.splice(0).join(' '))
        try {message.delete(0).catch(err => {console.log(`Couldn't delete message`)})}
        catch(error) {console.log(error.message)}
    }
}
module.exports.help = {
    name: "send",
    usage: "send <message>",
    type: "Private",
    description: "Sends a message via the bot. Restricted to bot owner."
}