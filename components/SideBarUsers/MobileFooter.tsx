'use client'

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";


interface Props {
    children?: React.ReactNode;
}

const MobileFooter: React.FC<Props> = ({children}) => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen){
        return null;
    }

    return (
        <div className="
            fixed
            justify-between
            w-full
            bottom-0
            flex
            items-center
            bg-white
            border-t-[1px]
            z-10
        ">
            {routes.map((route) => (
                <MobileItem
                    key={route.href}
                    href={route.href}
                    active={route.active}
                    icon={route.icon}
                    onClick={route.onClick}
                />
            )
            )}
        </div>
    );
};

export default MobileFooter;
