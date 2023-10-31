import React from 'react'; // You might need to import React
// import { Link } from 'react-router-dom'; // Replace with your preferred routing component
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import cartImg from '../../public/assets/images/products/IMG_20230829_170129-PhotoRoom.png-PhotoRoom.png';
import { Maximize } from '@mui/icons-material';
import Navbar from './Navbar';

const CartPage = () => {
  // Dummy data to replace Redux data
  const cartList = [
    {
      id: 1,
      label: 'Product 1',
      price: 10,
      quantity: 2,
      img: cartImg,
    },
    {
      id: 2,
      label: 'Product 2',
      price: 15,
      quantity: 1,
      img: cartImg,
    },
  ];

  const getTotalPrice = () => {
    // Calculate total price based on dummy data
    return cartList.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const increment = (item) => {
    // Implement your logic for incrementing quantity here
  };

  const decrement = (item) => {
    // Implement your logic for decrementing quantity here
  };

  const remove = (item) => {
    // Implement your logic for removing an item from the cart here
  };

  return (
    <>
    <Navbar/>
    <div className="px-[4%] md:px-[5%] lg:px-[6%] bg-white text-black">
      {cartList.length ? (
        <div className="w-full flex flex-col md:flex-row justify-around py-[50px]">
          <div className="flex flex-col gap-10 md:w-2/3">
            <div className="h-[10px] grid grid-cols-6 gap-5">
              <p className="hidden md:flex justify-center font-semibold">Image</p>
              <p className="hidden md:flex justify-center font-semibold">Name</p>
              <p className="hidden md:flex justify-center font-semibold">Price</p>
              <p className="hidden md:flex justify-center font-semibold">Quantity</p>
              <p className="hidden md:flex justify-center font-semibold">TotalPrice</p>
              <p className="hidden md:flex justify-center font-semibold">Actions</p>
              <p className="md:hidden flex justify-center font-semibold">Items</p>
            </div>
            {cartList.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-6 gap-0 font-Poppins tracking-wider">
                    <div className="hidden md:flex justify-center items-center">
                      <img
                        src={item.img}
                        alt={item.label}
                        width="100"
                        height="100"
                        className="mx-auto"
                      />
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      {item.label} {/* Change to the correct property name */}
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      ${item.price}
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      {item.quantity}
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      ${item.price * item.quantity}
                    </div>
                    <div className="hidden md:flex justify-center items-center gap-3">
                      <button
                        className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md"
                        onClick={() => increment(item)}
                      >
                        <AiOutlinePlus size={24} />
                      </button>
                      <button
                        className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md"
                        onClick={() => decrement(item)}
                      >
                        <AiOutlineMinus size={24} />
                      </button>
                      <button
                        className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md"
                        onClick={() => remove(item)}
                      >
                        <FaTrashAlt size={16}/>
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[180px] flex md:hidden border shadow-md">
                    <div className="w-[30%] h-full flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.label}
                        width="100"
                        height="100"
                        className="mx-auto"
                      />
                    </div>
                    <div className="w-[70%] h-full flex-flex col bg-gray-50 px-[3%]">
                      <div className="w-full h-[75%] flex flex-col justify-center">
                        <h1 className="font-Poppins font-semibold text-[22px]">
                          {item.label}
                        </h1>
                        <p className="font-poppins font-medium text-[12px] text-gray-500">
                          SKU: 858578494757
                        </p>
                        <p className="font-Poppins font-medium text-[14px]">
                          Quantity: {item.quantity}
                        </p>
                        <p className="font-Poppins font-medium text-[14px] mb-3">
                          Price each: ${item.price}
                        </p>
                      </div>
                      <div className="w-full h-[25%] flex items-center justify-end gap-5 py-1">
                        <button
                          className="w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md"
                          onClick={() => increment(item)}
                        >
                          <AiOutlinePlus size={12} />
                        </button>
                        <button
                          className="w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md"
                          onClick={() => decrement(item)}
                        >
                          <AiOutlineMinus size={12} />
                        </button>
                        <button
                          className="w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md"
                          onClick={() => remove(item)}
                        >
                          <FaTrashAlt size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-[50px]">
            <div className="w-[350px] h-[500px] border border-gray-500 px-[2%] py-3">
              <div className="flex flex-col mb-[30px]">
                <h1 className="text-2xl font-Poppins font-medium tracking-wider">
                  Basket Totals
                </h1>
              </div>
              <div className="grid grid-cols-3 mb-[20px]">
                <p className="font-bold">Name</p>
                <p className="font-bold text-center">Quantity</p>
                <p className="font-bold text-right">Total Price</p>
              </div>
              <div className="w-full flex flex-col gap-3 h-[240px] mb-[20px] font-Poppins tracking-wider">
                {cartList.map((item, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <p className="font-medium">{item.label} {/* Change to the correct property name */}</p>
                      <p className="font-medium text-center">{item.quantity}</p>
                      <p className="text-[#ff0e2c] font-medium text-right">
                        ${item.quantity * item.price}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-between items-center mb-4 py-2 border-b">
                <p className="font-semibold font-Poppins tracking-wider">Total</p>
                <p>${getTotalPrice()}</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="bg-[#ff0e2c] py-2 text-center w-[70%] text-white font-Poppins tracking-wider rounded-s-full rounded-e-full">
                  {/* <Link to="/">Proceed to checkout</Link> */}Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <h1>Cart empty</h1>
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
