'use client';

import Image from "next/image";
import ModalUser from "./ModalUser";


interface Props {
    src?: string | null
    isOpen?: boolean;
    onClose: () => void;
}

export default function ImageModal ({src, isOpen, onClose}: Props) {
    if (!src) {return null};
    return (
        <ModalUser isOpen={isOpen} onClose={onClose}>
            <div className="w-80 h-80">
                <Image src={src} alt="Image" className="object-cover" fill/>
            </div>
        </ModalUser>
    );
};
