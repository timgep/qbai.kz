import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const body = await request.json();
        const {
            email,
            name,
            surname,
            phone,
            password
        } = body;

        if (!email || !name || !phone || !password){
            return new NextResponse('Не хватает данных для регистрации', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                surname,
                phone,
                hashedPassword
            }
        });

        

        return NextResponse.json(user);
    } catch (error: any){
        console.log(error, 'REGISTRATION ERROR');
        return new NextResponse('Ошибка при регистрации', { status: 500});
    }
}