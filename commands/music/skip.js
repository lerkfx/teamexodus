module.exports = [{
name: "skip",
code: `
$skip

$color[1;$getVar[color]]
$title[1;Skipped $songInfo[title];$songInfo[url]]

$onlyIf[$queueLength!=0;{newEmbed: {color:$getVar[color]}{description:❌ No track is currently queued!}}]

$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]

$onlyIf[$guildID!=831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]