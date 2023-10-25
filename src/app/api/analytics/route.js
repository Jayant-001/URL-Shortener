import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {

        

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
