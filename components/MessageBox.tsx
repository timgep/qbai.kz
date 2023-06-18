"use client";

import { FullMessageType } from "@/app/types";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";


interface Props {
    data: FullMessageType,
    isLast?: boolean
}

export default function MessageBox ({data, isLast}: Props) {
    const session = useSession();
    const [imageModalOpen, setImageModalOpen] = useState(false);

    const isOwn = session?.data?.user?.email === data?.sender?.email;
    const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(', ');

    const container_clsx = clsx("flex gap-3 p-4", isOwn && "justify-end");

    const avatar_clsx = clsx(isOwn && "order-2");

    const body_clsx = clsx("flex flex-col gap-2", isOwn && "items-end");

    const body_internal_clsx = clsx("flex items-center gap-1");

    const body_internal_2_clsx = clsx("text-sm text-gray-500");

    const date_clsx = clsx("text-xs text-gray-400")

    const message_clsx = clsx("text-sm w-fit overlflow-hidden", isOwn ? "bg-sky-500 text-white" : "bg-gray-100", data.image ? "rounded-md p-0" : "rounded-full py-2 px-3");

    const seen_clsx = clsx("text-xs font-light text-gray-500")

    
    return (
        <div className={container_clsx}>
            <div className={avatar_clsx}>
                <Avatar user={data.sender}/>
            </div>
            <div className={body_clsx}>
                <div className={body_internal_clsx}>
                    <div className={body_internal_2_clsx}>
                        {data.sender.name}
                    </div>  
                    <div className={date_clsx}>
                        {format(new Date(data.createdAt), 'p')}
                    </div> 
                </div>
                <div className={message_clsx}>
                    <ImageModal
                        src={data.image}
                        isOpen={imageModalOpen}
                        onClose={() => setImageModalOpen(false)}
                    />
                    {data.image ? (
                        <Image alt="image" height="288" width="288" src={data.image}
                            className="object-cover cursor-pointer hover:scale-110 transition translate"
                            onClick={() => setImageModalOpen(true)}
                        />
                    ) : (
                        <div>{data.body}</div>
                    )}
                </div>
                {isLast && isOwn && seenList.length>0 && (
                    <div className={seen_clsx}>
                        {`Seen by ${seenList}`}
                    </div>
                )}
            </div>
        </div>
    );
};
