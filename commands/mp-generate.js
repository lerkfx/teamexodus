module.exports = [{
name: "$alwaysExecute",
code: `
$channelSendMessage[1002920994656239657;-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-]
$log[-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-

]
$setUserVar[mp;$sum[$getUserVar[mp];$get[modified]]]
$let[modified;1]
$onlyIf[$splitText[1]!=;]
$textSplit[$message;+]
$onlyForChannels[933256807391051826;936858040701972531;831502859597119518;]
`
},{
name: "$alwaysExecute",
code: `
$channelSendMessage[1002920994656239657;-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-]
$log[-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-

]
$setUserVar[mp;$sum[$getUserVar[mp];$get[modified]]]
$let[modified;$randomText[1;2]]
$onlyIf[$splitText[1]!=;]
$textSplit[$message;+]
$onlyForChannels[831506498650636328;933257043656179753;933258433505931324;]
`
},{
name: "$alwaysExecute",
code: `
$channelSendMessage[1002920994656239657;-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-]
$log[-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-

]
$setUserVar[mp;$sum[$getUserVar[mp];$get[modified]]]
$let[modified;2]
$onlyIf[$splitText[1]!=;]
$textSplit[$message;+]
$onlyForChannels[933259273566302258;]
`
},{
name: "$alwaysExecute",
code: `

$channelSendMessage[1002920994656239657;-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-]
$log[-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-
User: $userTag[$authorID] ($authorID)
Channel: #$channelName[$channelID] ($channelID)
Points Modified: +$get[modified]
Message: $message
-X-X-X-X-X- Modpoints Logger -X-X-X-X-X-

]
$setUserVar[mp;$sum[$getUserVar[mp];$get[modified]]]
$let[modified;$randomText[2;3]]
$onlyIf[$splitText[1]!=;]
$textSplit[$message;+]
$onlyForChannels[933259225310838804;933257787075608606;]
`
}]