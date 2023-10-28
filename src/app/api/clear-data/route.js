import { NextResponse } from "next/server"


export const GET = async (req) => {

    try {

        

        // console.log(key)

        // const allKeys = await redis.keys('*');
        // // const data = await redis.mget(allKeys);

        // console.log(allKeys)

        // // const data = await redis.del(allKeys)
        // // console.log(data);
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}