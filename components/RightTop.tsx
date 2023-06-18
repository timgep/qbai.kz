'use client';

import { User } from "@prisma/client";

import { MdLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Avatar from "./Avatar";
import SettingsModal from "./SettingsModal";


interface Props {
    currentUser: User;
}

export default function RightTop ({currentUser}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <SettingsModal
                currentUser={currentUser!}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div className="top">
                <button id="menu-btn">
                    <span><AiOutlineMenu/></span>
                </button>
                <div className="background: var(--color-light) theme-toggler">
                    <span className="active"><MdLightMode/></span>
                    <span><MdDarkMode/></span>
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Мир тебе, <b>{currentUser?.name}</b></p>
                        <small className="text-muted">Администратор</small>
                    </div>
                    {/*<div className="profile-photo" >*/}
                    <div onClick={() => setIsOpen(true)} className="cursor-pointer hover:opacity-75 transition">
                        <Avatar user={currentUser!}/>
                        {/*<Image src={session?.data?.user?.image ? session?.data?.user?.image : "/images/profile-1.jpg"} alt="profile-photo" width={45} height={45}/>*/}
                    </div>
                </div>
            </div>
        </>
    );
};
