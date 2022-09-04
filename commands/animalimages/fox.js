module.exports = [{
name: "fox",
code: `


$description[1;$randomText[🦊] $getObjectProperty[fact]]
$color[1;$getVar[color]]
$image[1;$getObjectProperty[image]]
$createObject[$jsonRequest[https://some-random-api.ml/animal/fox]]
`
}]