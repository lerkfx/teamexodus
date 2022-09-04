module.exports = [{
name: "neko",
code: `
$title[1;Got one! 😸]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/neko]]
`
}]