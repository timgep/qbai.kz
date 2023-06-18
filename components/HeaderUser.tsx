'use client'

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import { useMemo, useState } from "react";
import Link from "next/link";
import {HiChevronLeft, HiEllipsisHorizontal} from 'react-icons/hi2'
import Avatar from "./Avatar";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "./AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";


interface Props {
    conversation: Conversation & {
        users: User[]
    }
}

const HeaderUser: React.FC<Props> = ({conversation}) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { members } = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;

    const statusText = useMemo(() => {
        if (conversation.isGroup){
            return `${conversation.users.length} members`
        }

        return isActive ? 'Онлайн' : "Оффлайн";
    }, [conversation, isActive]);

    const container_clsx = "bg-white w-full flex border-b-[1px] py-3 px-4 sm:px-4 lg:px-6 justify-between items-center shadow-sm"
    const internal_clsx = "flex gap-3 items-center"
    const link_clsx = "block lg:hidden text-sky-500 hover:text-sky-600 transition cursor-pointer"
    const options_clsx = "text-sky-500 cursor-pointer hover:text-sky-600 transition"

    return (
        <>
            <ProfileDrawer data={conversation} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
            <div className={container_clsx}>
                <div className={internal_clsx}>
                    <Link href="/conversations" className={link_clsx}>
                        <HiChevronLeft size={32}/>
                    </Link>
                    {conversation.isGroup ? (
                        <AvatarGroup users={conversation.users}/>
                    ) : (
                        <Avatar user={otherUser}/>
                    )}
                    
                    <div className="flex flex-col">
                        <div>
                            {conversation.name || otherUser.name}
                        </div>
                        <div className="text-sm font-light text-neutral-500">
                            {statusText}
                        </div>
                    </div>
                </div>
                <HiEllipsisHorizontal size={32} onClick={() => setDrawerOpen(true)} className={options_clsx}/>
            </div>

        </>
    );
};

export default HeaderUser;
