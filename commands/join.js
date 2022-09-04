module.exports = [{
name: "join",
type: "join",
channel: "831498713624346636",
code: `Greetings, <@$authorID>!
$thumbnail[1;$serverIcon]
$title[1;Welcome to $serverName]
$color[1;$getVar[color]]
$author[1;$userTag;$authorAvatar]
$description[1;**You are our $membersCountᵗʰ member!**
$customEmoji[e_stars] To read our rules, [click here](https://discord.com/channels/831498713624346634/831498713624346637).
$customEmoji[e_stars] To check out server giveawys, [click here](https://discord.com/channels/831498713624346634/831890416978755646).
$customEmoji[e_stars] To hop in server's chat, [click here](https://discord.com/channels/831498713624346634/831502859597119518).

> Your account was created on <t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:F> (<t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:R>)]
$image[1;https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/985044599384965140/1000592382452039691/1658630199715.jpg&text1=$replaceText[$userName; ;+]&text2=Welcome+To+Exodus.GG&text3=Enjoy+Your+Stay!&avatar=$replaceText[$authorAvatar;.webp;.png]]
`
}]