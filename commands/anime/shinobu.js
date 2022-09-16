module.exports = [{
name: "shinobu",
code: `
$title[1;Found one! 💛]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/shinobu]]



`
}]