module.exports = [{
name: "$alwaysExecute",
code: `

$log[-X-X-X-X-X- Exoins Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Exoins Logger -X-X-X-X-X-

]
$setUserVar[exoin;$sum[$getUserVar[exoin];$get[modified]]]
$let[modified;$random[0;1]]
$onlyIf[$splitText[1]!=;]
$textSplit[$message;+]
$onlyIf[$channelID!=831759310627405825;]
$onlyForCategories[831502670510292992;933257435160907826;]`
}]