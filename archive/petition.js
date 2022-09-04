module.exports = [{
name: "petition",
type: "interaction",
prototype: "slash",
code: `
$editMessage[$get[message];{
"content": " ",
"embeds": "{newEmbed:{title:Petition #$getVar[petitionCount] - $interactionData[options.data[0].value]}{color:$getVar[color]}{image:$getVar[botbanner]}{description:> $customEmoji[e_stars] $interactionData[options.data[1].value]}{author:$userTag:$authorAvatar}{footer:Upvotes ↦ 0 | Downvotes ↦ 0:$serverIcon}{timestamp}{thumbnail:$serverIcon}}",
"components": "{actionRow: {button:Upvote:success:upvote:false:<a:tick:1006374498381090949>}{button:Downvote:danger:downvote:false:<a:cross:1006374494044180511>}{button:Comment:link:https#COLON#//discord.com/channels/831498713624346634/$get[thread]:false:💬}}"
};1003823336251457627]
$wait[1s]
$interactionReply[;{newEmbed:
{description:Done!}}]
$let[thread;$createThread[1003823336251457627;Petition #$getVar[petitionCount] - $interactionData[options.data[0].value];10080;public;$get[message];yes]]

$let[message;$channelSendMessage[1003823336251457627;{
"content": " ",
"embeds": "{newEmbed:{title:Petition #$getVar[petitionCount] - $interactionData[options.data[0].value]}{color:$getVar[color]}{image:$getVar[botbanner]}{description:> $customEmoji[e_stars] $interactionData[options.data[1].value]}{author:$userTag:$authorAvatar}{footer:Upvotes ↦ 0 | Downvotes ↦ 0:$authorAvatar}{timestamp}{thumbnail:$serverIcon}}",
"components": "{actionRow: {button:Upvote:success:upvote:false:<a:tick:1006374498381090949>}{button:Downvote:danger:downvote:false:<a:cross:1006374494044180511>}{button:Comment:link:https#COLON#//discord.com/channels/831498713624346634/:false:💬}}"
};yes]]
`
},{
name: "upvote",
type: "interaction",
prototype: "button",
code:`

$interactionUpdate[{newEmbed:{title:Petition #$getVar[petitionCount] - $interactionData[options.data[0].value]}{color:$getVar[color]}{image:$getVar[botbanner]}{description:> $customEmoji[e_stars] $interactionData[options.data[1].value]}{author:$userTag:$authorAvatar}{footer:Upvotes ↦ $getMessageVar[upvotes;$interactionData[message.id]] | Downvotes ↦ $getMessageVar[downvotes;$interactionData[message.id]]:$serverIcon}{timestamp}{thumbnail:$serverIcon}}]

$onlyIf[$checkContains[$getMessageVar[downvotedids;$interactionData[message.id]];$authorID]==false;]

$onlyIf[$checkContains[$getMessageVar[upvotedids;$interactionData[message.id]];$authorID]==false;{"content" : " ",
"embeds" : "{newEmbed:{title:Error}{description:$customEmoji[cross] You have already upvoted!}{color:RED}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]
`
}]