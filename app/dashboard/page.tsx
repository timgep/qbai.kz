import InsightsCard from '@/components/InsightsCard';
import './page.css'



export default function dashboard () {
    

    return (
        <div className=''>
            <h1>Панель предпринимателя</h1>
            {/*<span>{children}</span>*/}
            <div className="date">
                <input type="date" />
            </div>
            <div className="insights">
                <div className="sales card">
                    <InsightsCard amount="25,024" percentage={81}/>
                </div>
                <div className="expenses card">
                    <InsightsCard amount="14,160" percentage={62}/>
                </div>
                <div className="income card">
                    <InsightsCard amount="10,864" percentage={44}/>
                </div>
            </div>
            <div className="recent-orders">
                <h2>Последние заказы</h2>
                <table className="card">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </div>
    );
};

