import Redis from 'redis'
import Bluebird from 'bluebird'
Bluebird.promisifyAll(Redis.RedisClient.prototype);
Bluebird.promisifyAll(Redis.Multi.prototype);

export default function connectRedis() {
    const redisUri = process.env.REDIS_URI || 'redis://localhost:6379'
    console.log(`Connecting to redis at ${redisUri}`)
    return Redis.createClient({
        url: redisUri,
    })
}