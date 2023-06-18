'use client'

import Button from "@/components/Button";
import { useRouter } from "next/navigation";



export default function Products() {
    const router = useRouter();

    return (
        <div className='pt-24 px-2'>
            <Button
                type="button"
                onClick={()=>{router.push("/dashboard/products/new")}}
            >
                Добавить новый товар
            </Button>
        </div>
    );
};

