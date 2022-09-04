module.exports = [{
name: "setup",
code: `
$createApplicationCommand[$guildID;anime;This command allows you to fetch info about a specific anime;yes;slash;{"name": "query", "description": "Type the name of the anime you want to fetch info for!", "type": 3, "required": true}]

$onlyForIDs[$botOwnerID;]
`
}]