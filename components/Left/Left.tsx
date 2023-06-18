import Brand from "../Brand/Brand"
import SideBar from "../SideBar/SideBar"

interface Props{
    children?: string;
}

const Left: React.FC<Props> = ({children}) => {
  return (
    <aside className='h-screen'>
        <Brand />
        <SideBar/>
    </aside>
  )
}

export default Left

