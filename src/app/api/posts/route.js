import { NextResponse } from "next/server"

export const GET = async (request) => {
    // fetch
    return new NextResponse("Its works", { status: 200 });
}