module.exports = [{
name: "skip",
code: `
$skip

$color[1;$getVar[color]]
$title[1;Skipped $songInfo[title];$songInfo[url]]

$onlyIf[$queueLength!=0;{newEmbed: {color:$getVar[color]}{description:❌ No track is currently queued!}}]

$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]
`
}]