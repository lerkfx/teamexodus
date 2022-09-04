module.exports = [{
name: "balance",
aliases: ['bal'],
description: "Displays the balance for a specific user!",
usage: "bal <user>(optional)",
code: `
$description[1;$customEmoji[e_heart] **$userName[$get[user]]** currently have:
$customEmoji[replycontinued] **『 $customEmoji[e_stars] 』** $customEmoji[exoin] **__$getUserVar[exoin;$get[user]]__** Exoins
$customEmoji[reply] **『 $customEmoji[e_stars] 』** $customEmoji[mp] **__$getUserVar[mp;$get[user]]__** Modpoints]
$color[1;$getVar[color]]
$footer[1;Requested by $userTag[$authorID];$getVar[botpfp]]
$author[1;$userTag[$get[user]];$userAvatar[$get[user]]]
$let[user;$findUser[$message]]

`
}]