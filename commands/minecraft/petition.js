module.exports = [{
name: "petition",
type: "interaction",
prototype: "slash",
code: `

$addMessageReactions[1003823336251457627;$get[message];<a:tick:1006374498381090949>;<a:cross:1006374494044180511>]
$wait[1s]
$interactionReply[;{newEmbed:
{description:<a:tick:1006374498381090949> **__Successfully posted your petition!__**}{color:$getVar[color]}}]
$let[thread;$createThread[1003823336251457627;Petition #$getVar[petitionCount] - $interactionData[options.data[0].value];10080;public;$get[message];yes]]

$let[message;$channelSendMessage[1003823336251457627;<@&1008044244965003316> {newEmbed:{title:Petition #$getVar[petitionCount] - $interactionData[options.data[0].value]}{color:$getVar[color]}{image:$getVar[botbanner]}{description:> $customEmoji[e_stars] $interactionData[options.data[1].value]}{author:$userTag:$authorAvatar}{footer:Petition by $userTag:$authorAvatar}{timestamp}{thumbnail:$serverIcon}};yes]]
$setVar[petitionCount;$sum[$getVar[petitionCount];1]]
`
}]