module.exports = [{
name: "cuddle",
code: `
$description[1;**__<@$authorID> cuddled with <@$findUser[$message]>__**]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/cuddle]]
`
}]