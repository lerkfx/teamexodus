module.exports = [{
name: "mcserver",
code: `


$color[1;$replaceText[$replaceText[$getObjectProperty[online];true;GREEN];false;RED]]

$onlyIf[$getObjectProperty[debug.cachetime]!=0;{newEmbed:
{color:RED}
{description:❌ **__Server not found!__**}
}]
$createObject[$jsonRequest[https://api.mcsrvstat.us/2/$message]]
$onlyIf[$message!=;{newEmbed:
{color:RED}
{description:❌ **__Enter a valid server URL!__**}
}]

$onlyIf[$getVar[limeban]==valid;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]