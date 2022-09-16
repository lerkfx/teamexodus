module.exports = [{
name: "megumin",
code: `
$title[1;Here's your Megumin! 🧙‍♂️]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[url]]
$createObject[$jsonRequest[https://api.waifu.pics/sfw/megumin]]


$onlyIf[$getVar[limeban]==valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]