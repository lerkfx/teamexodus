module.exports = [{
name: "anime",
code: `
$sendMessage[{newEmbed: {color:$getVar[color]}{thumbnail:$getObjectProperty[data[0].attributes.posterImage.original]}{title:$replaceText[$replaceText[$checkCondition[$getObjectProperty[data[0].attributes.titles.en]==undefined];false;$getObjectProperty[data[0].attributes.titles.en]];true;$getObjectProperty[data[0].attributes.titles.ja_jp]] ($getObjectProperty[data[0].attributes.titles.en_jp]) | #$getObjectProperty[data[0].id]}{description:$customEmoji[e_stars] **__Synopsis:__** $getObjectProperty[data[0].attributes.synopsis]}{image:$getObjectProperty[data[0].attributes.coverImage.original]}{field:$customEmoji[e_heart] Average Rating#COLON#:$getObjectProperty[data[0].attributes.averageRating]:yes}{field:$customEmoji[e_heart] Episodes#COLON#:$getObjectProperty[data[0].attributes.episodeCount]:yes}{field:$customEmoji[e_heart] Youtube Trailer#COLON#:[Click Here](https://www.youtube.com/watch?v=$getObjectProperty[data[0].attributes.youtubeVideoId]):yes}{field:$customEmoji[e_heart] Rating Rank#COLON#:#$getObjectProperty[data[0].attributes.ratingRank]:yes}{field:$customEmoji[e_heart] Popularity Rank#COLON#:#$getObjectProperty[data[0].attributes.popularityRank]:yes}}]

$createObject[$jsonRequest[https://kitsu.io/api/edge/anime?filter[text]=$message]]
$onlyIf[$message!=;{newEmbed:{color:RED}{description:Please enter a valid anime!}}]


$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]

`
}]