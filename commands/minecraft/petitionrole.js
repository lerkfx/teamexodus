module.exports = [{
name: "petitionrole",
$if: "v4",
code: `
$color[1;$getVar[color]]
$if[$hasRoles[$guildID;$authorID;1008044244965003316]==true]
$takeRole[$guildID;$authorID;1008044244965003316]
$description[1;Revoked <@&1008044244965003316>!]
$endif


$if[$hasRoles[$guildID;$authorID;1008044244965003316]==false]
$giveRole[$guildID;$authorID;1008044244965003316]
$description[1;Granted <@&1008044244965003316>!]
$endif
$reply[$messageID;no]


`
}]