module.exports = [{
name: "mpresetall",
code: `

$description[1;Successfully resetted the leaderboard! Modpoints are now reset.]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$resetUserVar[mp]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]
`
}]