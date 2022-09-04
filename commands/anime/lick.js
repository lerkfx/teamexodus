module.exports = [{
name: "lick",
code: `
$description[1;**__<@$authorID> licked <@$findUser[$message]>__**]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/lick]]
`
}]