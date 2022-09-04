module.exports = [{
name: "anime",
code: `
$sendMessage[{newEmbed: {color:$getVar[color]}{thumbnail:$getObjectProperty[data[0].attributes.posterImage.original]}{title:$getObjectProperty[data[0].attributes.titles.en] ($getObjectProperty[data[0].attributes.titles.en_jp]) | #$getObjectProperty[data[0].id]}{description:$customEmoji[e_stars] **__Synopsis:__** $getObjectProperty[data[0].attributes.synopsis]}{image:$getObjectProperty[data[0].attributes.coverImage.original]}{field:$customEmoji[e_heart] Average Rating#COLON#:$getObjectProperty[data[0].attributes.averageRating]:yes}{field:$customEmoji[e_heart] Episodes#COLON#:$getObjectProperty[data[0].attributes.episodeCount]:yes}{field:$customEmoji[e_heart] Youtube Trailer#COLON#:[Click Here](https://www.youtube.com/watch?v=$getObjectProperty[data[0].attributes.youtubeVideoId]):yes}{field:$customEmoji[e_heart] Rating Rank#COLON#:#$getObjectProperty[data[0].attributes.ratingRank]:yes}{field:$customEmoji[e_heart] Popularity Rank#COLON#:#$getObjectProperty[data[0].attributes.popularityRank]:yes}}]

$createObject[$jsonRequest[https://kitsu.io/api/edge/anime?filter[text]=$message]]
$onlyIf[$message!=;{newEmbed:{color:RED}{description:Please enter a valid anime!}}]

`
}]