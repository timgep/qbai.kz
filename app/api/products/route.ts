import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request){
    const {method} = request
    if (method === 'POST'){
        try{
            const body = await request.json();
            const {
                title,
                description,
                price,
            } = body;

            if (!title || !description || !price){
                return new NextResponse('Missing info', { status: 400 });
            }

            const product = await prisma.product.create({
                data: {
                    title,
                    description,
                    price
                }
            });

            return NextResponse.json(product);
        } catch (error: any){
            console.log(error, 'PRODUCT ADDITION ERROR');
            return new NextResponse('Internal Error', { status: 500});
        }
    }
    
}