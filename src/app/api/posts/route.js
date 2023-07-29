import { NextResponse } from "next/server";
import connect from "@/utils/db";

export const GET = (request) => {
    return new NextResponse("It works", { status: 200 });
};
