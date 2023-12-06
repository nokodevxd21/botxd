const { token } = require("./src/config.js");
const { ShardingManager } = require("discord.js");

const manager = new ShardingManager("./index.js", {
  respawn: true,
  autoSpawn: true,
  token: token,
  totalShards: 1,
  shardList: "auto",
});

manager
  .spawn({ amount: manager.totalShards, delay: null, timeout: -1 })
  .then((shards) => {
    console.log(`MADE BY TRAGIC | [CLIENT] ${shards.size} shard(s) spawned.`);
  })
  .catch((err) => {
    console.log("MADE BY TRAGIC | [CLIENT] An error has occurred :", err);
  });

manager.on("shardCreate", (shard) => {
  shard.on("ready", () => {
    console.log(`MADE BY TRAGIC | [CLIENT] Shard ${shard.id} connected to Discord's Gateway.`);
  });
});