module.exports = [{
name: "mpban",
code: `

$setUserVar[mp;0;$mentioned[1]]

$description[1;Banned $userTag[$mentioned[1]] from earning modpoints! Resetted $userName[$mentioned[1]]'s modpoints from $getUserVar[mp;$mentioned[1]] to \`0\`]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]

$setUserVar[ismpbanned;true;$mentioned[1]]

$onlyIf[$getUserVar[ismpbanned;$mentioned[1]]==false;{newEmbed: {color:$getVar[color]}{description:❌ $userTag[$mentioned[1]]'s is already banned!}}]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpban @user\`
**Example:** \`$getServerVar[prefix]mpban @$userTag[$botOwnerID]\`
**Description:** This command allows the MP Admin to ban a user.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]

$onlyIf[$getVar[limeban]==valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]