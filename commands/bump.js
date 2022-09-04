module.exports = [{
name: "$alwaysExecute",
code: `s

$onlyIf[$checkContains[$getEmbed[$channelID;$messageID;1;description];👍]==true;]
$onlyIf[$authorID==302050872383242240;]
$suppressErrors
`
}]