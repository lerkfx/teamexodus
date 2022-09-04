module.exports = [{
name: "func",
category: "developer",
usage: "$getServerVar[prefix]func",
developeronly: true,
aliases: ['function','f'],
code: `


$author[1;aoi.js@stable;$serverIcon]
$thumbnail[1;$serverIcon]
$color[1;$getServerVar[color]]
$addField[1;DJS Usage:;\`\`\`$djsEval[client.functionManager.usage.get('$getObjectProperty[data[0].name]');yes]\`\`\`]
$addField[1;API Usage:;\`\`\`$getObjectProperty[data[0].usage]\`\`\`]
$addField[1;Description:;\`\`\`$getObjectProperty[data[0].desc]\`\`\`]
$addField[1;Name:;\`\`\`$getObjectProperty[data[0].name]\`\`\`]

$createObject[$jsonRequest[https://api.leref.ga/functions/$message]]
$onlyForIDs[428191892950220800;$botOwnerID;]`

}]