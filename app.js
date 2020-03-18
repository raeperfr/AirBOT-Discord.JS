// Importation des bibliotheques
var Discord = require("discord.js");

// Cr�ation du client discord
var client = new Discord.Client();


// Message qui dis que le bot est pr�t a �tre utilis�
client.once("ready", function () {
    console.log("Ready!");
});

var jour = new Date();
var heure = new Date();

// Mise a jour automatique de l'heure
setInterval(function () {
    jour = new Date().toLocaleDateString();
    heure = new Date().toLocaleTimeString();
}, 1000)

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'publique');
    if (!channel) return;
    channel.send(`Bienvenue dans la guilde AIR, ${member}`);
})

// Fonction d'envoi de message des Event GFs
client.on('message', function (message) {
    console.log(message.content);
})
// Fonction d'envoi de message fun
client.on('message', function (message) {
    console.log(message.content);
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
    else if (message.content === '!hug') {
        message.channel.send('https://media0.giphy.com/media/eWtU27sRzPjWM/giphy.gif');
    }
    else if (message.content === '!longhug') {
        message.channel.send('https://tenor.com/view/sending-virtual-hug-loading-hug-gif-14772300');
    }
    else if (message.content === '!now') {
        message.channel.send(heure);
    }
    else if (message.content === '!calin') {
        message.channel.send('https://tenor.com/view/dance-dancing-hearts-happy-kiss-gif-9942838');
    }
    else if (message.content === '!lali') {
        message.channel.send('Tout ce qui est petit est mignon');
    }
    else if (message.content === "!delai") {
        message.channel.send(delai);
    }
    else if (message.content === "!annoncetp") {
        message.channel.send('Une tp a ete lance, n\'hesitez pas a demande au lanceur de l\'alerte');
    }
    else if (message.content === "!annoncelaby") {
        message.channel.send('Un laby a ete lance, n\'hesitez pas a demande au lanceur de l\'alerte');
    }
    else if (message.content === "!annonceygg") {
        message.channel.send('Un yggdrazil a ete lance, n\'hesitez pas a vous rendre dans le donjon @everyone');
    }
    else if (message.content === "!annoncegvg") {
        message.channel.send('La GvG vas bientot demarrer, n\'hesitez pas a rejoindre le champ de bataille @everyone');
    }
});


// Connexion au bot gr�ce au token d'authentification
client.login("Insert token");