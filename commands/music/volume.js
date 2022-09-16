module.exports = [{
name: "volume",
aliases: ['vol'],
code: `
$color[1;$getVar[color]]
$title[1;Changed volume from \`$get[current]\` to \`$volume\`]

$volume[$message]
$let[current;$volume]

$onlyIf[$isNumber[$message]==true;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]volume <no>\`
**Example:** \`$getServerVar[prefix]volume 200\`
**Aliases:** \`vol\`
**Description:** This command allows a user to adjust the volume from 0 upto ∞.}}]

$onlyIf[$queueLength!=0;{newEmbed: {color:$getVar[color]}{description:❌ No track is currently queued!}}]
$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]

$onlyIf[$message!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]volume <no>\`
**Example:** \`$getServerVar[prefix]volume 200\`
**Aliases:** \`vol\`
**Description:** This command allows a user to adjust the volume from 0 upto 200.}}]


$onlyIf[$getVar[limeban]==valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]