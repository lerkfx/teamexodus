module.exports = [{
name: "leave",
aliases: ['dc', 'disconnect'],
code: `
$leaveVC

$description[1;**__Left <#$voiceID[$clientID]>!__**]
$color[1;$getVar[color]]


$onlyIf[$voiceId[$clientID]!=;{newEmbed: {color:$getVar[color]}{description:❌ I'm not connected in any voice channel!}}]

$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]


`
}]