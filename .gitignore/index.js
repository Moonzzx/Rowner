const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "&/";

client.login("NDY1NTE1MzgwMDYwNzE3MDU4.DiQH_g.fCk96cn3dWoM6-KiKnCeAWAD_rY");

client.on("ready", () => {
    console.log("ready")
    client.user.setGame("&/help | Bot d'informations");
});

client.on('message', message => {

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#31DEC7")
        .setTitle(":shield: ```Commandes & sous-commandes.```")
        .addField("&/botinfos :", "``Permet de connaître des informations relatives au bot.``")
        .addField("&/serverinfos :", "``Permet de connaître des informations relatives au serveur.``")
        .addField("&/invite :", "``Permet d'obtenir le lien d'invitation du bot.``")
        .addField("&/donate :", "``Te permets de contribuer au développement du bot.``")
        .setFooter("Rowner by Moonzzx")
        .setThumbnail(client.user.avatarURL)
        message.channel.sendMessage(help_embed);
    }

    if(message.content === prefix + "serverinfos"){
        var infos_embed = new Discord.RichEmbed()
        .setColor("#31DEC7")
        .setTitle(":shield:  ```Informations relatives au serveur.```")
        .addField("Nombres de membres :", message.guild.members.size)
        .addField("Date de création de serveur:", message.guild.createdAt)
        .addField("Créateur du serveur :", message.guild.owner)
        .addField("Nationnalité du serveur :", message.guild.region)
        .setFooter("Rowner by Moonzzx")
        .setThumbnail(client.user.avatarURL)
        message.channel.sendMessage(infos_embed)
    }

    if(message.content === prefix + "botinfos"){
        var bot_embed = new Discord.RichEmbed()
        .setColor("#31DEC7")
        .setTitle(":shield:  ```Informations relatives au bot.```")
        .addField("ID du bot :", client.user.id)
        .addField("Date de création du bot :", client.user.createdAt)
        .addField("Nom complet du bot :", "Rowner#" + client.user.discriminator)
        .addField("Bot créé par :", "Moonzzx#7722")
        .addField("Origines du bot :", "``Bot d'informations provenant du serveur Rowner Community`` : https://discord.gg/dTAxbcK")
        .setFooter("Rowner by Moonzzx")
        .setThumbnail(client.user.avatarURL)
        message.channel.sendMessage(bot_embed)
    }

    if(message.content === prefix + "invite"){
        var invite_embed = new Discord.RichEmbed()
        .setColor("#31DEC7")
        .setTitle(":shield:  ```Lien d'invitation du bot.```")
        .addField("Clique sur le lien présent ci-dessous pour inviter Rowner dans ton serveur Discord :", "http://urlz.fr/7ofM")
        .setFooter("Rowner by Moonzzx")
        .setThumbnail(client.user.avatarURL)
        message.channel.sendMessage(invite_embed)
    }

    if(message.content === prefix + "donate"){
        var donate_embed = new Discord.RichEmbed()
        .setColor("#31DEC7")
        .setTitle(":shield:  ```Aider au développement du bot.```")
        .addField("Clique sur le lien présent ci-dessous pour contribuer au développement du bot *(les donations sont biensûr facultatives)* :", "https://www.tipeee.com/rownerbot-developpement")
        .setFooter("Rowner by Moonzzx")
        .setThumbnail(client.user.avatarURL)
        message.channel.sendMessage(donate_embed)
    }


});
