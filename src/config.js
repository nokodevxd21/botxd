require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || ".",  // your bot token
    clientID: process.env.CLIENT_ID || "1133311579782385774", // your bot client id
    prefix: process.env.PREFIX || "dei", // bot prefix
    ownerID: ["742457036914294855"], //your discord id
    SpotifyID: "fdf0e2d1da9e40169b5918f73addae04", // spotify id
    SpotifySecret: "db0fa34ff766490e87e9996c0ae844e0", // spotify secret
    mongourl: "mongodb+srv://lrmn123:lrmn123@cluster0.qu1qgkv.mongodb.net/dei?retryWrites=true&w=majority", // MongoDb URL
    embedColor: 'f9a2b0', // embed colour4
    logs: "123456789", // channel id for guild create and delete logs
    errorLogsChannel: "123456789", //error logs channel id
    ratelimitlog: "123456789", // ratelimit log
    removelog: "123456789", // server remove log
    SearchPlatform: process.env.SEARCH_PLATFORM || "youtube music", // Sets the Search Platform. Possibilities: youtube || youtube music || soundcloud 
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube music", // Sets the order of Slash command's AutoComplete results
    links: {
        img: process.env.IMG || 'https://cdn.is-a.fun/dei/dei.gif', 
        support: process.env.SUPPORT || 'https://discord.gg/2pkvB82NaS', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1133311579782385774&permissions=551940516976&scope=bot%20applications.commands', //bot invite link
        votetopgg: process.env.VOTE_TOPGG || 'https://top.gg/bot/1133311579782385774', //bot topgg link
        website: process.env.WEBSITE || 'https://dei.is-a.fun/', //bot website link
        topggToken: process.env.TOPGG_TOKEN || 'l-HCZdRlBbcmgB9CVU5DAnyjotOx7kJ5ZtRtrtEiUi0', // topgg token
    }, 
Webhooks: {
      player_create: 'https://discord.com/api/webhooks/123456789/ag-PRQ9LAgeX-fgdfdfgdfgdfgdfg', // Webhook url 
      player_delete: 'https://discord.com/api/webhooks/123456789/fdfgfdgfgfgdfdg-bS_QksD0YuDpLDp79gLhA0l-51i4J', // Webhook url
      server_add: 'https://discord.com/api/webhooks/12345678/dfggdfgdfdffgdfg-b4TOl2EhhfN6SjSiLhDvCFOLx_pXBw6a62DlfQl2x4', // Webhook url
    },
    nodes: [
         {
            host: process.env.NODE_HOST || "123.456.78.910",
            port: parseInt(process.env.NODE_PORT || "2333"),
            password: process.env.NODE_PASSWORD || "lrmn",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],
}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}