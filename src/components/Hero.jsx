
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hp2 from '../../public/assets/images/2.png';
import hp5 from '../../public/assets/images/2.png';
import hp3 from '../../public/assets/images/2.png';
import hp1 from '../../public/assets/images/2.png';
import hp6 from '../../public/assets/images/2.png';
import hp7 from '../../public/assets/images/2.png';
import { LiaCarSideSolid } from 'react-icons/lia';
import { LiaTruckSolid } from 'react-icons/lia';
import { LiaCarBatterySolid } from 'react-icons/lia';
import { LiaTractorSolid } from 'react-icons/lia';
import { GiPowerGenerator } from 'react-icons/gi';

const Hero = () => {
  return (
    <>
      <div className='w-full px-[6%] md:px-[9%] lg:px-[20%] border-b  bg-white text-black'>
        <div className='w-full py-1'>
          <ul className='flex justify-between'>
            <li className='flex flex-col items-center justify-center text-[12px] tracking-widest'>Search by:</li>
            <li className='flex items-center justify-center text-gray-300'>|</li>
            <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={() => setOption('car')}><LiaCarSideSolid size={20} />Car</li>
            <li className='flex items-center justify-center text-gray-300'>|</li>
            <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={() => setOption('lcv')}><LiaTruckSolid size={20} />Lcv/Hcv</li>
            <li className='flex items-center justify-center text-gray-300'>|</li>
            <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={() => setOption('tractor')}><LiaTractorSolid size={20} />Tractor</li>
            <li className='flex items-center justify-center text-gray-300'>|</li>
            <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={() => setOption('inverter')}><LiaCarBatterySolid size={20} />Inverter</li>
            <li className='flex items-center justify-center text-gray-300'>|</li>
            <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={() => setOption('genset')}><GiPowerGenerator size={20} />Genset</li>
          </ul>
        </div>
      </div>
      <div className='ecomm-hero flex items-center justify-center md:px-[3%] lg:px-[8%] bg-white'>

        <div className='relative border-2 rounded-3xl overflow-hidden mb-[80px]'>
          <div className='hidden md:flex'>
            <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={4000}>
              <div className='rounded-3xl'>
                <img className='h-[500px] rounded-3xl' src={hp5} alt=""/>
              </div>
              <div className='rounded-3xl'>
                <img className='h-[500px] rounded-3xl' src={hp3} alt=""/>
              </div>
              <div className='rounded-3xl'>
                <img className='h-[500px] rounded-3xl' src={hp2} alt=""/>
              </div>
            </Carousel>
          </div>
          <div className='hidden sm:absolute top-0 h-full bg-black/70 w-full'></div>
        </div>
      </div>
      <div className='sm:hidden flex md:px-[6%]'>
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={4000}>
          <div className=''>
            <img className='h-[500px]' src={hp7} alt=""/>
          </div>
          <div className='rounded-3xl'>
            <img className='h-[500px]' src={hp1} alt=""/>
          </div>
          <div className='rounded-3xl'>
            <img className='h-[500px]' src={hp6} alt=""/>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
