// Instanciado as Importações
const { ID } = require('../../config/config.json')
const client = require('../components/client')

// Execução do Programa
client.on('ready', async () => {
    await client.setActivity({
        details: "Servidor destinado a Programação",
        buttons: [{label: "Join", url:"https://discord.gg/qydeyntwye"}],
        instance: false,
        largeImageKey: "cc",
        largeImageText: "Coders Community",
        smallImageKey: "p",
        smallImageText: "By Programmers For Programmers",
        startTimestamp: new Date()
    })
    .catch(ErrorLog => {
        console.log("Durante a execução do arquivo foram encontrados erros consistentes. \nErro: " + ErrorLog)
    })
    console.log("==================== || ====================\n$ A Aplicação está em execução no momento! $\n==================== || ====================")
})

client.login({clientId: ID})
    .catch(ErrorLog => {
        console.log("De certo algo deu errado durante a execução do programa 'Ambiente Login'\nErro: "+ ErrorLog)
    })