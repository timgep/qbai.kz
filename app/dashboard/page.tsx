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
                    <div className="middle">
                        <div className="left">
                            <h3>Вся сумма</h3>
                            <h1>₸25,024</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                <div className="expenses card">
                    <div className="middle">
                        <div className="left">
                            <h3>Потрачено</h3>
                            <h1>₸14,160</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                <div className="income card">
                    <div className="middle">
                        <div className="left">
                            <h3>Прибыль</h3>
                            <h1>₸10,864</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
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

