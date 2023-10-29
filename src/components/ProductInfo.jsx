import  { useState } from 'react';
// import Footer from './Footer'; // Replace with the actual path to your Footer component
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductImg from '../../public/assets/images/products/IMG_20230829_170129-PhotoRoom.png-PhotoRoom.png'

const ProductInfo = () => {
  const [pricetype, setPricetype] = useState('new');
  const [numitem, setNumitem] = useState(1);
  const [value, setValue] = useState(5);

  const handleplus = () => {
    setNumitem(numitem + 1);
  };

  const handleminus = () => {
    if (numitem === 1) {
      return;
    }
    setNumitem(numitem - 1);
  };

  const addtocart = () => {
    // Implement your logic to add the item to the cart here
    console.log('Item added to the cart');
  };

  return (
    <div className="w-full h-full">
      {dummyProductData.map((item) => (
        <div key={item.id}>
          <div className="bg-gray-100 w-full md:h-[600px] h-[1200px] py-[2%] px-[2%] xl:px-[18%]">
            <div className="w-full py-3">
              <p className="text-gray-400 font-Poppins capitalize text-sm tracking-widest">
                / products / info / {item.label}
              </p>
            </div>
            <div className="w-full h-full flex gap-16 flex-col md:flex-row items-center md:justify-between py-[3%]">
              <div className="w-[90%] md:w-[40%] h-[50%] md:h-[90%]">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <img className="w-[60%] h-[60%]" src={item.img} alt={item.label} />
                </div>
              </div>
              <div className="w-[90%] md:w-[50%] md:h-[90%]">
                <div className="w-full h-full flex flex-col gap-5">
                  <h1 className="text-3xl text-gray-800 font-Poppins">{item.type}</h1>
                  <h1 className="text-[25px] text-gray-400">${item.price} - ${item.price}</h1>
                  <FormControl required sx={{ minWidth: 100, maxWidth: 200, backgroundColor: 'white', marginY: '10px' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Buy new or Exchange</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      autowidth="true"
                      value={pricetype}
                      onChange={(e) => setPricetype(e.target.value)}
                      label="Buy new or Exchange"
                    >
                      <MenuItem value="new">Buy New</MenuItem>
                      <MenuItem value="old">Exchange</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="flex gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={numitem}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                        className="relative text-center py-3 w-[165px] rounded-s-full rounded-e-full border-2 focus:outline-none"
                      />
                      <RemoveIcon
                        sx={{ color: 'lightgray' }}
                        onClick={handleminus}
                        className="absolute left-2 top-[25%] cursor-pointer"
                      />
                      <AddIcon
                        sx={{ color: 'lightgray' }}
                        onClick={handleplus}
                        className="absolute right-2 top-[25%] cursor-pointer"
                      />
                    </div>
                    <button
                      className="uppercase tracking-tight text-[15px] font-bold text-white bg-[#ff0e2c] rounded-s-full rounded-e-full py-3 text-center px-4 hover:scale-105 duration-300"
                      onClick={addtocart}
                    >
                      Add to basket
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-5">SKU: 874585746475858</p>
                  <p className="text-sm">
                    <span className="text-gray-400">Warranty: </span>
                    {item.warranty}
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-400">Dimensions: </span>
                    {item.specs.map((obj) => {
                      if (obj.key === 'Max Overall Dimension') {
                        return obj.value;
                      }
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-[450px] px-[4%] xl:px-[12%]">
            <div className="w-[700px] py-[5%]">
              <h1 className="font-bold font-Poppins tracking-wider text-lg mb-2 text-black">Rate this product</h1>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <h1 className="mt-3 font-bold font-Poppins tracking-wider text-lg mb-5 text-black">Write a Review</h1>
              <div className="w-[400px] h-[150px] relative">
                <textarea className="w-full h-full focus:outline-none border-2 text-sm text-gray-500 bg-white p-3" />
                <button className="bg-[#ff0e2c] uppercase font-bold text-sm text-white py-2 px-3 absolute bottom-[-35%] right-0">
                  Submit
                </button>
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

const dummyProductData = [
  {
    id: 1,
    label: 'dummy-product-1',
    img: ProductImg,
    type: 'Product 1',
    price: 100,
    warranty: '1 Year',
    specs: [{ key: 'Max Overall Dimension', value: '10cm' }],
  }
  // Add more dummy product data as needed
];

export default ProductInfo;
