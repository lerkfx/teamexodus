module.exports = [{
name: "mpresetuser",
code: `

$setUserVar[mp;0;$mentioned[1]]
$description[1;Sucessfully resetted $userName[$mentioned[1]]'s modpoints from \`$getUserVar[mp;$mentioned[1]]\` to \`0\`!]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpreset @user\`
**Example:** \`$getServerVar[prefix]mpreset @$userTag[$botOwnerID]\`
**Description:** This command allows the MP Admin to reset mod points of a user.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]