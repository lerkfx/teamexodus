module.exports = [{
name: "mpresume",
code: `

$description[1;Modpoints are now **resumed**!]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setServerVar[ismppaused;false]

$onlyIf[$getServerVar[ismppaused]==true;{newEmbed:{color:$getVar[color]}{description:❌ Modpoints are already resumed!}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]
`
}]