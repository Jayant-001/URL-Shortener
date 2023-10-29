import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import { NextResponse } from "next/server";

connectToDB();

export const POST = async (req) => {
    try {
        const { key } = await req.json(); // get key from request body

        // find shortId from Databse
        const urlDetails = await URL.findOne({
            shortId: key,
        });

        // send URL details to client
        return NextResponse.json({ analytics: urlDetails }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
