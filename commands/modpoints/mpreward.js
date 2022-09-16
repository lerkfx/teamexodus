module.exports = [{
name: "mpreward",
code: `

$description[1;Rewarded \`$get[sum]\` modpoint(s) to <@$mentioned[1]>! They now have \`$get[then]\` modpoints.]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setUserVar[mp;$get[then];$mentioned[1]]
$let[then;$sum[$get[now];$get[sum]]]
$let[sum;$noMentionMessage]
$let[now;$getUserVar[mp;$mentioned[1]]]

$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed: {color:$getVar[color]}{description:❌ \`$noMentionMessage\` is not a number!}}]

$onlyIf[$noMentionMessage!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpreward @user <no>\`
**Example:** \`$getServerVar[prefix]mpreward @$userTag[$botOwnerID] 69\`
**Description:** This command allows the MP Admin to reward mod points to a user.}}]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpreward @user <no>\`
**Example:** \`$getServerVar[prefix]mpreward @$userTag[$botOwnerID] 69\`
**Description:** This command allows the MP Admin to reward mod points to a user.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]


`
}]