module.exports = [{
name: "changelog",
code: `
$image[1;$getVar[botbanner]]
$color[1;$getVar[color]]
$color[2;$getVar[color]]
$title[2;Bot Changelog @v1.1.5;https://www.youtube.com/watch?v=V6vt_el0Svo]
$description[2;$customEmoji[e_heart] **General Changes**
> ● Aoi.js package version is updated from \`5.2.0\` to \`5.5.5\`.
> ● Removed Competing in Valorant Tourney status!
> ● Removed  Playing VALORANT status!
> ● Removed  Playing Apex Legends status!
> ● Added Listening to +help status!
> ● Added Listening to Lerk#7475 status!
> ● Archived <#850355675334574098>.

$customEmoji[e_heart] **Selfroles are here!**
> ● You can obtain any self roles from <#831505800635351100>.
> ● Click once to obtain it, click again to remove it.
> ● By obtaining the __Game roles__, you can access specific channels!

> _Game Roles:_
> 『 <@&930686882168320000> 』↦ _<#1003823234405372095>, <#1003823117635944601>_
> 『 <@&1003230248546074684> 』↦ _<#1003823336251457627>, <#1003822642526167142>, <#1003976184599674950>, <#1005680980075487262>_
> 『 <@&1003230424069324810> 』↦ _<#1003823001189482608>_
> 『 <@&1003230456298344519> 』↦ _<#1003822871707123843>_
]
$description[3;
$customEmoji[e_heart] **Welcome images are here!**
> ● Now, whenever someone joins Exodus.GG, a welcome image will be sent in <#831498713624346636>.
> ● Background for the image can be found [here](https://cdn.discordapp.com/attachments/985044599384965140/1000592382452039691/1658630199715.jpg).

]
$color[3;$getVar[color]
$image[4;$getVar[botbanner]]
$color[4;$getVar[color]]

$onlyForIDs[$botOwnerID;:P]`
}]