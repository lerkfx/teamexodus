module.exports = [{
name: "$alwaysExecute",
code: `

$jsonRequest[https://some-random-api.ml/chatbot?message=$message&key=yCEANdAtN59BEfx7jDDn0fcz4D55NUrZlo5p9XnRYRZE7Y1H8dL60jGDZjPW3sxI;response;{newEmbed:
{color:$getVar[color]}
{description: 🧡 Error!}
}]
$reply[$messageID]
$onlyIf[$channelID==936858040701972531;]
$onlyIf[$isBot[$authorID]!=true;]
`
}]