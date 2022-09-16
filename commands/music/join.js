module.exports = [{
name: "join",
code: `
$joinVC[$voiceID[$authorID]]

$description[1;**__Joined <#$voiceID[$authorID]>!__**]
$color[1;$getVar[color]]


$onlyIf[$voiceId[$clientID]==;{newEmbed: {color:$getVar[color]}{description:❌ I'm already in <#$voiceID[$clientID]>}}]

$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]]


`
}]