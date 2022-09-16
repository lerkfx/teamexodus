module.exports = [{
name: "mpdonate",
code: `



$description[1;Donated \`$noMentionMessage\` modpoints to $userTag[$mentioned[1]]! They now have $getUserVar[mp;$mentioned[1]] MP(s). You currently have  $getUserVar[mp] MP(s) left in your balance!]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]


$setUserVar[mp;$get[them];$mentioned[1]]
$setUserVar[mp;$get[me]]
$let[them;$sum[$getUserVar[mp;$mentioned[1]];$noMentionMessage]]
$let[me;$sub[$getUserVar[mp];$noMentionMessage]]

$onlyIf[$getUserVar[mp]>=$noMentionMessage;{newEmbed: {color:$getVar[color]}{description:❌ You don't have $noMentionMessage modpoints!}}]

$onlyIf[$checkContains[$noMentionMessage;-]==false;{newEmbed: {color:$getVar[color]}{description:❌ You cannot enter a negative number!}}]

$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed: {color:$getVar[color]}{description:❌ \`$noMentionMessage\` is not a number!}}]

$onlyIf[$noMentionMessage!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpdonate @user <no>\`
**Example:** \`$getServerVar[prefix]mpdonate @$userTag[$botOwnerID] 69\`
**Description:** This command allows a user to donate modpoints.}}]


$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpdonate @user <no>\`
**Example:** \`$getServerVar[prefix]mpdonate @$userTag[$botOwnerID] 69\`
**Description:** This command allows a user to donate modpoints.}}]

$onlyIf[$getVar[limeban]==valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]