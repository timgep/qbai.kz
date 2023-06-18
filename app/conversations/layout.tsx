import ConversationList from "@/components/ConversationList";
import SidebarUsers from "@/components/SideBarUsers/SidebarUsers";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";


interface Props {
    children?: React.ReactNode;
}


export default async function ConversationsLayout({children}: Props){
    const conversations = await getConversations();
    const users = await getUsers();
    return (
        //@ts-expect-error Server Component
        <SidebarUsers>
            <div className="h-full">
                <ConversationList users={users} initialItems={conversations}/>
                {children}
            </div>
        </SidebarUsers>
    )
}