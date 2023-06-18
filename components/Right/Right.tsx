'use client';
import './Right.css'
import { BsFillCartFill } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs'
import { BsPersonFill } from 'react-icons/bs'

import { User } from "@prisma/client";
import RightTop from '../RightTop'


interface Props {
    currentUser: User
}

export default function Right({currentUser}: Props) {
    
    
    return (
        <div className="right">
            <RightTop currentUser={currentUser!}/>
            <div className="recent-updates">
                <h2>Последние сообщения</h2>
                <div className="updates card">
                    <div className="update">
                        <div className="profile-photo">
                            <img src="/images/profile-2.jpg" alt=""/>
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of
                            Night lion tech GPS drone</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="/images/profile-3.jpg" alt=""/>
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of
                            Night lion tech GPS drone</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="/images/profile-4.jpg" alt=""/>
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of
                            Night lion tech GPS drone</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sales-analytics">
                <h2>Аналитика продаж</h2>
                <div className="item card online">
                    <div className="icon">
                        <span><BsFillCartFill/></span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>ONLINE ORDERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="success">+39%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                <div className="item card offline">
                    <div className="icon">
                        <span><BsFillBagFill/></span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>OFFLINE ORDERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="danger">-17%</h5>
                        <h3>1100</h3>
                    </div>
                </div>
                <div className="item card customers">
                    <div className="icon">
                        <span><BsPersonFill/></span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>NEW CUSTOMERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="success">+25%</h5>
                        <h3>849</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

