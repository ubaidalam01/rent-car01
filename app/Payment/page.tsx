import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
<div className="flex flex-col justify-between gap-8 px-4 py-6 bg-gray-100">
 <div className="flex flex-col-reverse md:flex-row gap-2">
  <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
    <h2 className="text-xl font-bold mb-4">Billing Info</h2>
    <h2 className='text-[#90A3BF]'>Please enter your billing info</h2>
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-black mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-black mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
            placeholder="Your Phone"
          />
        </div>
        <div>
          <label className="block text-black mb-1">Address</label>
          <input
            type="text"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
            placeholder="Your Address"
          />
        </div>
        <div>
          <label className="block text-black mb-1">Town/City</label>
          <input
            type="text"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
            placeholder="City"
          />
        </div>
      </div>
    </form>
  </div>
  {/* Rental Summary */}
  <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
    <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
    <div className="flex items-center gap-4">
      <img
        src="/Look.svg"
        alt="Nissan GT-R"
        className=" object-cover rounded-md"
      />
      <div>
        <h3 className="text-lg font-bold">Nissan GT-R</h3>
        <p className="text-gray-500 text-sm">Supercar</p>
      </div>
    </div>
    <div className="mt-4">
      <div className="flex justify-between">
        <p className="text-gray-600">Subtotal:</p>
        <p className="font-bold">$80.00</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-gray-600">Tax:</p>
        <p className="font-bold">$0.00</p>
      </div>
      <div className='flex'>
        <input type="text" className='w-[295px] h-[40px] bg-[#F6F7F9] rounded-lg rounded-r-none' placeholder='Apply promo code'/> 
        <button className='bg-[#F6F7F9] rounded-lg h-[40px]'>Apply Now</button>
      </div>
      <div className="flex justify-between mt-4 text-lg font-bold">
        <p className='text-xl'>Total Rental Price:</p>
        <p>$80.00</p>
      </div>
    </div>
    <p className="text-gray-500">
      Overall price includes rental discount
    </p>  
  </div>
  
</div>


  <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
    {/* Rental Info Section */}
    <h2 className="text-xl font-bold mb-4">Rental Info</h2>
    <h2 className='text-[#90A3BF] mb-2'>Please select your rental date</h2>
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 mb-1">Pickup Location</label>
          <input
            type="text"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
            placeholder="Enter Pickup Location"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Pickup Date</label>
          <input
            type="date"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Return Location</label>
          <input
            type="text"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
            placeholder="Enter Return Location"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Return Date</label>
          <input
            type="date"
            className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
          />
        </div>
      </div>
    </form>
  </div>

  {/* Payment Method Section */}
  <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
      <p className="text-sm text-gray-500">Step 3 of 4</p>
    </div>
    <p className="text-sm text-[#90A3BF] mb-6">Please enter your payment method</p>
    <div className="border p-4 rounded-lg bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <span className='mr-1'>
            <img src="mark.svg" alt="" />
          </span>
          <span className="text-gray-800 font-medium">Credit Card</span>
        </label>
        <div className="flex space-x-2">
          <img src="/Visa.svg" alt="Visa" className="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-500 mb-1">Card Number</label>
          <input
            type="text"
            placeholder="Card number"
            className="w-full h-[56px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">Expiration Date</label>
          <input
            type="text"
            placeholder="DD / MM / YY"
            className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">Card Holder</label>
          <input
            type="text"
            placeholder="Card holder"
            className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">CVC</label>
          <input
            type="text"
            placeholder="CVC"
            className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
      <label className="flex items-center">
        <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
        <span className="text-gray-800 font-medium">PayPal</span>
      </label>
      <img src="/PayPal.svg" alt="PayPal" className="" />
    </div>
    <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
      <label className="flex items-center">
        <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
        <span className="text-gray-800 font-medium">Bitcoin</span>
      </label>
      <img src="/Bitcoin.svg" alt="Bitcoin" className="" />
    </div>
  </div>

  {/* Confirmation Section */}
  <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Confirmation</h2>
        <p className="text-sm text-gray-500">We are getting to the end. Just a few clicks and your rental is ready!</p>
      </div>
      <span className="text-sm text-gray-500 mr-10">Step 4 of 4</span>
    </div>
    <div className="space-y-4 mb-6">
      <label className="flex items-center w-full md:w-[770px] h-[56px] rounded-md bg-[#F6F7F9] space-x-3">
        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
        <span className="text-black">I agree with sending marketing and newsletter emails. No spam, promised!</span>
      </label>
      <label className="flex items-center w-full md:w-[770px] h-[56px] rounded-md bg-[#F6F7F9] space-x-3">
        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
        <span className="text-black">I agree with our terms and conditions and privacy policy.</span>
      </label>
    </div>
    <Link href='/Dashboard'>
    <button className="w-full md:w-[140px] py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
     Rent now
    </button>
    </Link>
    <div className="flex items-start space-x-4 mt-6">
      <img src="/safe.svg" alt="Safe" className="w-6 h-6" />
      <div>
        <p className="text-gray-800 font-medium">All your data are safe</p>
        <p className="text-sm text-gray-500">We are using the most advanced security to provide you the best experience ever.</p>
      </div>
    </div>
  </div>
</div>


  );
};

export default page;
