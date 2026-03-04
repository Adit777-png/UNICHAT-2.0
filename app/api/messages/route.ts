import getCurrentUsers from "@/app/actions/getCurrentUsers";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export async function POST(
    request:Request
) {
   try {
    const currentUser = await getCurrentUsers();
    const body = await request.json();
    const {
        message,
        image,
        conversationId
    }= body

        if (!conversationId) {
        return new NextResponse('ConversationId missing', { status: 400 });
        }

    if (!message && !image) {
        return new NextResponse('Message or image required', { status: 400 });
    }

    if(!currentUser?.id || !currentUser.email){
        return new NextResponse('Unauthorized', {status:401});
    }

    const newMessage = await prisma.message.create({
        data: {
            body: message || null,
            image: image || null,
            conversationId: conversationId,
            senderId: currentUser.id,
            seenIds: [currentUser.id],
        },
        include: {
            seen: true,
            sender: true,
        }
        });

    const updatedConversation = await prisma.conversation.update({
        where: { id: conversationId },
        data: {
            lastMessageAt: new Date(),
            messagesIds: {
            push: newMessage.id
            }
        }
        });

    return NextResponse.json(newMessage);

   } catch (error:any) {
    console.log(error,'ERROR_MESSAGES');
    return new NextResponse('InternalError' , {status:500});
   } 
}