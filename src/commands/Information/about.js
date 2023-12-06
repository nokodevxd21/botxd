const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "about",
  category: "Information",
  aliases: ["addme"],
  description: "Get the about me.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    var support = client.config.links.support;
    var invite = client.config.links.invite;
    var votetopgg = client.config.links.votetopgg;

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setEmoji("<:invitelrmn:1175006182834970655>")
          .setStyle(ButtonStyle.Link)
          .setURL(invite),
        new ButtonBuilder()
          .setLabel("Support")
          .setEmoji("<:supportlrmn:1175006362862882826>")
          .setStyle(ButtonStyle.Link)
          .setURL(support),
        new ButtonBuilder()
          .setLabel("Vote")
          .setEmoji("<:votelrmn:1175006166082928691>")
          .setStyle(ButtonStyle.Link)
          .setURL(votetopgg)
      );

    const madebytragic = new EmbedBuilder()
      .setAuthor({
        name: `${client.user.username} About`,
        url: `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`,
        iconURL: client.user.displayAvatarURL({ dynamic: true })
      })
      .setColor(client.embedColor)
      .addFields([
        { name: 'Developer(s)', value: '**[L RMN](https://discord.com/users/742457036914294855)**', inline: true },
        { name: 'Team(s)', value: '**[Made by TRAGIC](https://discord.gg/2pkvB82NaS)**', inline: true },
        { name: 'Donate(s)', value: '**[Trakteer.id](https://trakteer.id/romanromannya)**', inline: true },
      ])
      .setFooter({
        text: `Hi, My Work is to play Music. \nYou can check every command by /help.I am developed in JavaScript`,
      });

    message.reply({ embeds: [madebytragic], components: [row] });
  }
};
