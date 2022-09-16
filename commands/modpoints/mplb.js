module.exports = [{
name: "mpleaderboard",
aliases: ['mplb'],
description: "Displays the leaderboard for Mod Points",
usage: "mplb",
code: `
$editMessage[$get[id];{newEmbed:
{description:
$userLeaderboard[$guildID;mp;asc;$customEmoji[king;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;1]
$userLeaderboard[$guildID;mp;asc;$customEmoji[king;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;2]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;3]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;4]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;5]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;6]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;7]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;8]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;9]
$userLeaderboard[$guildID;mp;asc;$customEmoji[snowflake;$getVar[testserver]] **{username}** **↦** \`{value} MP\`;1;10]}
{image:$getVar[botbanner]}
{color:$getVar[color]}
{author:$serverName:$getVar[botpfp]}
}]
$let[id;$sendMessage[{newEmbed:
{description: $customEmoji[loading;$getVar[testserver]] **__Fetching users...__**}
{color:$getVar[color]}
};yes]]

$onlyIf[$guildID==831498713624346634;{newEmbed: {color:RED}{description:$randomText[itna time lagwa ke banner, color scheme, emojis, pfp, commands banwai. agar ijjat nhi toh commands bhi nhi.;jake lime se run karwana command ab;bhak;aur karo ashey ban ho gya lmao xd;bhag jo]}}]
`
}]