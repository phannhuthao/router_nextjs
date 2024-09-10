import { NextResponse } from "next/server";
import fs from 'fs'
interface RequestPath {
    params: {
        userId: number
    }
}

export async function GET(request: Request) {
    try {
        let users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
        const url = new URL(request.url);
        const name = url.searchParams.get('name');

        if (name) {
            const filteredUsers = users.filter((user: any) => user.name.toLowerCase().includes(name.toLowerCase()));
            if (filteredUsers.length === 0) {
                return NextResponse.json({ message: "No users found with the specified name" }, { status: 404 });
            }
            return NextResponse.json(filteredUsers);
        } else {
            const userId = url.searchParams.get('userId');
            if (userId) {
                const user = users.find((user: any) => user.id === parseInt(userId));
                if (!user) {
                    return NextResponse.json({ message: "User not found" }, { status: 404 });
                }
                return NextResponse.json(user);
            } else {
                return NextResponse.json(users);
            }
        }
    } catch (error) {
        return NextResponse.json({ message: "Error reading users file" }, { status: 500 });
    }
}

export async function POST(request: Request, path: RequestPath) {
    const data = await request.json();
    let users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    let newUser = {
        ...data,
        id: users.length + 1
    }
    users.push(newUser);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    return NextResponse.json(newUser)
}

export async function PUT(request: Request, path: RequestPath) {
    let users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    let userIndex = users.findIndex((user: any) => user.id === path.params.userId);
    
    if (userIndex === -1) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    let body = await request.json();
    users[userIndex] = {
        ...users[userIndex],
        ...body
    };
    fs.writeFileSync("./users.json", JSON.stringify(users));
    return NextResponse.json({
        message: "Cập nhật thông tin người dùng thành công",
        user: users[userIndex]
    });
}



export async function DELETE(request: Request, path: RequestPath) {
    let users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    users = users.filter((user: any) => user.id != path.params.userId)
    fs.writeFileSync("./users.json", JSON.stringify(users))
    return NextResponse.json("Xóa thành công")
}


export async function PATCH(request: Request, path: RequestPath) {
    let users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    let userIndex = users.findIndex((user: any) => user.id == path.params.userId)
    if(userIndex == -1) {
        return NextResponse.json({message: "User not found"}, {status: 404})
    }
    let body = await request.json();
    users[userIndex] = {
        ...users[userIndex],
        ...body
    }
    fs.writeFileSync("./users.json", JSON.stringify(users))
    return NextResponse.json(users[userIndex])
}