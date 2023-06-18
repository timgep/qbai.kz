'use client';

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import ModalUser from "./ModalUser";
import {FiAlertTriangle} from "react-icons/fi"
import { Dialog } from "@headlessui/react"
import Button from "./Button";



interface Props {
    isOpen?: boolean;
    onClose: () => void;
}

export default function ConfirmModal ({isOpen, onClose}: Props) {
    const router = useRouter();
    const { conversationId } = useConversation();
    const [loading, setLoading] = useState(false);

    const onDelete = useCallback(() => {
        setLoading(true);
        axios.delete(`/api/conversations/${conversationId}`)
        .then(() => {
            onClose();
            router.push('/conversations');
            router.refresh();
        })
        .catch(() => toast.error('Что то пошло не так'))
        .finally(() => setLoading(false))
    }, [conversationId, router, onClose]);
    return (
        <ModalUser isOpen={isOpen} onClose={onClose}>
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FiAlertTriangle className="h-6 w-6 text-red-600"/>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3"
                        className="
                            text-base
                            font-semibold
                            leading-6
                            text-gray-900"
                    >
                        Удалить чат
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Вы уверены что хотите удалить этот чат? Это действие не может быть отменено.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <Button
                    disabled={loading}
                    danger
                    onClick={onDelete}
                >
                    Удалить
                </Button>
                <Button
                    disabled={loading}
                    secondary
                    onClick={onClose}
                >
                    Отмена
                </Button>
            </div>
        </ModalUser>
    );
};
