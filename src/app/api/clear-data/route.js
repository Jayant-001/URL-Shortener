import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import redis from "@/utils/redis";
import { NextResponse } from "next/server";

connectToDB();

export const GET = async (req) => {
    try {
        const allKeys = await redis.keys("*"); // find all keys from redis database

        if (allKeys.length > 0) {
            await redis.del(allKeys); // delete all keys from redis databse
        }

        await URL.deleteMany({}); // delete all url documents from mongoDB databse

        return NextResponse.json(
            { message: "Database cleared" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
