module.exports = [{
name: "bully",
code: `
$description[1;**__<@$authorID> bullied <@$findUser[$message]>__**]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/bully]]



`
}]