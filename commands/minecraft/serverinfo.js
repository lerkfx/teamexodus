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
`
}]