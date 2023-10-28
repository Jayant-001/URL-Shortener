import { URL } from "@/models/URL";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await URL.deleteMany();
        const allKeys = await redis.keys("*");
        await redis.del(allKeys);

        return NextResponse.json(
            { message: "Database cleared" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
