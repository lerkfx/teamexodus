module.exports = [{
name: "loop",
code: `
$loop[$message[1];{"mes": "$messageSlice[1]"};loopmessage]

$onlyForIDs[$botOwnerID;]
`
},{
type: "awaited",
name: "loopmessage",
code: `$awaitData[mes]`
}]