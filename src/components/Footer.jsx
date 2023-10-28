import React from 'react';
import AnimatedWave from './AnimatedWave';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillMail,
  AiFillCaretRight
} from "react-icons/ai";
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillTelephoneFill } from "react-icons/bs";
const ElectricBoltIcon = React.lazy(() => import('@mui/icons-material/ElectricBolt'));

const Footer = () => {
  return (
    <div className='relative bg-white'>
      <div style={{ minHeight: "30vh", display: "flex", flexDirection: "column" }} />
      <div style={{ position: "relative" }}>
        <AnimatedWave color={"#ff0e2c"} animationDuration="4s" opacity={"1"} />
        <AnimatedWave color={"#ff0e2c"} animationDuration="12s" opacity={"0.7"} />
        <AnimatedWave color={"#ff0e2c"} animationDirection="reverse" animationDuration="10s" opacity={"0.5"} />
      </div>
      <footer className="bg-[#ff0e2c] flex flex-wrap gap-3 justify-around py-5 px-[4%]">
        <div className="w-[90%] md:w-[25%] flex flex-col items-center md:text-start md:items-start gap-5 text-white ">
          <h1 className='text-2xl font-bold relative inline'>
            <span className='text-black'>HI</span>-POWER
            <div className='absolute top-[-8%] left-[41%]'>
              <ElectricBoltIcon sx={{ fontSize: 20, color: '#FEFB14' }} />
            </div>
          </h1>
          <p className="text-justify">
            Hipowerbatteries is the leading manufacturer of Automotive and Inverter Batteries. After starting its operation since 1988, the firm has achieved many accomplishments and has established a widespread dealer network. The firm is supplying high-quality batteries to Government Departments like: Defence, Railways, MPSEB, State Transports
          </p>
          <div className="flex gap-5 ">
            <button className='bg-transparent hover:border-none'>
              <AiFillFacebook
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2 "
              />
            </button>
            <button className='bg-transparent hover:border-none'>
              <AiFillInstagram
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2"
              />
            </button>
            <button className='bg-transparent hover:border-none'>
              <AiOutlineTwitter
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2"
              />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[90%] md:w-[25%] lg:w-[20%] flex md:flex-col md:px-5 gap-5 max-md:justify-around flex-wrap max-sm:justify-start">
          <div className='flex flex-col gap-3 '>
            <h3 className="text-white text-xl font-semibold ">Useful Links</h3>
            <LinkComp label="Home" to="/" />
            <LinkComp label="About" to="/about" />
            <LinkComp label="Products" to="/products" />
            <LinkComp label="Contact" to="/contact" />
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <LinkComp label="Manufacturing" to="/" />
            <LinkComp label="White Labeling" to="/" />
            <LinkComp label="Maintenance" to="/" />
          </div>
        </div>
        <div className="w-full sm:w-[90%] md:w-[45%] flex max-sm:flex-col max-sm:text-start max-md:text-center justify-around">
          <div className="w-full sm:w-[50%] md:w-[45%] flex flex-col gap-5 items-start  ">
            <h3 className="text-white text-xl font-semibold">Find Your Battery</h3>
            <LinkComp label="Car / SUV / MUV Batteries" to="/" />
            <LinkComp label="Three Wheeler - Batteries" to="/" />
            <LinkComp label="LCV / HCV Batteries" to="/" />
            <LinkComp label="Tractor Batteries" to="/" />
            <LinkComp label="Inverter Batteries" to="/" />
            <LinkComp label="Inverter / HUPS - Genset Batteries" to="/" />
          </div>
          <div className="w-full sm:w-[50%] md:w-[55%] flex flex-col gap-5 text-white">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <h4 className="flex gap-2 ">
              <BiCurrentLocation className="w-10 mt-1" size={20} /> Hi Power Metal Industries,
              <br /> Adhartal Industrial Estate,
              <br /> Kanchanpur, Adhartal, Jabalpur (M.P.)
              <br /> PIN: 482004
            </h4>
            <h4 className="flex items-center gap-2 break-all">
              <AiFillMail className="w-10" size={20} /> hipowerbatteries@gmail.com
            </h4>
            <h4 className="flex items-center gap-2">
              <BsFillTelephoneFill className="w-10" size={20} />
              +91 9425153399
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

const LinkComp = ({ label, to }) => {
  return (
    <a href={to} className="text-white hover:underline flex w-full">
      <AiFillCaretRight className="mt-1 w-10" size={15} />
      {label}
    </a>
  );
}

export default Footer;
