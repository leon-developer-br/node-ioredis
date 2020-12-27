const Redis = require("ioredis");
const redis = new Redis();

async function run() {
    await redis.sadd("array", ["ana", "bia", "carla", "carla"]);
    let r = await redis.smembers("array");
    console.log(r);
    
    await redis.srem("array", "bia");
    r = await redis.smembers("array");
    console.log(r);
    
    console.log(await redis.sismember("array", "anaa"));
}

run();