module.exports = [{
name: "mpunban",
code: `


$description[1;Unbanned $userTag[$mentioned[1]]! Now they can start earning modpoints.]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]

$setUserVar[ismpbanned;false;$mentioned[1]]

$onlyIf[$getUserVar[ismpbanned;$mentioned[1]]==true;{newEmbed: {color:$getVar[color]}{description:❌ $userTag[$mentioned[1]]'s is already mpunban!}}]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpunban @user\`
**Example:** \`$getServerVar[prefix]mpunban @$userTag[$botOwnerID]\`
**Description:** This command allows the MP Admin to unban a user.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]
`
}]