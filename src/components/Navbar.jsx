import  { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import { BsCart2 } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';

// Define your LoginForm and SignupForm components



const Navbar = () => {
  const [mobilemenu, setMobileMenu] = useState(false);
  const [showform, setShowForm] = useState(false);
  const [popup, setPopup] = useState(false);

  // Dummy data to replace server data
  const session = false; // Replace with your authentication logic
  const cartList = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more items as needed
  ];

  const handleMenu = () => {
    setMobileMenu(!mobilemenu);
  };

  

  const openForm = () => {
    setPopup(true);
    setShowForm(true);
  };




  const signOut = () => {
    // Replace with your signout logic
  };

  return (
    <>
      <div className='sticky top-[-2px] z-10 bg-white border-b border-gray-300 ecomm-nav max-w-[1640px] w-full h-[60px] px-[6%] md:px-[7%] lg:px-[8%] flex flex-col justify-center py-10 duration-300'>
        <div className='flex justify-between items-center font-Poppins w-full'>
          <div className='sm:hidden duration-300 nav-text'>
            <DragHandleIcon sx={{ fontSize: 25 }} onClick={handleMenu} />
          </div>
          <div className='ecomm-icon'>
            <h1 className='text-2xl text-black font-bold relative'>
              <span className='text-[#ff0e2c]'>HI</span>-POWER
              <div className='absolute top-[-2px] left-[40%]'>
                <ElectricBoltIcon sx={{ fontSize: 20, color: '#FEFB14' }} />
              </div>
            </h1>
          </div>
          <div className='ecomm-menu hidden sm:flex '>
            <ul className='flex gap-5 sm:gap-7 md:gap-9 font-Poppins'>
              <li className='nav-text font-medium hover:text-[#ff0e2c]'><Link className='text-black hover:text-[#ff0e2c]' to="/Home" >Home</Link></li>
              <li className='nav-text text-black font-medium '> <Link className='text-black hover:text-[#ff0e2c]' to="/products">Products</Link></li>
              <li className='nav-text text-black font-medium' ><Link className='text-black hover:text-[#ff0e2c]' to="/services">Services</Link></li>
              <li className='nav-text text-black font-medium '><Link className='text-black hover:text-[#ff0e2c]' to="/about">About</Link></li>
              <li className='nav-text text-black font-medium '><Link className='text-black hover:text-[#ff0e2c]' to="/contact">Contact</Link></li>
            </ul>
            
          </div>
          <div className='ecomm-icons text-black'>
            <ul className='flex gap-1 sm:gap-3 md:gap-5 font-Poppins'>
              {!session ? (
                <Link to="/register">
                  <li className=' text-black hover:text-[#ff0e2c] flex items-center cursor-pointer' onClick={openForm}>
                    <CiUser size={22} />
                    <p className='text-sm hidden sm:flex text-black'>Sign In</p>
                  </li>
                </Link>
              ) : (
                <>
                 <Link to="/profile">
                    <li className='text-black hover:text-[#ff0e2c] flex items-center cursor-pointer'>
                    
                      <CiUser size={22}  />
                    
                      <p className='text-sm hidden sm:flex text-black'>Profile</p>
                    </li>
                    </Link>
                  <li className='text-black hover:text-[#ff0e2c] flex items-center cursor-pointer gap-1' onClick={signOut}>
                    <CiUser size={22} />
                    <p className='text-sm hidden sm:flex'>Sign Out</p>
                  </li>
                </>
              )}
              <li className='text-black hover:text-[#ff0e2c] flex items-center cursor-pointer relative'>
                {cartList.length ? (
                  <>
                    <a className='text-black' href='/cart'>
                      <BsCart2 size={22} />
                    </a>
                    <div className='bg-[#ff0e2c] absolute w-[15px] h-[15px] rounded-full right-[-5px] top-[-5px] text-center'>
                      <p className='text-white text-xs'>{cartList.length}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <BsCart2 size={22} onClick={() => {
                      toast.error('Cart empty');
                    }} />
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {mobilemenu ? <div className='fixed top-0 left-0 z-10 ecomm-overlay w-full h-screen bg-black/70 duration-200' onClick={handleMenu} /> : ''}
      <div className={mobilemenu ? 'fixed w-[80%] top-0 left-0 h-screen z-10 bg-white duration-300' : 'fixed top-0 left-[-100%] w-[80%] h-screen bg-white duration-300'}>
        <div className='absolute top-4 right-4 text-black cursor-pointer'>
          <CloseIcon sx={{ fontSize: 25 }} onClick={handleMenu} />
        </div>
        <div className='ecomm-mobilemenu flex flex-col pt-6'>
          <div className='ecomm-icon pl-[3%] mb-5'>
            <h1 className='text-2xl font-bold relative inline font-Poppins'>
              <span className='text-[#ff0e2c]'>HI</span>-POWER
              <div className='absolute top-[-8%] left-[41%]'>
                <ElectricBoltIcon sx={{ fontSize: 20, color: '#FEFB14' }} />
              </div>  
            </h1>
          </div>
          <div className='pl-[3%] pr-[10%] pb-[5%] mb-5 w-full text-gray-700 border-b'>
            <p className='text-sm'>Reliable. Low prices. Offers. <span className='text-[#03b37b]'>Buy now</span></p>
          </div>
          <ul className='flex flex-col gap-6'>
            <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
              <HomeIcon />
              <Link to="">Home</Link>
            </li>
            <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
              <CategoryIcon />
              <a href='/products'>Products</a>
            </li>
            <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
              <CategoryIcon />
              <a href='/services'>Services</a>
            </li>
            <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
              <CategoryIcon />
              <a href='/whiteLabel'>White Labelling</a>
            </li>
            <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
              <InfoIcon />
              <a href='/about'>About</a>
            </li>
            <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
              <ContactPageIcon />
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
