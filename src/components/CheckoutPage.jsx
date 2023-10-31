import { useState } from 'react';
import toast from 'react-hot-toast';
import Navbar from './Navbar';

const CheckoutPage = () => {
  const [pay, setPay] = useState('');

  // Define dummy cart data
  const cartList = [
    {
      label: 'Product 1',
      price: 10,
      quantity: 2,
    },
    {
      label: 'Product 2',
      price: 15,
      quantity: 1,
    },
  ];

  const getTotalPrice = () => {
    return cartList.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const placeOrder = () => {
    if (pay === '') {
      return toast.error('Select payment method');
    }
    return toast.success('Total: ' + getTotalPrice());
  };

  return (
    <>
    <Navbar/>
      <div className="relative flex max-sm:flex-col px-5 sm:px-10 md:px-20 max-sm:gap-10 py-10 bg-white text-black">
        <div className="w-[70%] max-sm:w-full  flex flex-col gap-4 text-sm px-4 text-black bg-white">
          <div className="flex gap-8">
            <span className="w-1/2">
              <h4 className="break-all">First Name</h4>
              <input
                required
                className="p-3 w-full border border-gray-400 bg-white"
                placeholder="First Name"
                type="text"
              />
            </span>
            <span className="w-1/2">
              <h4 className="break-all">Last Name</h4>
              <input
                required
                className="p-3 w-full border border-gray-400 bg-white"
                placeholder="Last Name"
                type="text"
              />
            </span>
          </div>
          <span className="w-full">
            <h4>Address</h4>
            <input
              required
              type="text"
              className="p-3 w-full border border-gray-400 mb-2 bg-white"
              placeholder="House number and street name"
            />
            <input
              required
              type="text"
              className="p-3 w-full border border-gray-400 bg-white"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </span>
          <span className="w-full">
            <h4>Town / City</h4>
            <input
              required
              type="text"
              className="p-3 w-full border border-gray-400 bg-white"
              placeholder="Town / City"
            />
          </span>
          <span className="w-full">
            <h4>State / Country</h4>
            <input
              required
              type="text"
              className="p-3 w-full border border-gray-400 bg-white"
              placeholder="State / Country"
            />
          </span>
          <span className="w-full">
            <h4>PostCode / ZIP</h4>
            <input
              required
              type="text"
              className="p-3 w-full border border-gray-400 bg-white"
              placeholder="PostCode / ZIP"
            />
          </span>
          <span className="w-full">
            <h4>Email address</h4>
            <input
              required
              type="email"
              className="p-3 w-full border border-gray-400 bg-white"
              placeholder="Email address"
            />
          </span>
          <span className="w-full">
            <h4>Order Notes(optional)</h4>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="p-3 border border-gray-400 h-44 w-full bg-white"
            />
          </span>
        </div>
        <div className="w-[30%] max-sm:w-full sticky top-0 h-fit bg-gray-50 rounded-md sm:mx-4 p-6">
          <div className="">
            <div className="flex justify-between font-semibold border-b border-gray-300 py-3">
              <h3>PRODUCT</h3>
              <h3>SUBTOTAL</h3>
            </div>
            <div className="border-b border-gray-300 py-3 text-sm">
              {cartList.map((item, ind) => (
                <div className="flex justify-between " key={ind}>
                  <h3 className="text-gray-00">{item.label}</h3>
                  <h3 className="text-[#ff0e2c]">{item.price}</h3>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <h3>SUBTOTAL</h3>
              <h3 className="text-[#ff0e2c]">{getTotalPrice()}</h3>
            </div>
            <div className="border-b border-gray-300 py-3">
              <h3>Shipping</h3>
              <h3 className="text-sm">
                Flat Rate: <span className="text-[#ff0e2c]">₹30</span>
              </h3>
            </div>
            <div className="flex justify-between text-xl font-semibold border-b border-gray-300 py-3">
              <h3>Total</h3>
              <h3 className="text-[#ff0e2c]">{getTotalPrice() + 30}</h3>
            </div>
            <div className="flex justify-between py-5">
              <span>
                <input
                  type="radio"
                  id="cash"
                  name="payment_method"
                  value="Cash"
                  checked={pay === 'Cash'}
                  onChange={(e) => setPay(e.target.value)}
                />
                <label> Cash on Delivery</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="online"
                  name="payment_method"
                  value="Online"
                  checked={pay === 'Online'}
                  onChange={(e) => setPay(e.target.value)}
                />
                <label > Pay Online</label>
              </span>
            </div>
            <button
              className="w-full p-3 bg-[#ff0e2c] hover:bg-black transition-all duration-500 text-white font-semibold rounded-full"
              onClick={placeOrder}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
