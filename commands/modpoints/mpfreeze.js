module.exports = [{
name: "mpfreeze",
code: `

$description[1;Freezed <@$mentioned[1]>'s modpoints at \`$getUserVar[mp;$mentioned[1]]\` MP(s)!]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setUserVar[ismpfreezed;true;$mentioned[1]]

$onlyIf[$getUserVar[ismpfreezed;$mentioned[1]]==false;{newEmbed: {color:$getVar[color]}{description:❌ $userTag[$mentioned[1]]'s Modpoints are already frozen!}}]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpfreeze @user\`
**Example:** \`$getServerVar[prefix]mpfreeze @$userTag[$botOwnerID]\`
**Description:** This command allows the MP Admin to freeze a user's mod points.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]