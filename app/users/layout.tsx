import SidebarUsers from "@/components/SideBarUsers/SidebarUsers";
import getUsers from "../actions/getUsers";
import UserList from "@/components/UserList";

interface Props {
    children?: React.ReactNode;
}

export default async function UsersLayout({children}: Props){
    const users = await getUsers();
    return (
        // @ts-expect-error Server Component
        <SidebarUsers>
            <div className="h-full">
                <UserList items={users}/>
                {children}
            </div>
        </SidebarUsers>
    )
}