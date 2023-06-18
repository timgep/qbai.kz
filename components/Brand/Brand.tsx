import Image from 'next/image'
import './Brand.css'
import { AiOutlineClose } from 'react-icons/ai'


const Brand = () => {
  return (
    <div className="asidetop__container">
      <div className="top">
          <div className="flex gap-4">
              <Image src="/images/logo.png" alt="Logo" width="40" height="40" className="mx-auto w-auto"/>
              <h1><span className="brand">Qbai.kz</span></h1>
          </div>
          <div className="close" id="close-btn">
              <AiOutlineClose />
          </div>
      </div>
    </div>
  )
}

export default Brand