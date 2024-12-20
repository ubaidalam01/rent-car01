import Link from "next/link";
import React from "react";

const CarDetailsPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="hidden lg:block w-full lg:w-1/5 bg-white p-6 shadow-lg">
  <h3 className="text-lg font-bold mb-4">Filter Cars</h3>

  {/* Type Filter */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">Type</h4>
    <div className="space-y-2">
      {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
        (type, index) => (
          <label key={index} className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2 rounded text-[#3563E9] focus:ring-[#3563E9]"
            />
            {type} <span className="ml-auto text-gray-500">({index + 10})</span>
          </label>
        )
      )}
    </div>
  </div>

  {/* Capacity Filter */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">Capacity</h4>
    <div className="space-y-2">
      {["2 Person", "4 Person", "6 Person", "8 or More"].map(
        (capacity, index) => (
          <label key={index} className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2 rounded text-blue-500 focus:ring-[#3563E9]"
            />
            {capacity}{" "}
            <span className="ml-auto text-gray-500">({index + 10})</span>
          </label>
        )
      )}
    </div>
  </div>

  {/* Price Filter */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">Price</h4>
    <input
      type="range"
      className="w-full"
      min="0"
      max="100"
      defaultValue="50"
    />
    <p className="text-sm text-gray-600 mt-2">Max. $100.00</p>
  </div>
</aside>


      {/* Main Content */}
      <main className="flex-1 p-6 ">
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-around shadow-lg rounded-xl overflow-hidden">
  {/* Left Section */}
  <div className="lg:w-1/2 p-6 bg-[#E0E9F4]">
    <img
      src="cart.svg"
      alt="Car"
      className="w-full rounded-lg object-cover"
    />
    <div className="flex flex-row   gap-2 mt-4 justify-center">
      <img
        src="cart1.svg"
        alt="Thumbnail 1"
        className="h-[100px] w-[120px] md:h-[124px] md:w-[148px] rounded-lg border border-gray-300"
      />
      <img
        src="cart2.svg"
        alt="Thumbnail 2"
        className="h-[100px] w-[120px] md:h-[124px] md:w-[148px] rounded-lg border border-gray-300"
      />
      <img
        src="cart3.svg"
        alt="Thumbnail 3"
        className="h-[100px] w-[120px] md:h-[124px] md:w-[148px] rounded-lg border border-gray-300"
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="lg:w-[492px] w-full p-4 bg-white lg:shadow-lg">
    <h3 className="flex justify-between text-[28px] md:text-[40px] font-bold text-center lg:text-left">
      Nissan GT - R <img src="heart.svg" alt="" />
    </h3>
    <p className="text-gray-500 text-sm text-center lg:text-left">
      ⭐⭐⭐⭐⭐ (420+ Reviews)
    </p>
    <p className="text-base md:text-xl text-gray-600 mt-2 text-center lg:text-left">
      NISMO has become the embodiment of Nissan's <br />
      outstanding performance, inspired by the most <br />
      unforgiving proving ground, the "race track."
    </p>
    <div className="flex flex-col md:flex-row mt-4 gap-6">
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="text-sm md:text-[16px] text-gray-600">
          <strong>Type Car:</strong> Sport
        </p>
        <p className="text-sm md:text-[16px] text-gray-600">
          <strong>Steering:</strong> Manual
        </p>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="text-sm md:text-[16px] text-gray-600">
          <strong>Capacity:</strong> 2 Person
        </p>
        <p className="text-sm md:text-[16px] text-gray-600">
          <strong>Gasoline:</strong> 70L
        </p>
      </div>
    </div>
    <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-base md:text-lg font-bold text-black">
          $80.00/
          <span className="text-[#90A3BF] text-sm">days</span>
        </p>
        <p className="text-xs md:text-sm text-[#90A3BF] line-through">
          $100.00
        </p>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
        <Link href="/Payment">Rent Now</Link>
      </button>
    </div>
  </div>
</div>

        <section className="bg-gray-100 p-4">
  <h2 className="text-2xl font-bold mb-6">Reviews <span className="text-gray-500">(13)</span></h2>

  <div className="review mb-8">
    <div className="review-header flex items-center mb-4">
      <img src="/prof1.svg" alt="Alex Stanton" className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-bold">Alex Stanton</h3>
        <p className="text-gray-500">CEO at Bukalapak</p>
        <p className="text-gray-500">21 July 2022</p>
      </div>
      <div className="rating ml-4">
       <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <p className="text-gray-700">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
  </div>

  <div className="review mb-8">
    <div className="review-header flex items-center mb-4">
      <img src="/prof2.svg" alt="Skylar Dias" className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-bold">Skylar Dias</h3>
        <p className="text-gray-500">CEO at Amazon</p>
        <p className="text-gray-500">20 July 2022</p>
      </div>
      <div className="rating ml-4">
      <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
    <p className="text-gray-700">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
  </div>

  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show All</button>
</section>
        
<div className='min-h-screen bg-[#FFFFFF]'> 
  {/* Heading */}
  <h1 className='text-[#90A3BF] text-3xl font-bold text-start p-2'>Recent Car</h1>
  <h1 className='text-[#3563E9] text-end font-bold p-6'>View all</h1>
  {/* Car Section for Desktop */}
  <div className='flex items-center justify-evenly md:flex-row flex-col space-y-4 md:space-y-0'>
    {/* Car Card 1 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Koenigsegg</h2>
        <img src="heart.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sport</h2>
      <img
        src="car.svg"
        alt="Car"
        className="object-cover mt-4"
      />
      <div className="p-4">
        <img src="specs.svg" alt="" className="w-full" />
        <div className="flex items-center justify-between mt-4 gap-2">
          <p className="text-lg font-bold">
            $99.00/<span className="text-[#90A3BF]">day</span>
          </p>
          <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 2 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Nissan GT - R</h2>
        <img src="like1.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sport</h2>
      <img
        src="car1.svg"
        alt="Car"
        className="object-cover mt-4"
      />
      <div className="p-4">
        <img src="specs1.svg" alt="" className="w-full" />
        <div className="flex items-center justify-between mt-4 gap-2">
          <p className="text-lg font-bold">
            $80.00/<span className="text-[#90A3BF]">day</span>
          </p>
          <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 3 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Rolls - Royce</h2>
        <img src="heart.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sedan</h2>
      <img
        src="car2.svg"
        alt="Car"
        className="object-cover mt-4"
      />
      <div className="p-4">
        <img src="specs2.svg" alt="" className="w-full" />
        <div className="flex items-center justify-between mt-4 gap-2">
          <p className="text-lg font-bold">
            $96.00/<span className="text-[#90A3BF]">day</span>
          </p>
          <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='min-h-screen bg-[#FFFFFF]'> 
  {/* Heading */}
  <h1 className='text-[#90A3BF] text-3xl font-bold text-start p-2'>Recomendation Car</h1>
  <h1 className='text-[#3563E9] text-end font-bold p-6'>View all</h1>
  {/* Car Section for Desktop */}
  <div className='flex items-center justify-evenly md:flex-row flex-col space-y-4 md:space-y-0'>
    {/* Car Card 1 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Koenigsegg</h2>
        <img src="heart.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sport</h2>
      <img
        src="car4.svg"
        alt="Car"
        className="object-cover mt-4"
      />
      <div className="p-4">
        <img src="specs.svg" alt="" className="w-full" />
        <div className="flex items-center justify-between mt-4 gap-2">
          <p className="text-lg font-bold">
            $99.00/<span className="text-[#90A3BF]">day</span>
          </p>
          <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 2 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Nissan GT - R</h2>
        <img src="like1.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sport</h2>
      <img
        src="car5.svg"
        alt="Car"
        className="object-cover mt-4"
      />
      <div className="p-4">
        <img src="specs1.svg" alt="" className="w-full" />
        <div className="flex items-center justify-between mt-4 gap-2">
          <p className="text-lg font-bold">
            $80.00/<span className="text-[#90A3BF]">day</span>
          </p>
          <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 3 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Rolls - Royce</h2>
        <img src="heart.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sedan</h2>
      <img
        src="car6.svg"
        alt="Car"
        className="object-cover mt-4"
      />
      <div className="p-4">
        <img src="specs2.svg" alt="" className="w-full" />
        <div className="flex items-center justify-between mt-4 gap-2">
          <p className="text-lg font-bold">
            $96.00/<span className="text-[#90A3BF]">day</span>
          </p>
          <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
      </main>
    </div>
  );
};

export default CarDetailsPage;
