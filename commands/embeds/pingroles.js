module.exports = [{
name: "pingroles",
code: `
$addButton[1;;secondary;selfrole_event;no;<:event:1003481479243907114>]
$addButton[1;;primary;selfrole_giveaway;no;<:giveaway:1003481841262674001>]
$addButton[1;;success;selfrole_bot;no;<:bot:1003481395395579904>]
$addButton[1;;danger;selfrole_announcement;no;<:announcement:1003481371227992114>]
$description[1;$customEmoji[e_stars] **__Ping Roles:__**
> $customEmoji[announcement] - <@&1003330415253274684>
> $customEmoji[bot] - <@&977153857866068038>
> $customEmoji[event] - <@&1003330533561995295>
> $customEmoji[giveaway] - <@&1003330671063871588>]
$color[1;$getVar[color]]
$onlyForIDs[$botOwnerID;]


`
}, {
name: "selfrole_announcement",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003330415253274684]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003330415253274684> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003330415253274684]==true;]


`}, {
name: "selfrole_announcement",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003330415253274684]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003330415253274684> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003330415253274684]==false;]


`}, {
name: "selfrole_bot",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;977153857866068038]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&977153857866068038> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;977153857866068038]==true;]


`}, {
name: "selfrole_bot",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;977153857866068038]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&977153857866068038> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;977153857866068038]==false;]


`}, {
name: "selfrole_giveaway",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003330671063871588]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003330671063871588> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003330671063871588]==true;]


`}, {
name: "selfrole_giveaway",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003330671063871588]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003330671063871588> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003330671063871588]==false;]


`}, {
name: "selfrole_event",
type: "interaction",
prototype: "button",
code: `
$takerole[831498713624346634;$authorID;1003330533561995295]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Removed <@&1003330533561995295> from <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003330533561995295]==true;]


`}, {
name: "selfrole_event",
type: "interaction",
prototype: "button",
code: `
$giverole[831498713624346634;$authorID;1003330533561995295]
$interactionReply[;{newEmbed:
{color:$getVar[color]}
{description:$customEmoji[e_stars] Added <@&1003330533561995295> to <@$authorID>}};;;;yes]
$onlyIf[$hasRoles[831498713624346634;$authorID;1003330533561995295]==false;]


`}
]