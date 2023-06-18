import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

interface Props {
    params:{
        conversationId?: string;
    }
}

export async function DELETE(request: Request, {params:{conversationId}}: Props){
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id || !currentUser?.email){
            return new NextResponse("Не зарегистрированы", { status: 401});
        }

        const existingConversation = await prisma.conversation.findUnique({
            where:{
                id: conversationId
            },
            include: {
                users: true
            }
        });

        if (!existingConversation){
            return new NextResponse("Неверный ID чата", { status: 400});
        }

        const deletedConversation = await prisma.conversation.deleteMany({
            where:{
                id: conversationId,
                userIds: {
                    hasSome: [currentUser.id]
                }
            }
        });

        existingConversation.users.forEach((user) => {
            if (user.email){
                pusherServer.trigger(user.email, 'conversation:remove', existingConversation);
            }
        })

        return NextResponse.json(deletedConversation);


    } catch (error: any) {
        console.log(error, 'ERROR_CONVERSATION_DELETE');
        return new NextResponse("Внутренняя ошибка", { status: 500 });

    }
}