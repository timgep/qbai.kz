import Image from "next/image";

interface Props {
    prop: React.ReactNode;
}

const NotFound: React.FC<Props> = ({prop}) => {

    return (
        <div className="max-w-5xl text-xl flex flex-col mx-auto mt-24 items-center gap-8">
            <Image src="/images/search_woman.jpeg" alt="not found" width={320} height={320}/>
            <h2>Не найдено</h2>
            <p>Не можем найти указанный товар</p>
            <Image src="/images/search_man.jpeg" alt="not found" width={320} height={320}/>
        </div>
    );
};

export default NotFound;
