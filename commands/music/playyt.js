module.exports = [{
name: "playyt",
aliases: ["playyoutube", "play"],
code: `

$color[1;$getVar[color]]
$author[1;$replaceText[$replaceText[$checkCondition[$get[pos]>=1];true;Added $songInfo[title;$get[pos]] to queue!];false;Started playing $songInfo[title;$get[pos]]];$serverIcon]
$image[1;$songInfo[thumbnail;$get[pos]]]
$addButton[1;Listen on YouTube;link;$nonEscape[$songInfo[url;$get[pos]]];no;<:youtube:991676788017201212>]

$let[pos;$sub[$queuelength;1]]
$let[track;$playTrack[youtube;$message]]

$if[$voiceID[$clientID]==;{execute:joinvc};]
$onlyIf[$message!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]playyt <name/url>\`
**Example:** \`$getServerVar[prefix]playyt https://www.youtube.com/watch?v=dQw4w9WgXcQ\`
**Aliases:** \`playyoutube, play\`
**Description:** This command allows a user to play a song from youtube.}}]

$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]
`
}]