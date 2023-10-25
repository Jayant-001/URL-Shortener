import { Redis } from "ioredis";

const URL = process.env.REDIS_URL
const redis = new Redis(URL)

export default redis;
