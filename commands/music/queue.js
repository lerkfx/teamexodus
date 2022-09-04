module.exports = [{
name: "queue",
aliases: ['q'],
code: `
$color[1;$getVar[color]]
$author[1;Exodus Music Player;$serverIcon]
$description[1;Queue has currently $queueLength track(s) queued!

$queue[1;1;$customEmoji[king;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[2;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[3;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[4;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[5;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[6;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[7;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[8;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[9;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]
$queue[10;1;$customEmoji[snowflake;$getVar[testserver]] **({position})** [{title}]({url})
$customEmoji[reply;$getVar[testserver]] Added by <@{user.id}>]

]


$onlyIf[$queueLength!=0;{newEmbed: {color:$getVar[color]}{description:❌ No track is currently queued!}}]
$onlyIf[$voiceId[$authorID]!=;{newEmbed: {color:$getVar[color]}{description:❌ You're not in a voice channel!}}]


`
}]