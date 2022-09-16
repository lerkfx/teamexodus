module.exports = [{
name: "extraroles",
code: `
$addButton[1;;secondary;selfrole_partner;no;<a:blackstars:1005501500811923499>]
$addButton[1;;primary;selfrole_job;no;<a:bluestars:1005439216173453312>]
$addButton[1;;success;selfrole_chat;no;<a:greenstars:1005439213514276964>]
$addButton[1;;danger;selfrole_mp;no;<a:redstars:1005439219122061332>]
$description[1;$customEmoji[e_stars] **__Extra Roles:__**
> $customEmoji[redstars] - <@&1003260562987307108>
> $customEmoji[greenstars] - <@&933972741231616020>
> $customEmoji[bluestars] - <@&1003689196474617996>
> $customEmoji[blackstars] - <@&849144739109404702>]
$color[1;$getVar[color]]
$wait[1s]
$onlyForIDs[$botOwnerID;]
`
}, {
name: "selfrole_partner",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;849144739109404702]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&849144739109404702> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;849144739109404702]==true;]


`}, {
name: "selfrole_partner",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;849144739109404702]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&849144739109404702> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;849144739109404702]==false;]


`}, {
name: "selfrole_job",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003689196474617996]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003689196474617996> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003689196474617996]==true;]


`}, {
name: "selfrole_job",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003689196474617996]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003689196474617996> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003689196474617996]==false;]


`}, {
name: "selfrole_chat",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;933972741231616020]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&933972741231616020> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;933972741231616020]==true;]

`}, {
name: "selfrole_chat",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;933972741231616020]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&933972741231616020> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;933972741231616020]==false;]

`}, {
name: "selfrole_mp",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003260562987307108]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003260562987307108> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003260562987307108]==true;]

`}, {
name: "selfrole_mp",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003260562987307108]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003260562987307108> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003260562987307108]==false;]

`}]