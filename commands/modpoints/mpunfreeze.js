module.exports = [{
name: "mpunfreeze",
code: `

$description[1;Unfreezed <@$mentioned[1]>'s modpoints! They currently have \`$getUserVar[mp;$mentioned[1]]\` MP(s).]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setUserVar[ismpfreezed;false;$mentioned[1]]

$onlyIf[$getUserVar[ismpfreezed;$mentioned[1]]==true;{newEmbed: {color:$getVar[color]}{description:❌ $userTag[$mentioned[1]]'s Modpoints are already unfrozen!}}]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpunfreeze @user\`
**Example:** \`$getServerVar[prefix]mpunfreeze @$userTag[$botOwnerID]\`
**Description:** This command allows the MP Admin to unfreeze a user's mod points.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]

$onlyIf[$getVar[limeban]==valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]