module.exports = class {
	constructor(message, prefix){
		this.message = message.content.substring(prefix.length + 1)
		this.channel = message.channel
		this.user = message.author
	}
	send(message) {
		this.channel.startTyping()
		this.channel.send(message)
		this.channel.stopTyping()
	}
	spam() {
		var arr = new Array(5).fill()
		log(`Sending ${arr.length} spam messages`)
		for (var i in arr) {
			this.channel.send(`[Spam]: Message ${Number(i) + 1} of ${Number(arr.length)}`)
		}
	}
	clear() {
		this.send("This channel is about to be cleared")
		this.channel.fetchMessages().then(messages => this.channel.bulkDelete(messages))
		log(chalk.blue(`Cleared #${this.channel.name}`))
	}
	create() {
		this.send("Join Pretend Your Friends to use this command")
	}
	invite() {
		this.send("https://discordapp.com/api/oauth2/authorize?client_id=480206733684375563&permissions=70515715&redirect_uri=http%3A%2F%2Flocalhost&scope=bot")
	}
}