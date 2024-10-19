import React from 'react';
import {Link} from 'react-router-dom'

function Card({ card }) {
  return (
    <Link className='w-[40%] m-4 p-4 h-72 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center bg-white' to='/checkout'>
      <div className="flex justify-center mb-4 overflow-hidden">
        <img className="w-full h-full object-cover rounded-md" src={card.image} alt={card.title} />
      </div>

      <div className="text-center">
        <h1 className="font-semibold mb-2 text-xs">{card.title}</h1>
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-gray-500 line-through text-sm">₹{card.Originalprice}</p>
          <p className="text-lg font-bold text-red-600">₹{card.discountedPrice}</p>
        </div>
        <p className="text-green-500 font-semibold">{card.discountpercent}% off</p>
      </div>
    </Link>
  );
}

export default Card;
