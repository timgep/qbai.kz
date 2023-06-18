'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    id: string,
    register: UseFormRegister<FieldValues>,
    type?: string,
    required?: boolean,
    placeholder?: string,
    errors: FieldErrors
}

export default function MessageInput ({
    id,
    register,
    type,
    required,
    placeholder,
    errors,
}: Props) {

    return (
        <div className='relative w-full'>
            <input
                id={id}
                type={type}
                autoComplete={id}
                {... register(id, { required })}
                placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
        />
        </div>
    );
};
