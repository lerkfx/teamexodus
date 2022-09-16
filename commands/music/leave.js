module.exports = [{
name: "leave",
aliases: ['dc', 'disconnect'],
code: `
$leaveVC

$description[1;**__Left <#$voiceID[$clientID]>!__**]
$color[1;$getVar[color]]


$onlyIf[$voiceId[$clientID]!=;{newEmbed: {color:$getVar[color]}{description:❌ I'm not connected in any voice channel!}}]

$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]

$onlyIf[$guildID!=831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]