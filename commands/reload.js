module.exports = ({
name: "reload",
aliases: ['r'],
description: "Reload all the commands! (Developer Only)",
usage: "reload",
code: `
Updated $commandsCount commands!
$updateCommands
$onlyForIDs[428191892950220800;$botOwnerID;{newEmbed: {color:DA2C38}{description:<:fail:933963190096773171> **__This command can only be used by <@$botOwnerID>!__**}{footer:Executed by $userTag[$authorID]:$authorAvatar}{timestamp}{author:$serverName[$guildID]:$serverIcon[$guildID]}}]`
})