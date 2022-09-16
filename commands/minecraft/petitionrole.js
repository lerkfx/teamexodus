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

$onlyIf[$guildID!=831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]

`
}]