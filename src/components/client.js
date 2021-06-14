// Importações
const DISCORD_RPC = require('discord-rpc')
const client = new DISCORD_RPC.Client({transport: 'ipc'})

// Exports
module.exports = client