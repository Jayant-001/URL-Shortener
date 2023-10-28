import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import redis from "@/utils/redis";
import { NextResponse } from "next/server";

connectToDB();

export const GET = async (req, { params }) => {
    try {
        const { shortId } = await params;

        const url = await URL.findOneAndUpdate(
            {
                shortId,
            },
            {
                $push: {
                    visitedHistory: {
                        timeStamp: Date.now(),
                    },
                },
            }
        );

        if (!url) {
            return NextResponse.json(
                { error: "Invalid shortId" },
                { status: 404 }
            );
        }

        const cache_value = await redis.get("short-url:" + shortId);

        if (cache_value) {
            return NextResponse.redirect(cache_value);
        }

        return NextResponse.redirect(url.redirectURL);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 200 });
    }
};
