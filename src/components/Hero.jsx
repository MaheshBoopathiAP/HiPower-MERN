import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LiaCarSideSolid, LiaTruckSolid, LiaCarBatterySolid, LiaTractorSolid } from 'react-icons/lia';
import { GiPowerGenerator } from 'react-icons/gi';
import hp2 from '../../public/assets/images/hero/2.png';
import hp5 from '../../public/assets/images/hero/5.png';
import hp3 from '../../public/assets/images/hero/hp3.png';
import hp1 from '../../public/assets/images/hero/hp1.png';
import hp6 from '../../public/assets/images/hero/hp3-2.png';
import hp7 from '../../public/assets/images/hero/5-2.png';

const Hero = () => {
  const [option, setOption] = useState('car');
  const [car, setCar] = useState('LMV');
  const [filter, setFilter] = useState({ brand: '', model: '', variant: '' });
  const [filter2, setFilter2] = useState({ brand: '', model: '', variant: '' });
  const [filter3, setFilter3] = useState({ brand: '', model: '', variant: 'diesel' });
  const [filter4, setFilter4] = useState({ brand: '', model: '', variant: 'diesel' });
  const [filter5, setFilter5] = useState({ brand: 'Kirloskar', model: '', variant: 'Genset' });

  const LMV = [
    { brand: 'Brand1', model: ['Model1', 'Model2'], variants: ['petrol', 'diesel'] },
    // Add more data as needed
  ];

  const HMV = [
    { brand: 'Brand1', model: ['Model1', 'Model2'], variants: ['petrol', 'diesel'] },
    // Add more data as needed
  ];

  const LCV = [
    { brand: 'Brand1', model: ['Model1', 'Model2'] },
    // Add more data as needed
  ];

  const Tractor = [
    { brand: 'Brand1', model: ['Model1', 'Model2'] },
    // Add more data as needed
  ];

  const Genset = [
    { brand: 'Kirloskar', model: ['Model1', 'Model2'] },
    // Add more data as needed
  ];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleFilterChange2 = (event) => {
    const { name, value } = event.target;
    setFilter2({ ...filter2, [name]: value });
  };

  const handleFilterChange3 = (event) => {
    const { name, value } = event.target;
    setFilter3({ ...filter3, [name]: value });
  };

  const handleFilterChange4 = (event) => {
    const { name, value } = event.target;
    setFilter4({ ...filter4, [name]: value });
  };

  const handleFilterChange5 = (event) => {
    const { name, value } = event.target;
    setFilter5({ ...filter5, [name]: value });
  };

  return (
    <>
       <div className='w-full px-[6%] md:px-[9%] lg:px-[20%] border-b bg-white'>
            <div className='w-full py-1 text-black'>
                    <ul className='flex justify-between'>
                        <li className='flex flex-col items-center justify-center text-[12px] tracking-widest'>Search by:</li>
                        <li className='flex items-center justify-center text-gray-300'>|</li>
                        <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={()=>setOption('car')}><LiaCarSideSolid size={20}/>Car</li>
                        <li className='flex items-center justify-center text-gray-300'>|</li>
                        <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={()=>setOption('lcv')}><LiaTruckSolid size={20}/>Lcv/Hcv</li>
                        <li className='flex items-center justify-center text-gray-300'>|</li>
                        <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={()=>setOption('tractor')}><LiaTractorSolid size={20}/>Tractor</li>
                        <li className='flex items-center justify-center text-gray-300'>|</li>
                        <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={()=>setOption('inverter')}><LiaCarBatterySolid size={20}/>Inverter</li>
                        <li className='flex items-center justify-center text-gray-300'>|</li>
                        <li className='flex flex-col items-center justify-center text-[10px] tracking-widest Bicon' onClick={()=>setOption('genset')}><GiPowerGenerator size={20}/>Genset</li>
                    </ul>
            </div>
        </div>
        <div className='ecomm-hero flex items-center justify-center md:px-[3%] lg:px-[8%] mt-7'>
        
        <div className='relative border-2 rounded-3xl overflow-hidden mb-[80px] '>
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
            <div className='hidden sm:absolute top-0 h-full bg-black/70 w-full'>

            </div>
            <div className='bg-white w-[370px] border-2 h-[480px] sm:absolute shadow-xl sm:top-[10px] sm:right-[10px] rounded-xl'>
                <div className='ecomm-selection w-full'>
                    
                    <div className='ecomm-find'>
                        {
                            (()=>{
                                switch(option){
                                    case 'car':
                                    return (
                                        <div className='flex flex-col'>
                            <div className='flex justify-center items-center p-2'>
                                <p className='text-sm text-gray-500'>Search Batteries by Brand, Model & Variant</p>
                            </div>
                            <div className='flex w-full h-[150px]'>
                                <div className='w-[50%] h-full p-5'>
                                    <button onClick={()=>setCar('LMV')} className='w-full h-full border border-gray-600 rounded-xl focus:border-2 flex flex-col items-center'>
                                        <img src="https://media.istockphoto.com/id/1186972461/photo/generic-white-car-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VWXOQDLvEJHhCihgNnErADBLaG7vpHPM7pryTquiLi8=" alt="" className='h-[80px]'/>
                                        <span>
                                            <p className='font-semibold'>NON SUV</p>
                                        </span>
                                    </button>
                                </div>
                                <div className='w-[50%] h-full p-5' onClick={()=>setCar('HMV')}>
                                    <button onClick={()=>setCar('LMV')} className='w-full h-full border border-gray-600 rounded-xl focus:border-2 flex flex-col items-center'>
                                        <img src="https://media.istockphoto.com/id/959391798/photo/3d-illustration-of-generic-compact-white-suv.jpg?s=612x612&w=0&k=20&c=2VqUK6i3gs1_ZbYKCEusyjhp-PqakZFsMM7xppqsqeU=" alt="" className='h-[80px]'/>
                                        <span>
                                            <p className='font-semibold'>SUV</p>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='p-5'>
                                {
                                    car==='LMV' ? 
                                            <form className='flex flex-col gap-4' action='/products/car'>
                                    <select onChange={handleFilterChange} required name="brand" id="brand" defaultValue='Select Brand' className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {LMV.map((item, index)=>{
                                            return(
                                                <option key={index} value={item.brand} className=''>{item.brand}</option>
                                            )
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange} name="model" id="model" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {LMV.map((item)=>{
                                            if(item.brand==filter.brand){
                                                return(
                                                    item.model.map((mdl, index)=>{
                                                        return(
                                                            <option key={index} value={mdl}>{mdl}</option>
                                                        )
                                                    })
                                                )
                                            }
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange} name="variant" id="variant" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        <option value="petrol">petrol</option>
                                        <option value="diesel">diesel</option>
                                    </select>
                                    
                                    <button className='py-2 font-semibold bg-gradient-to-tr from-red-400 to-[#ff0e2c] text-white rounded-lg' type='submit'>
                                    {/* <Link href={`/products/${filter.brand}/${filter.model}/${filter.variant}`}> */}
                                    {/* <Link href='/products'> */}
                                    Find Batteries
                                    {/* </Link> */}
                                    </button>
                                </form>:

                                <form className='flex flex-col gap-4' action='/products/car'>
                                    <select onChange={handleFilterChange2} required name="brand" id="brand" defaultValue='Select Brand' className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {HMV.map((item, index)=>{
                                            return(
                                                <option key={index} value={item.brand} className=''>{item.brand}</option>
                                            )
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange2} name="model" id="model" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {HMV.map((item)=>{
                                            if(item.brand==filter2.brand){
                                                return(
                                                    item.model.map((mdl, index)=>{
                                                        return(
                                                            <option key={index} value={mdl}>{mdl}</option>
                                                        )
                                                    })
                                                )
                                            }
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange2} name="variant" id="variant" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        <option value="petrol">petrol</option>
                                        <option value="diesel">diesel</option>
                                    </select>
                                    
                                    <button className='py-2 font-semibold bg-gradient-to-tr from-red-400 to-[#ff0e2c] text-white rounded-lg' type='submit'>
                                    {/* <Link href={`/products/${filter.brand}/${filter.model}/${filter.variant}`}> */}
                                    {/* <Link href='/products'> */}
                                    Find Batteries
                                    {/* </Link> */}
                                    </button>
                                </form>
                                        
                                    
                                }
                            </div>
                        </div> 
                                    );

                                    case 'inverter':
                                    return (
                                        <div className='flex flex-col'>
                            <div className='px-5 pt-5'>
                                <p className='text-sm'>Inverter Batteries</p>
                            </div>
                            <div className='flex w-full h-[200px]'>
                                <div className='w-[100%] h-full p-5'>
                                    <button className='w-full h-full border border-gray-600 rounded-xl focus:border-2 flex flex-col justify-center items-center'>
                                        <img src="https://m.media-amazon.com/images/I/61XMrlEzDvL._AC_UF1000,1000_QL80_.jpg" alt="inverter" className='h-[110px]'/>
                                        <span>
                                            <p className='font-semibold'>Inverters</p>
                                        </span>
                                    </button>
                                </div>
                                
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col gap-8'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores quos, modi reprehenderit eos quasi eum corrupti</p>
                                    <button className='py-2 bg-gradient-to-tr from-red-400 to-[#ff0e2c] text-white rounded-lg'><Link href='/products/inverter'>Find Inverter Batteries</Link></button>
                                </div>
                            </div>
                        </div>
                                    );

                                    case 'lcv':
                                    return (
                                        <div className='flex flex-col'>
                                        <div className='flex justify-center items-center p-2'>
                                            <p className='text-sm text-gray-500'>Search Batteries by Brand, Model & Variant</p>
                                        </div>
                            <div className='flex w-full h-[150px]'>
                                <div className='w-[100%] h-full p-5'>
                                    <button className='w-full h-full border border-gray-600 rounded-xl focus:border-2 flex flex-col items-center'>
                                    <img src="https://media.istockphoto.com/id/910651420/photo/semi-truck-with-40-ft-heavy-cargo-container.jpg?s=612x612&w=0&k=20&c=L9ZGs4pphxcAixcaZvzqYptLP9TB2V2xLM8pDI4UiBY=" alt="" className='h-[80px]'/>
                                        <span>
                                            <p className='font-semibold'>LCV/HCV</p>
                                        </span>
                                    </button>
                                </div>
                                
                            </div>
                            <div className='p-5'>
                            <form className='flex flex-col gap-4' action='/products/truck'>
                                    <select onChange={handleFilterChange3} required name="brand" id="brand" defaultValue='Select Brand' className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {LCV.map((item, index)=>{
                                            return(
                                                <option key={index} value={item.brand} className=''>{item.brand}</option>
                                            )
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange3} name="model" id="model" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {LCV.map((item)=>{
                                            if(item.brand==filter3.brand){
                                                return(
                                                    item.model.map((mdl, index)=>{
                                                        return(
                                                            <option key={index} value={mdl}>{mdl}</option>
                                                        )
                                                    })
                                                )
                                            }
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange3} name="variant" id="variant" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        <option value="diesel">diesel</option>
                                    </select>
                                    
                                    <button className='py-2 font-semibold bg-gradient-to-tr from-red-400 to-[#ff0e2c] text-white rounded-lg' type='submit'>
                                    {/* <Link href={`/products/${filter.brand}/${filter.model}/${filter.variant}`}> */}
                                    {/* <Link href='/products'> */}
                                    Find Batteries
                                    {/* </Link> */}
                                    </button>
                                    </form>
                            </div>
                        </div>
                                    );

                                    case 'tractor':
                                    return(
                                        <div className='flex flex-col'>
                                        <div className='flex justify-center items-center p-2'>
                                            <p className='text-sm text-gray-500'>Search Batteries by Brand, Model & Variant</p>
                                        </div>
                            <div className='flex w-full h-[150px]'>
                                <div className='w-[100%] h-full p-5'>
                                    <button className='w-full h-full border border-gray-600 rounded-xl focus:border-2 flex flex-col items-center'>
                                    <img src="https://thumbs.dreamstime.com/b/new-red-tractor-1326711.jpg" alt="" className='h-[80px]'/>
                                        <span>
                                            <p className='font-semibold'>Tractor</p>
                                        </span>
                                    </button>
                                </div>
                                
                            </div>
                            <div className='p-5'>
                            <form className='flex flex-col gap-4' action='/products/tractor'>
                                    <select onChange={handleFilterChange4} required name="brand" id="brand" defaultValue='Select Brand' className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {Tractor.map((item, index)=>{
                                            return(
                                                <option key={index} value={item.brand} className=''>{item.brand}</option>
                                            )
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange4} name="model" id="model" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {Tractor.map((item)=>{
                                            if(item.brand==filter4.brand){
                                                return(
                                                    item.model.map((mdl, index)=>{
                                                        return(
                                                            <option key={index} value={mdl}>{mdl}</option>
                                                        )
                                                    })
                                                )
                                            }
                                        })}
                                    </select>
                                    <select onChange={handleFilterChange4} name="variant" id="variant" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        <option value="diesel">diesel</option>
                                    </select>
                                    
                                    <button className='py-2 font-semibold bg-gradient-to-tr from-red-400 to-[#ff0e2c] text-white rounded-lg' type='submit'>
                                    {/* <Link href={`/products/${filter.brand}/${filter.model}/${filter.variant}`}> */}
                                    {/* <Link href='/products'> */}
                                    Find Batteries
                                    {/* </Link> */}
                                    </button>
                                    </form>
                            </div>
                        </div>
                                    );

                                    case 'genset':
                                    return(
                                        <div className='flex flex-col'>
                            <div className='px-5 pt-5'>
                                <p className='text-sm'>Genset Batteries</p>
                            </div>
                            <div className='flex w-full h-[150px]'>
                                <div className='w-[100%] h-full p-5'>
                                    <button className='w-full h-full border border-gray-600 rounded-xl focus:border-2 flex flex-col justify-center items-center'>
                                        <img src="https://shop71044.sfstatic.io/upload_dir/shop/_thumbs/Honda-power-generator-EU32i.w610.h610.backdrop.png" alt="inverter" className='h-[80px]'/>
                                        <span>
                                            <p className='font-semibold'>Genset</p>
                                        </span>
                                    </button>
                                </div>
                                
                            </div>
                            <div className='p-5'>
                                <form className='flex flex-col gap-4' action='/products/inverter'>
                                    <select name="brand" id="brand" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        <option value="Kirloskar">Kirloskar</option>
                                    </select>
                                    <select name="model" id="model" onChange={handleFilterChange5} required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        {Genset.map((item)=>{
                                            return(
                                                item.model.map((mdl, index)=> 
                                                    <option value={mdl} key={index}>{mdl}</option>
                                                )
                                            )
                                        })}
                                    </select>
                                    <select name="variant" id="variant" required className='bg-gray-50 border-2 px-2 py-2 text-sm'>
                                        <option value="Genset">Genset</option>
                                    </select>
                                    <button className='py-2 bg-gradient-to-tr from-red-400 to-[#ff0e2c] text-white rounded-lg' type='submit'>Find Genset Batteries</button>
                                </form>
                            </div>
                        </div>
                                    );
                                }
                            }).call(this)
                        }
                    </div>
                </div>
            </div>
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
};

export default Hero;
