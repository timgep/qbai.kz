import getConversationById from "@/app/actions/getConversationByid";
import getMessages from "@/app/actions/getMessages";
import Body from "@/components/Body";
import EmptyState from "@/components/EmptyState";
import Form from "@/components/Form";
import HeaderUser from "@/components/HeaderUser";



interface Props {
    params:{
        conversationId: string;
    }
}

export default async function ConversationId ({params:{conversationId}}: Props) {
    const conversation = await getConversationById(conversationId);
    const messages = await getMessages(conversationId);


    if (!conversation){
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }
    return (
        <div className='lg:pl-80 h-full'>
            <div className="h-full flex flex-col">
                <HeaderUser conversation={conversation!} />
                <Body initialMessages={messages!}/>
                <Form />
            </div>
        </div>
    );
};

