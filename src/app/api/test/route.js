import redis from "@/utils/redis";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const keys = await redis.keys("*");

        return NextResponse.json({ keys, cache_data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
