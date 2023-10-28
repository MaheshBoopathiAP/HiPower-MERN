import  { useState } from 'react';
import Slider from '@mui/material/Slider';
import p1 from '../../public/assets/images/products/IMG_20230829_170129-PhotoRoom.png-PhotoRoom.png'

const ProductsPage = () => {
  const [price, setPrice] = useState(2000);
  const brand = '';
  const model = '';
  const variant = '';

  const products = [
    {
      id: 1,
      warranty: 24,
      img: p1,
      type: 'High-Performance Car Battery',
      sku: 'SKU123456',
      description: 'A high-performance car battery for modern vehicles.',
      price: 2500,
      specs: [
        { key: 'Plates', value: '7' },
        { key: 'Weight (Dry)', value: '7.5Kg' },
        { key: 'Capacity (20hr rate)', value: '32' },
        { key: 'Max Overall Dimension', value: '197x129x227' },
        // Add more specs as needed
      ],
    },
    {
      id: 2,
      warranty: 36,
      img: p1,
      type: 'Deep Cycle Marine Battery',
      sku: 'SKU789012',
      description: 'A reliable deep cycle battery for marine applications.',
      price: 3000,
      specs: [
        { key: 'Plates', value: '9' },
        { key: 'Weight (Dry)', value: '11.2Kg' },
        { key: 'Capacity (20hr rate)', value: '50' },
        { key: 'Max Overall Dimension', value: '220x175x190' },
        // Add more specs as needed
      ],
    },
    {
      id: 3,
      warranty: 24,
      img: p1,
      type: 'AGM Car Battery',
      sku: 'SKU456789',
      description: 'An advanced AGM car battery with high performance.',
      price: 2800,
      specs: [
        { key: 'Plates', value: '8' },
        { key: 'Weight (Dry)', value: '8.8Kg' },
        { key: 'Capacity (20hr rate)', value: '40' },
        { key: 'Max Overall Dimension', value: '205x130x220' },
        // Add more specs as needed
      ],
    },
    {
      id: 4,
      warranty: 36,
      img: p1,
      type: 'Marine Starting Battery',
      sku: 'SKU987654',
      description: 'A reliable starting battery for marine engines.',
      price: 2200,
      specs: [
        { key: 'Plates', value: '6' },
        { key: 'Weight (Dry)', value: '6.5Kg' },
        { key: 'Capacity (20hr rate)', value: '28' },
        { key: 'Max Overall Dimension', value: '190x125x210' },
        // Add more specs as needed
      ],
    },
    {
      id: 5,
      warranty: 24,
      img: p1,
      type: 'Truck Battery',
      sku: 'SKU135792',
      description: 'A heavy-duty battery for trucks and commercial vehicles.',
      price: 3500,
      specs: [
        { key: 'Plates', value: '11' },
        { key: 'Weight (Dry)', value: '12.3Kg' },
        { key: 'Capacity (20hr rate)', value: '65' },
        { key: 'Max Overall Dimension', value: '275x175x190' },
        // Add more specs as needed
      ],
    },
    {
      id: 6,
      warranty: 24,
      img: p1,
      type: 'Motorcycle Battery',
      sku: 'SKU654321',
      description: 'A reliable battery for motorcycles and scooters.',
      price: 1200,
      specs: [
        { key: 'Plates', value: '5' },
        { key: 'Weight (Dry)', value: '3.2Kg' },
        { key: 'Capacity (20hr rate)', value: '18' },
        { key: 'Max Overall Dimension', value: '140x90x101' },
        // Add more specs as needed
      ],
    },
    {
      id: 7,
      warranty: 36,
      img: p1,
      type: 'RV Deep Cycle Battery',
      sku: 'SKU246813',
      description: 'A deep cycle battery designed for RVs and campers.',
      price: 2700,
      specs: [
        { key: 'Plates', value: '8' },
        { key: 'Weight (Dry)', value: '9.1Kg' },
        { key: 'Capacity (20hr rate)', value: '50' },
        { key: 'Max Overall Dimension', value: '200x170x190' },
        // Add more specs as needed
      ],
    },
    {
      id: 8,
      warranty: 24,
      img: p1,
      type: 'Lawn Tractor Battery',
      sku: 'SKU112233',
      description: 'A battery for lawn tractors and garden equipment.',
      price: 1600,
      specs: [
        { key: 'Plates', value: '6' },
        { key: 'Weight (Dry)', value: '5.8Kg' },
        { key: 'Capacity (20hr rate)', value: '28' },
        { key: 'Max Overall Dimension', value: '175x125x160' },
        // Add more specs as needed
      ],
    },
    {
      id: 9,
      warranty: 36,
      img: p1,
      type: 'Solar Deep Cycle Battery',
      sku: 'SKU789101',
      description: 'A deep cycle battery for solar power systems.',
      price: 2900,
      specs: [
        { key: 'Plates', value: '9' },
        { key: 'Weight (Dry)', value: '10.5Kg' },
        { key: 'Capacity (20hr rate)', value: '60' },
        { key: 'Max Overall Dimension', value: '220x160x180' },
        // Add more specs as needed
      ],
    },
    {
      id: 10,
      warranty: 24,
      img: p1,
      type: 'Golf Cart Battery',
      sku: 'SKU101010',
      description: 'A battery for golf carts and electric vehicles.',
      price: 1800,
      specs: [
        { key: 'Plates', value: '8' },
        { key: 'Weight (Dry)', value: '8.4Kg' },
        { key: 'Capacity (20hr rate)', value: '38' },
        { key: 'Max Overall Dimension', value: '190x130x160' },
        // Add more specs as needed
      ],
    },
  ];
  

  return (
    <div className='w-full h-full bg-white'>
      <div className='xl:fixed xl:flex hidden xl:w-[350px] xl:h-[500px] xl:z-10'>
        <div className='filters w-full h-full px-[20%] flex flex-col gap-2'>
          <div className='mt-[100px] py-2 text-lg font-bold border-b text-black'>
            <h4>Filters</h4>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[#ff0e2c] font-semibold text-base'>Price</h1>
            <div className='flex py-8'>
              <Slider
                sx={{ color: '#ff0e2c' }}
                valueLabelDisplay='on'
                min={2000}
                max={15000}
                value={price}
                onChange={(e, newValue) => setPrice(newValue)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* products section */}
      <div className='max-w-[1100px] xl:ml-[25%] md:pl-3'>
        <div className='flex flex-col gap-3  md:flex-row md:items-center justify between px-3'>
          <h1 className='mt-[25px] text-[27px] text-gray-500 font-semibold tracking-wide'>
            {brand === ''
              ? 'Batteries'
              : `${brand} ${model} ${variant}`}
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 mt-[50px]'>
          {brand === ''
            ? products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='w-[400px] sm:w-[500px] h-[500px] mx-auto md:mx-0 border-2 bg-white border-gray-100 overflow-hidden rounded-lg relative flex justify-center hover:scale-105 duration-300'
                  >
                    <div className='w-[30%] h-[30px] absolute flex items-center justify-center text-black rounded-e-full text-[10px] font-bold border-2 border-gray-400 bg-gray-100 left-0 top-[7%]'>
                      <p>{item.warranty} Months Warranty</p>
                    </div>
                    <div className='flex w-full h-full'>
                      <div className='w-[30%] lg:w-[35%] h-[60%] sm:h-[70%] overflow-hidden rounded-lg flex items-center px-2'>
                        <img
                          className='object-cover'
                          src={item.img}  
                          alt={item.type}
                        />
                      </div>
                      <div className=' w-[70%] lg:w-[65%] h-[60%] flex flex-col pt-10 px-6'>
                        <h1 className='text-[20px] mb-6 font-semibold'>
                          {item.type}
                        </h1>
                        <p className='text-[10px] text-gray-400'>
                          SKU: {item.sku}
                        </p>
                        <div className='flex flex-col gap-3'>
                          <p className='text-sm text-gray-400'>
                            {item.description}
                          </p>
                          <div className='flex flex-col'>
                            <p className='font-semibold text-md flex items-center gap-2 text-black'>
                              $ {item.price}{' '}
                              <span className='text-[10px] text-blue-500'>
                                (Exchange with old Battery)
                              </span>
                            </p>
                            <span className='text-[10px] tracking-normal text-black p-0'>
                              (Inclusive of all taxes)
                            </span>
                          </div>
                          <div className='flex flex-col'>
                            <p className='font-semibold text-md flex items-center text-black gap-2'>
                              $ {item.price}{' '}
                              <span className='text-[10px] text-blue-500'>
                                (Buy new Battery)
                              </span>
                            </p>
                            <span className='text-[10px] tracking-normal text-black p-0'>
                              (Inclusive of all taxes)
                            </span>
                          </div>
                          <button className='py-1 flex justify-center items-center bg-[#04b879] text-white rounded-md'>
                            View Details
                          </button>
                        </div>
                      </div>
                      <div className='w-full h-[40%] flex flex-col bottom-0 absolute'>
                        <div className='h-[15%] flex justify-center items-center mx-5 border-b'>
                          <h1 className='text-sm uppercase text-gray-500'>
                            Specs
                          </h1>
                        </div>
                        <div className='mx-5 flex italic py-5 px-2 text-sm justify-between text-black items-center'>
                          <div className='flex flex-col'>
                            {item.specs.map((spec, index) => (
                              <p key={index}>{spec.key}</p>
                            ))}
                          </div>
                          <p className='flex flex-col'>
                            {item.specs.map((spec, index) => (
                              <span key={index}>:</span>
                            ))}
                          </p>
                          <div className='flex flex-col'>
                            {item.specs.map((spec, index) => (
                              <p key={index}>{spec.value}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : products.map((item) => {
                if (item.application.includes(`${brand} ${model} ${variant}`)) {
                  return (
                    <div
                      key={item.id}
                      className='w-[400px] sm:w-[500px] h-[500px] mx-auto md:mx-0 border-2 bg-white border-gray-100 overflow-hidden rounded-lg relative flex justify-center hover:scale-105 duration-300'
                    >
                      {/* Your product card content */}
                    </div>
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
