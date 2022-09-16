module.exports = [{
name: "profile",
aliases: ['p'],
description: "Displays the member profile!",
usage: "profile <user>(optional)",
code: `
$addField[1;Profile Bio:;$customEmoji[reply] $replaceText[$replaceText[$checkCondition[$getUserVar[userbio;$get[user]]==false];true; 🚫 No bio to display!];false;$getUserVar[userbio;$get[user]]]]
$addField[1;User Badges:;$replaceText[$replaceText[$checkCondition[$getUserVar[isearlymember;$get[user]]==false&&$getUserVar[hasmodtrophy1;$get[user]]==false&&$getUserVar[isstaff;$get[user]]==false&&$getUserVar[isloved;$get[user]]==false];false;];true;$customEmoji[reply]🚫 No badges to display!]
$replaceText[$replaceText[$getUserVar[isearlymember;$get[user]];false;];true;$customEmoji[reply] $customEmoji[e_earlymember] **『 __Early Member__ 』**]$replaceText[$replaceText[$getUserVar[isloved;$get[user]];false;];true;
$customEmoji[reply] $customEmoji[e_loved] **『 __Loved__ 』**]$replaceText[$replaceText[$getUserVar[isstaff;$get[user]];false;];true;
$customEmoji[reply] $customEmoji[e_staff] **『 __Exodus Staff__ 』**]$replaceText[$replaceText[$getUserVar[hasmodtrophy1;$get[user]];false;];true;
$customEmoji[reply] $customEmoji[e_trophy] **『 __Moderator of this month__ 』**]]
$addField[1;Server Joined:;$customEmoji[reply]<t:$truncate[$divide[$memberJoinedDate[$get[user];$guildID;ms];1000]]:F> (<t:$truncate[$divide[$memberJoinedDate[$get[user];$guildID;ms];1000]]:R>)]
$addField[1;Account Created On:;$customEmoji[reply]<t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:F> (<t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R>)]
$addField[1;UserTag:;$customEmoji[reply]$userTag[$get[user]]]
$color[1;$getVar[color]]
$author[1;$userTag[$get[user]];$userAvatar[$get[user]]]
$image[1;$getVar[botbanner]]

$let[user;$findUser[$message]]
$onlyIf[$getVar[limeban]!=valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}, {
name: "setbio",
aliases: ['sb'],
description: "Sets the user's profile bio!",
usage: "setbio <bio>",
code: `

$color[1;$getVar[color]]
$description[1;**__Successfully changed your bio to__** \`$message\`!]
$setUserVar[userbio;$message]

$onlyIf[$message!=;{newEmbed:
{color:$getVar[color]}
{description:You cannot set your bio to blank. Use \`$getServerVar[prefix]resetbio\` to reset your bio!}
}]
$onlyIf[$getVar[limeban]!=valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]

`
}, {
name: "resetbio",
aliases: ['rb'],
description: "Resets the user's profile bio!",
usage: "rb",
code: `

$color[1;$getVar[color]]
$description[1;**__Successfully reseted your bio !]
$setUserVar[userbio;false]
$onlyIf[$getVar[limeban]!=valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]


`
}]