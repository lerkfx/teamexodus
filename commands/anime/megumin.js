module.exports = [{
name: "megumin",
code: `
$title[1;Here's your Megumin! 🧙‍♂️]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/megumin]]
`
}]