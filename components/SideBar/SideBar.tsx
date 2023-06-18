
'use client';

import './SideBar.css'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
import { TbBoxSeam } from 'react-icons/tb'
import { BsReceiptCutoff } from 'react-icons/bs'
import { MdInsights } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWarehouse } from 'react-icons/fa'
import { BiCog } from 'react-icons/bi'
import { BiLogOut } from 'react-icons/bi'
import Link from 'next/link'

import { usePathname } from 'next/navigation'


interface Props {
    children?: string;
}

export default function SideBar ({children}: Props) {
    const activeLink = "active"
    const pathname = usePathname();

    return (
        <div className="sidebar__container">
            <div className="sidebar">
                <Link href="/dashboard" className={pathname==="/dashboard" ? activeLink : ""}>
                    <span><BsFillGrid1X2Fill/></span>
                    <h3>Обзор</h3>
                </Link>
                <Link href="/dashboard/customers" className={pathname.includes("/customers") ? activeLink : ""}>
                    <span><BsPerson/></span>
                    <h3>Покупатели</h3>
                </Link>
                <Link href="/dashboard/products" className={pathname.includes("/products") ? activeLink : ""}>
                    <span><TbBoxSeam/></span>
                    <h3>Товары</h3>
                </Link>
                <Link href="/dashboard/orders" className={pathname.includes("/orders") ? activeLink : ""}>
                    <span><BsReceiptCutoff/></span>
                    <h3>Заказы</h3>
                </Link>
                <Link href="#" className={pathname.includes("/analytics") ? activeLink : ""}>
                    <span><MdInsights/></span>
                    <h3>Аналитика</h3>
                </Link>
                <Link href="/users" className={pathname.includes("/messenger") ? activeLink : ""}>
                    <span><AiOutlineMail/></span>
                    <h3>Сообщения</h3>
                    <span className="message-count">26</span>
                </Link>
                <Link href="/shop" className={pathname.includes("/storage") ? activeLink : ""}>
                    <span><FaWarehouse/></span>
                    <h3>Склад</h3>
                </Link>
                <Link href="#" className={pathname.includes("/settings") ? activeLink : ""}>
                    <span><BiCog/></span>
                    <h3>Настройки</h3>
                </Link>
                <Link href="#" className={pathname.includes("/logout") ? activeLink : ""}>
                    <span><BiLogOut/></span>
                    <h3>Выйти</h3>
                </Link>
            </div>
        </div>
    )
}

