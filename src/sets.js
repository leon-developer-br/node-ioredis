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


/*
    sadd - include a member on set
    smembers - get all members on set
    srem - remove a member
    sismember - verify if a member is part of a set
*/