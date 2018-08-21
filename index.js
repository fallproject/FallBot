const Discord = require('discord.js')
const CommandsBuilder = require("./commands.js")
const { prefix, token, debug } = require('./env.json')
gloabl.chalk = require('chalk')
global.log = (message) => {
	console.log(`${chalk.keyword('orange')('[FallBot]')} ${message}`)
}

const client = new Discord.Client()

client.on('ready', () => {
	console.log( chalk.keyword('orange')('[FallBot]') + chalk.green('Started') )
})
client.on('message', message => {
	if  (message.content.includes( prefix ) ) {
		let commands = new CommandsBuilder( message, prefix )
		let command = commands.message
		if (debug) {
			console.log( chalk.green("[Debug] ") + command )
		}
		if (commands[command] != undefined) { //Checks if command exists in Commands.js
			commands[command]()
		}
	}
})

client.login(token)