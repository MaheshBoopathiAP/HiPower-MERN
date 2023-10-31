import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';

const PageIcons = () => {
  return (
    <div className='fixed flex flex-col right-5 bottom-5 gap-4 z-20'>
        
        <a href='tel:9425153399' className='page-icon w-[35px] h-[35px] bg-[#04b879] flex justify-center items-center rounded-xl duration-200 ease-in hover:scale-110'>
            <LocalPhoneIcon sx={{fontSize:25,color:'white'}} className='hover:scale-105'/>
            <div className='page-icon-text absolute w-[80px] h-[20px] left-[-250%] text-black hidden'>
                <p className='absolute right-0 text-[15px]'>Contact</p>
            </div>
        </a>
        <a href='mailto:hipowerbatteries@gmail.com' className='page-icon w-[35px] h-[35px] bg-gradient-to-tr from-pink-500 to-red-500 flex justify-center items-center rounded-xl duration-200 ease-in hover:scale-110'>
            <MailIcon sx={{fontSize:25,color:'white'}} className='hover:scale-105'/>
            <div className='page-icon-text absolute w-[80px] h-[20px] left-[-250%] text-black hidden'>
                <p className='absolute right-0 text-[15px]'>Mail</p>
            </div>
        </a>
        <a href='https://wa.me/7878653287' className='page-icon w-[35px] h-[35px] bg-[#04b879] flex justify-center items-center rounded-xl duration-200 ease-in hover:scale-110'>
            <WhatsAppIcon sx={{fontSize:25,color:'white'}} className='hover:scale-105'/>
            <div className='page-icon-text absolute w-[80px] h-[20px] left-[-250%] text-black hidden'>
                <p className='absolute right-0 text-[15px]'>Whatsapp</p>
            </div>
        </a>
    </div>
  )
}

export default PageIcons