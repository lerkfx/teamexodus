module.exports = [{
name: "mpset",
code: `

$description[1;Sucessfully setted $userName[$mentioned[1]]'s modpoints to $noMentionmessage!]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setUserVar[mp;$noMentionMessage;$mentioned[1]]

$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed: {color:$getVar[color]}{description:❌ \`$noMentionMessage\` is not a number!}}]

$onlyIf[$noMentionMessage!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpset @user <no>\`
**Example:** \`$getServerVar[prefix]mpset @$userTag[$botOwnerID] 69\`
**Description:** This command allows the MP Admin to set mod points of a user.}}]


$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpset @user <no>\`
**Example:** \`$getServerVar[prefix]mpset @$userTag[$botOwnerID] 69\`
**Description:** This command allows the MP Admin to set mod points of a user.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]

$onlyIf[$guildID!=831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]