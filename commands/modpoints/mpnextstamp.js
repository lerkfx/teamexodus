module.exports = [{
name: "mpnextstamp",
code: `

$setServerVar[mpstamp;$noMentionMessage]

$description[1;Datestamp of next modpoints reset is now \`$noMentionMessage\`! Reset will take place on <t:$noMentionMessage:F> (<t:$noMentionMessage:R>)]
$footer[1;Executed By $userTag;$authorAvatar]
$author[1;Exodus MP System;$serverIcon]
$color[1;$getVar[color]]

$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed: {color:$getVar[color]}{description:\`$noMentionMessage\` is not a number!}}]

$onlyIf[$noMentionMessage!=;{newEmbed:{color:$getVar[color]}{description:**Usage:** \`$getServerVar[prefix]mpnextstamp <no>\`
**Example:** \`$getServerVar[prefix]mpnextstamp <no>\`
**Description:** This command allows the MP Admin to set the next reset timestamp.}}]

$onlyIf[$getUserVar[ismpadmin]==true;{newEmbed:{color:$getVar[color]}{description:❌ You are not an **MP Admin**!}}]
`
}]