module.exports = [{
name: "waifu",
code: `
$title[1;Here's your waifu! 💖]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/waifu]]
`
}]