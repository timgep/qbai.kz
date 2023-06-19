import {  useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';
import useConversation from './useConversation';

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId} = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: BsFillGrid1X2Fill,
            active: pathname === "/dashboard"
        },
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === "/conversations" || !!conversationId

        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === "/users"
        },
        {
            label: 'Logout',
            href: '#',
            icon: HiArrowLeftOnRectangle,
            onClick: () => signOut()
            
        }
    ], [pathname, conversationId]);

    return routes;
    
}

export default useRoutes;