import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import redis from "@/utils/redis";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

connectToDB();

export const POST = async (req) => {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json(
                { error: "URL is required" },
                { status: 400 }
            );
        }
        const shortId = nanoid(8);

        const shortenURL = await URL.create({
            shortId,
            redirectURL: url,
            visitHistory: [],
        });

        await redis.set(shortId, url);

        return NextResponse.json({ shortenURL }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
