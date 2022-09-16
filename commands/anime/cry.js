module.exports = [{
name: "cry",
code: `
$description[1;**__<@$authorID> cried!__**]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/cry]]



`
}]