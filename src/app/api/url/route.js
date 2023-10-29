import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import redis from "@/utils/redis";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

connectToDB();

export const POST = async (req) => {
    try {
        const { url } = await req.json(); // extract url from request body

        // if url not found return -> bad request
        if (!url) {
            return NextResponse.json(
                { error: "URL is required" },
                { status: 400 }
            );
        }

        // check url in cache memory
        let cache_data = await redis.get("url:" + url);

        // if cache is available return cache to user
        if (cache_data) {
            return NextResponse.json(
                { shortenURL: JSON.parse(cache_data), cache_status: "hit" },
                { status: 200 }
            );
        }

        // generate a 8 characters shortId
        const shortId = nanoid(8);

        // create a document in mongo DB
        const shortenURL = await URL.create({
            shortId,
            redirectURL: url,
            visitHistory: [],
        });

        // store shorten URL in cache
        await redis.set("url:" + url, JSON.stringify(shortenURL));

        return NextResponse.json(
            { shortenURL, cache_status: "miss" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
