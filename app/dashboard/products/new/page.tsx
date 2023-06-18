'use client'

import Button from "@/components/Button";
import InputField from "@/components/inputs/InputField";
import TextArea from "@/components/inputs/TextArea";
import axios from "axios";
import { useState } from "react";

import { toast } from "react-hot-toast"

import {
    FieldValues,
    SubmitHandler,
    useForm} from 'react-hook-form';


export default function NewProduct() {
    const [isLoading, setIsLoading] = useState(false);
    {/*const [title, setTitle] = useState("");*/}
    {/*const [description, setDescription] = useState("");*/}
    {/*const [price, setPrice] = useState("");*/}
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            description: '',
            price: '',
        }

    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log({data});
        axios.post('/api/products', data)
        .then(() => toast.success('Добавлено'))
        .catch(() => toast.error("Что то пошло не так!"))
        .finally(() => setIsLoading(false));
    }

    return (
        <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Новый товар</h1>
                <InputField id="title" label="Название товара" placeholder="Краткое лаконичное название товара"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                <TextArea id="description" rows={7} label="Описание товара" placeholder="Опишите подробно товар. Марку, модель, характристики, версию (при наличии), плюсы/минусы товара"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                <InputField id="price" label="Цена товара" placeholder="Стоимость в тенге"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                    
                <Button
                    type="submit"
                    disabled={isLoading}
                >
                    Сохранить
                </Button>
            </form>
        </div>
    );
};


