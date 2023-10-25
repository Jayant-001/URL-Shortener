import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {

        return NextResponse.json({ message: "Analytics route" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
