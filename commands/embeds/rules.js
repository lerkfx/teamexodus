module.exports = [{
name: "rules",
code: `
$addReactions[✅]
$author[1;Exodus.GG;$getVar[botpfp]]
$description[1;$customEmoji[e_stars] **〉 Do not harass others or organize, promote, or participate in harassment.**
> Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay.
$customEmoji[e_stars] **〉 Do not organize, promote, or participate in hate speech or hateful conduct.**
> It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications.
$customEmoji[e_stars] **〉 Do not make threats of violence or threaten to harm others.**
> This includes indirect or suggestive threats, as well as sharing or threatening to share someone’s personally identifiable information (also known as doxxing).
$customEmoji[e_stars] **〉 Do not coordinate or participate in malicious impersonation of an individual or an organization.**
> Satire and parody are okay.
$customEmoji[e_stars] **〉 Do not distribute or provide access to content involving the hacking, cracking, or distribution of stolen goods, pirated content, or accounts.**
> This includes sharing or selling game cheats or hacks.
$customEmoji[e_stars] **〉 Do not use self-bots or user-bots.**
Each account must be associated with a human, not a bot. Self-bots put strain on Discord’s infrastructure and our ability to run our services. For more information, you can read our Developer Policies [here](https://discord.com/developers/docs/policy).
$customEmoji[e_stars] **〉 Nicknames and offensive reactions should not be used.**
> This includes, hateful hashtags, inappropriate reactions as well as NSFW reactions.
$customEmoji[e_stars] **〉 Only @mention the moderators for support.**
> Mentioning <@&884706092075065345> or even individual pings without any reason will result in a warn.
$customEmoji[e_stars] **〉 Value @everyone's privacy, Dont leak personal DMs, pictures, social media handles, names, etc without permission.**
> If found guilty, you may recieve a warning. Avoid this behaviour and value everyone's privacy!]
$color[1;$getVar[color]]
$image[1;$getVar[botbanner]]
$footer[1;©️ Exodus.GG 2022 - All rights reserved.;$getVar[botpfp]]
$useChannel[831498713624346637]
$onlyForIDs[$botOwnerID;]
`
}]