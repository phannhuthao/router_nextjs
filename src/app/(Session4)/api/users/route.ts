import { NextResponse } from 'next/server'
import fs from 'fs';
export async function GET() {
    const users  = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    return NextResponse.json(users);
}


export async function POST(request: Request) {
    const data = await request.json();
    let users  = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    let newUser = {
        ...data,
        id: users.length + 1
    }
    users.push(newUser);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    return NextResponse.json(newUser);
}