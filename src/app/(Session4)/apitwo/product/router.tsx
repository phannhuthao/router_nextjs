import { NextResponse } from 'next/server'
import fs from 'fs';
export async function GET() {
    const product  = JSON.parse(fs.readFileSync("./product.json", "utf-8"));
    return NextResponse.json(product);
}


export async function POST(request: Request) {
    const data = await request.json();
    let product  = JSON.parse(fs.readFileSync("./product.json", "utf-8"));
    let newProduct = {
        ...data,
        id: product.length + 1
    }
    product.push(newProduct);
    fs.writeFileSync("./product.json", JSON.stringify(product));
    return NextResponse.json(newProduct);
}