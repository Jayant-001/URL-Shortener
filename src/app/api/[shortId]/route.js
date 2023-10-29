import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import { NextResponse } from "next/server";

connectToDB();

export const GET = async (req, { params }) => {
    try {
        const { shortId } = await params; // extract shortId from URL

        // update visited History -> push current timeing into visited history of URL
        const url = await URL.findOneAndUpdate(
            {
                shortId, // find by shortID
            },
            {
                $push: {
                    visitedHistory: {
                        timeStamp: Date.now(),
                    },
                },
            }
        );

        // if can't get url -> Invalid URL
        if (!url) {
            return NextResponse.json(
                { error: "Invalid shortId" },
                { status: 404 }
            );
        }

        // redirect client to Original(long) URL
        return NextResponse.redirect(url.redirectURL);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 200 });
    }
};
