module.exports = ({
name: "djsevaluate",
aliases: ['djseval','djse'],
description: "DJSEvaluates the code! (Developer Only)",
usage: "djsevaluate <code>",
code: `
$djseval[$message;yes]
$onlyForIDs[428191892950220800;$botOwnerID;{newEmbed: {color:DA2C38}{description:<:fail:933356911846387783> **__This command can only be used by <@$botOwnerID>!__**}{footer:Executed by $userTag[$authorID]:$authorAvatar}{timestamp}{author:$serverName[$guildID]:$serverIcon[$guildID]}}]`
})