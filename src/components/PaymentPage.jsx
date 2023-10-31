import  { useState } from 'react';
import Navbar from './Navbar';

// Import your payment-related image
// import paymentImage from './payment.png';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    // Implement your payment logic here
    alert('Payment successful!');
  };

  return (
    <>
    <Navbar/>
    <div className="w-full h-full relative inset-0 flex items-center justify-center bg-white">
      <div className="w-[800px] bg-white p-6 rounded-lg shadow-md grid grid-cols-2 gap-8 my-[5%]">
    
      <div>
          <img src="https://www.clio.com/wp-content/uploads/2022/11/Illustration_Blog_Lawyer-Payment-Methods.png" alt="Payment" className="w-full h-full object-cover" />
        </div>

        {/* <CloseIcon
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => alert('Close button clicked')}
        /> */}
        <div>
          <h1 className="text-3xl font-bold text-[#FF0E2C] mb-6 text-center">Secure Payment</h1>
          <form onSubmit={handlePayment}>
            <div className="mb-4 bg-white">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={paymentData.cardNumber}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-3 rounded-lg text-lg focus:outline-none bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="cardHolder"
                placeholder="Card Holder"
                value={paymentData.cardHolder}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-3 rounded-lg text-lg focus:outline-none bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="expirationDate"
                placeholder="MM/YY"
                value={paymentData.expirationDate}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-3 rounded-lg text-lg focus:outline-none bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={paymentData.cvv}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-3 rounded-lg text-lg focus:outline-none bg-white text-black"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#FF0E2C] text-white font-semibold rounded-lg text-xl hover:bg-opacity-90 cursor-pointer"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default PaymentPage;
