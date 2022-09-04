module.exports = ({
name: "evaluate",
aliases: ['eval','e'],
description: "Evaluates the code! (Developer Only)",
usage: "evaluate <code>",
code: `
$eval[$message]
$onlyForIDs[428191892950220800;$botOwnerID;{newEmbed: {color:DA2C38}{description:<:fail:933356911846387783> **__This command can only be used by <@$botOwnerID>!__**}{footer:Executed by $userTag[$authorID]:$authorAvatar}{timestamp}{author:$serverName[$guildID]:$serverIcon[$guildID]}}]`
})