module.exports = [{
name: "modpoints",
aliases: ['mp'],
description: "Displays the modpoints of a specific user!",
usage: "mp <user>(optional)",
code: `
$author[1;$userTag[$findUser[$message]];$userAvatar[$findUser[$message]]]
$color[1;$getVar[color]]
$image[1;$getVar[botbanner]]
$addField[1;$customEmoji[e_heart] Next Reset On:;$customEmoji[reply]$customEmoji[e_stars] <t:$getServerVar[mpstamp]:F> (<t:$getServerVar[mpstamp]:R>)]
$addField[1;$customEmoji[e_heart] Position On Leaderboard:;$customEmoji[reply]$customEmoji[e_stars] $replaceText[$replaceText[$checkCondition[$getLeaderboardInfo[mp;$findUser[$message];user;top]==0];false;$getLeaderboardInfo[mp;$findUser[$message];user;top]];true;$membersCount[$guildID]]$replaceText[$replaceText[$checkCondition[$getLeaderboardInfo[mp;$findUser[$message];user;top]==1];false;];true;ˢᵗ]$replaceText[$replaceText[$checkCondition[$getLeaderboardInfo[mp;$findUser[$message];user;top]==2];false;];true;ⁿᵈ]$replaceText[$replaceText[$checkCondition[$getLeaderboardInfo[mp;$findUser[$message];user;top]==3];false;];true;ʳᵈ]$replaceText[$replaceText[$checkCondition[$getLeaderboardInfo[mp;$findUser[$message];user;top]>=4];false;];true;ᵗʰ] / $allMembersCountᵗʰ members]
$addField[1;$customEmoji[e_heart] Mod Points:;$customEmoji[reply]$customEmoji[e_stars] $getUserVar[mp;$findUser[$message]] MP(s)]

$onlyIf[$guildID!=831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]

`
}]