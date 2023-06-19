
import './layout.css'
import Left from "@/components/Left/Left"
import Right from "@/components/Right/Right"
import getCurrentUser from '../actions/getCurrentUser';


interface Props{
  children?: React.ReactNode;
}

export default async function Layout({children}: Props) {
    const currentUser = await getCurrentUser();
    return (
        
        <div className="admin-panel">
            <Left/>
            <main>{children}</main>
            <Right currentUser={currentUser!}/>

        </div>

    )
}

