module.exports = [{
name: "mppause",
code: `

$description[1;Modpoints are now **paused**!]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setServerVar[ismppaused;true]

$onlyIf[$getServerVar[ismppaused]==false;{newEmbed:{color:$getVar[color]}{description:❌ Modpoints are already paused!}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]
`
}]