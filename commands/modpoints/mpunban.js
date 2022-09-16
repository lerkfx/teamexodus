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

$onlyIf[$guildID!=831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]