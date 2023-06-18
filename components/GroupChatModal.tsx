'use client';

import { useRouter } from "next/navigation";
import ModalUser from "./ModalUser";
import { User } from "@prisma/client"
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import Input from "./inputs/Input";
import SelectUser from "./SelectUser";
import Button from "./Button";


interface Props {
    users: User[],
    isOpen?: boolean,
    onClose: () => void,
}

export default function GroupChatModal ({users, isOpen, onClose}: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            members: []
        }
    });

    const members = watch('members');

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);

        axios.post('/api/conversations', {
            ...data,
            isGroup: true
        })
        .then(() => {
            router.refresh();
            onClose();
        })
        .catch(() => toast.error("Что то пошло не так!"))
        .finally(() => setLoading(false));

    }

    return (
        <ModalUser isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Создать групповой чат
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Создать чат с больше чем 2мя участниками
                        </p>
                        <div className="mt-10 flex flex-col gap-y-8">
                            <Input
                                register={register}
                                label="Имя"
                                id="name"
                                required
                                errors={errors}
                                disabled={loading}/>
                            <SelectUser
                                disabled={loading}
                                label="Участники"
                                options={users.map((user) => ({
                                    value: user.id,
                                    label: user.name
                                }))}
                                onChange={(value) => setValue('members', value, {
                                    shouldValidate: true
                                })}
                                value={members}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button
                        disabled={loading}
                        onClick={onClose}
                        type="button"
                        secondary
                    >
                        Отмена
                    </Button>
                    <Button
                        disabled={loading}
                        type="submit"
                    >
                        Создать
                    </Button>
                </div>
            </form>
        </ModalUser>
    );
};
