module.exports = [{
name: "mpdeduct",
code: `

$description[1;Deducted \`$get[sub]\` modpoint(s) from <@$mentioned[1]>! They now have \`$get[then]\` modpoints.]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]
$setUserVar[mp;$get[then];$mentioned[1]]
$let[then;$sub[$get[now];$get[sub]]]
$let[sub;$noMentionMessage]
$let[now;$getUserVar[mp;$mentioned[1]]]

$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed: {color:$getVar[color]}{description:\`$noMentionMessage\` is not a number!}}]

$onlyIf[$noMentionMessage!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpdeduct @user <no>\`
**Example:** \`$getServerVar[prefix]mpdeduct @$userTag[$botOwnerID] 69\`
**Description:** This command allows the MP Admin to deduct mod points from a user.}}]

$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpdeduct @user <no>\`
**Example:** \`$getServerVar[prefix]mpdeduct @$userTag[$botOwnerID] 69\`
**Description:** This command allows the MP Admin to deduct mod points from a user.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]


`
}]