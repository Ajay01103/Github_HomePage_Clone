import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <div className='relative z-50'>
        <div className='absolute'>
         <Navbar />
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative h-screen'>
            <img src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" width='4377' alt="back" 
            className=' absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
