module.exports = [{
name: "think",
code: `
$image[1;$get[original]]

$let[original;https://thionder.sirv.com/flixthinking.png?text.0.text=$get[text]&text.0.position.x=-38%25&text.0.position.y=-61%25&text.0.size=57&text.0.color=ce1d1d&text.0.font.family=Martel&text.0.background.color=ff0000]

$let[text;$replaceText[$replaceText[$message; ;+];
;%0a]]
`
}]