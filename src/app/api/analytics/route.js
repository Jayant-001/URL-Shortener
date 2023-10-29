import { URL } from "@/models/URL";
import connectToDB from "@/utils/mongo";
import { NextResponse } from "next/server";

connectToDB();

export const POST = async (req) => {
    try {
        const { key } = await req.json();

        const urlDetails = await URL.findOne({
            shortId: key,
        });

        return NextResponse.json({ analytics: urlDetails }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
