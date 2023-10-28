import { Redis } from "ioredis";

const URL = process.env.REDIS_URL
const redis = new Redis(URL) // create a new redis client

export default redis;
