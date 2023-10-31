
import { GiSmartphone, GiScooter } from 'react-icons/gi'
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CarOutlined } from '@ant-design/icons';
// import {useGlobalContext} from '../context/Context';
import {Select} from 'antd';
// import {ProductList} from '../data/ProductList';
import { useState } from 'react';

const cars =[];
const ups = [];
// ProductList.map((item)=>{
//     if(item.use=='cars'){
//         cars.push(
//             {
//                 label:item.label,
//                 value:item.label
//             }
//         )
//     }else{
//         ups.push({
//             label:item.label,
//             value:item.label
//         })
//     }
// })

const Trial = () => {
    
    // const {service,setService} = useGlobalContext();
    const [selected,setSelected] = useState('Select Battery');

    

    const handleChange = (value) => {
        setSelected(value);
        console.log(selected);
    }
    
    return (
        <>
            <section className="text-gray-600 body-font bg-gray-100 relative">
                {/* <div className='w-full absolute top-[-50px] h-[100px] z-5 px-[6%] md:px-[20%] lg:px-[35%]'>
                    <div className='w-full h-full flex items-center justify-between'>
                        <div className='w-[70px] h-[70px] rounded-full bg-red-500 cursor-pointer border hover:shadow-xl flex flex-col justify-center items-center hover:scale-125 duration-500'
                        // onClick={()=>setService('car')}
                        >
                            <a href='#service-section'>
                            <div className='flex justify-center items-center mb-2'>
                                <CarOutlined style={{color:'white',fontSize:'22px'}}/>
                            </div>
                            <p className='text-xs text-white'>Car</p>
                            </a>
                        </div>
                        <div className='w-[70px] h-[70px] rounded-full bg-red-500 cursor-pointer border hover:shadow-xl flex flex-col justify-center items-center hover:scale-125 duration-500'
                        // onClick={()=>setService('ups')}
                        >
                            <a href="#service-section">
                            <div className='flex justify-center items-center mb-2'>
                                <CarOutlined style={{color:'white',fontSize:'22px'}}/>
                            </div>
                            <p className='text-xs text-white'>Ups</p>
                            </a>
                        </div>
                        <div className='w-[70px] h-[70px] rounded-full bg-red-500 cursor-pointer border hover:shadow-xl flex flex-col justify-center items-center hover:scale-125 duration-500'>
                            <div className='flex justify-center items-center mb-2'>
                                <CarOutlined style={{color:'white',fontSize:'22px'}}/>
                            </div>
                            <p className='text-xs text-white'>Other</p>
                        </div>
                    </div>
                </div> */}
                <div className="container px-5 pt-24 mx-auto flex flex-wrap pb-[200px]">
                    <div className="flex relative pt-10 pb-20 items-center w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-5 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <GiSmartphone style={{ fontSize: '3rem' }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Share your OTP</h2>
                                <p className="leading-relaxed">Share your contact details and submit the otp </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 items-center w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-5 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <SlLocationPin style={{ fontSize: '3rem' }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Location </h2>
                                <p className="leading-relaxed">Share your location and follow the steps till your requests gets submitted</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 items-center w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-5 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <GiScooter style={{ fontSize: '3rem' }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Waiting Time</h2>
                                <p className="leading-relaxed">Hi-Power technician arrives at your given location</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 items-center w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-5 title-font font-medium text-sm">4</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <GiScooter style={{ fontSize: '3rem' }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Checking</h2>
                                <p className="leading-relaxed">Our Tecnician will car battery</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 items-center w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-5 title-font font-medium text-sm">5</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <GiScooter style={{ fontSize: '3rem' }} />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Fixing</h2>
                                <p className="leading-relaxed">Our tecnician will fix the problem in the battery</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-10 items-center w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-5 title-font font-medium text-sm">6</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                                <AiOutlineCheckCircle style={{fontSize : '3rem'}}/>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Complete</h2>
                                <p className="leading-relaxed">Your request will be Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='service-section' className='w-full absolute bottom-[-225px] md:bottom-[-150px] max-h-[600px] h-[450px] md:h-[300px] z-5 px-[6%] md:px-[9%] lg:px-[25%] py-10'>
                    {/* {
                        (()=>{
                            switch(service){
                                case '':
                                return;
                                case 'car':
                                return(
                                    <div className='bg-white w-full h-full shadow-2xl py-5'>
                                        <form className='grid grid-cols-1 md:grid-cols-2 gap-5 px-[5%]'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="email" className='text-sm tracking-tight text-gray-600'>Email</label>
                                                <input type="text" name='email' className='text-sm px-1 py-1 tracking-tight focus:outline-none border border-gray-300' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="mobile" className='text-sm tracking-tight text-gray-600'>Mobile</label>
                                                <input type="tel" name='mobile' className='text-sm px-1 py-1 tracking-tight focus:outline-none border border-gray-300' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="query" className='text-sm tracking-tight text-gray-600'>Query</label>
                                                <textarea type="text" name='query' className='text-sm px-1 py-1 tracking-tight focus:outline-none border border-gray-300' />
                                            </div>
                                            <div className='flex flex-col'>
                                            <label className='text-sm tracking-tight text-gray-600'>Select batteries</label>
                                            <Select
                                                mode="tags"
                                                style={{
                                                    width: '100%',
                                                }}
                                                placeholder="Select Battery"
                                                onChange={handleChange}
                                                options={cars}
                                            />
                                            <button className='bg-[#ff0e2c] w-full mt-[20px] text-white flex justify-center items-center py-1 text-[12px] font-semibold uppercase'>Submit</button>

                                            </div>
                                        </form>
                                    </div>
                                );
                                case 'ups':
                                return (
                                    <div className='bg-white w-full h-full shadow-2xl py-5'>
                                        <form className='grid grid-cols-1 md:grid-cols-2 gap-5 px-[5%]'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="email" className='text-sm tracking-tight text-gray-600'>Email</label>
                                                <input type="text" name='email' className='text-sm px-1 py-1 tracking-tight focus:outline-none border border-gray-300' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="mobile" className='text-sm tracking-tight text-gray-600'>Mobile</label>
                                                <input type="tel" name='mobile' className='text-sm px-1 py-1 tracking-tight focus:outline-none border border-gray-300' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="query" className='text-sm tracking-tight text-gray-600'>Query</label>
                                                <textarea type="text" name='query' className='text-sm px-1 py-1 tracking-tight focus:outline-none border border-gray-300' />
                                            </div>
                                            <div className='flex flex-col'>
                                            <label className='text-sm tracking-tight text-gray-600'>Select batteries</label>
                                            <Select
                                                mode="tags"
                                                style={{
                                                    width: '100%',
                                                }}
                                                placeholder="Select Battery"
                                                onChange={handleChange}
                                                options={ups}
                                            />
                                            <button className='bg-[#ff0e2c] w-full mt-[20px] text-white flex justify-center items-center py-1 uppercase text-[12px] font-semibold'>Submit</button>

                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                        }).call(this)
                    } */}
                </div>
            </section>
        </>
    )
}

export default Trial