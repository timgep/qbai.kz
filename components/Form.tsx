'use client'

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { useForm, FieldValues, SubmitHandler} from 'react-hook-form'
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./inputs/MessageInput";
import { CldUploadButton } from "next-cloudinary";

interface Props {
    children?: React.ReactNode;
}

export default function Form ({children}: Props) {
    const { conversationId } = useConversation();

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/messages', {
            ...data,
            conversationId: conversationId
        })
        useForm<FieldValues>({
            defaultValues: {
                message: ''
            }
        });
    }

    const handleUpload = (result: any) => {
        axios.post('/api/messages', {
            image: result?.info?.secure_url,
            conversationId: conversationId
        })
    }

    return (
        <div className='py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full'>
            <CldUploadButton
                options={{ maxFiles: 1 }}
                onUpload={handleUpload}
                uploadPreset="gnf5iob0"
            >
                <HiPhoto size={30} className="text-sky-500"/>
            </CldUploadButton>
            
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-2 lg:gap-4 w-full"
            >
                <MessageInput
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    placeholder="Напишите сообщение"
                />
                <button type="submit"
                    className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
                >
                    <HiPaperAirplane size={18} className="text-white"/>
                </button>
            </form>

        </div>
    );
};
