module.exports = [{
name: "gameroles",
code: `
$addButton[1;;secondary;selfrole_cod;no;<:cod:1002970697888436335>]
$addButton[1;;primary;selfrole_apex;no;<:apex:1002968657632165918>]
$addButton[1;;success;selfrole_minecraft;no;<:minecraft:1002967188564611143>]
$addButton[1;;danger;selfrole_valorant;no;<:valorant:1002966244615528598>]
$description[1;$customEmoji[e_stars] **__Game Roles:__**
> $customEmoji[valorant] - <@&930686882168320000>
> $customEmoji[minecraft] - <@&1003230248546074684>
> $customEmoji[apex] - <@&1003230424069324810>
> $customEmoji[cod] - <@&1003230456298344519>]
$color[1;$getVar[color]]
$wait[1s]
$onlyForIDs[$botOwnerID;]
`
}, {
name: "selfrole_valorant",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;930686882168320000]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&930686882168320000> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;930686882168320000]==true;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_valorant",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;930686882168320000]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&930686882168320000> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;930686882168320000]==false;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_minecraft",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003230248546074684]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003230248546074684> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003230248546074684]==true;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_minecraft",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003230248546074684]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003230248546074684> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003230248546074684]==false;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_apex",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003230424069324810]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003230424069324810> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003230424069324810]==true;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_apex",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003230424069324810]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003230424069324810> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003230424069324810]==false;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_cod",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003230456298344519]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003230456298344519> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003230456298344519]==true;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}, {
name: "selfrole_cod",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003230456298344519]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003230456298344519> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003230456298344519]==false;]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`}
]