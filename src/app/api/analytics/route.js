import { URL } from "@/models/URL";
import redis from "@/utils/redis";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {

        const {key} = await req.json();

        const urlDetails = await URL.findOne({
            shortId : key
        })

        return NextResponse.json({ analytics: urlDetails }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
