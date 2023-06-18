import Header from '@/components/Header'

interface Props {
    children: React.ReactNode;
}

const layout: React.FC<Props> = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default layout