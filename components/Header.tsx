import Image from "next/image";
import Link from "next/link";
import { FaWarehouse } from 'react-icons/fa'

interface Props {
    prop?: React.ReactNode;
}

const Header: React.FC<Props> = ({prop}) => {

    return (
        <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow'>
            <Link href="/dashboard">
                <Image
                    src="/images/logo.png"
                    width={70}
                    height={70}
                    alt="Logo"
                />
            </Link>

            <Link href="/shop">
                <span className="text-blue-500 text-5xl"><FaWarehouse/></span>
            </Link>

            <div className="flex items-center space-x-2.5 text-sm">
                <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                Log in
                </button>
                <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
                Sign up
                </button>
            </div>
        </header>
    );
};

export default Header;
