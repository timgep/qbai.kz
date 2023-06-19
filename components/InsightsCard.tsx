'use client';


interface Props {
    amount: string,
    percentage: number
}


    

    

export default function InsightsCard ({amount, percentage}: Props) {

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="left">
                    <h3 className="mt-4 mb-2 text-sm">Вся сумма</h3>
                    <h1>₸{amount}</h1>
                </div>
                <div className="relative w-[92px] h-[92px] rounded-full">
                    <svg className="w-28 h-28 stroke-primary">
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                        <p>{percentage} %</p>
                    </div>
                </div>
            </div>
            <small className="mt-[1.3rem] block text-info-dark">Last 24 Hours</small>
        </>

    );
};
