import React, { useState, useEffect } from 'react';
import Card from './Card'

function LandingPage() {
  const [count, setCount] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);


    return () => clearInterval(timerId);
  }, []);


  const cardData = [
    {
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/z/l/f/buds-pro-2-oneplus-original-imaghtn6pfhr9yya.jpeg?q=70&crop=false',
      title: 'OnePlus Buds Pro 2',
      Originalprice: 14999,
      discountedPrice: 134,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/h/o/l/-original-imagn457wuvstxfu.jpeg?q=70&crop=false',
      title: 'OnePlus Buds Pro 2',
      Originalprice: 14999,
      discountedPrice: 162,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/m/j/b/0-5-12-mm-op-11-cordless-professional-hair-trimmer-titanium-original-imah4yratkdtncw2.jpeg?q=70',
      title: "OnePlus OP 11 Cordless Professional Hair Trimmer ",
      Originalprice: 3599,
      discountedPrice: 237,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/h/h/-original-imah3j8rpsqwzjkz.jpeg?q=70',
      title: "Boult Crown 1.95'' Screen, BT Calling, Working Crown, Zinc Alloy Frame",
      Originalprice: 14999,
      discountedPrice: 158,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/room-heater/z/v/k/7020-glen-2000-original-imag8uye8jgg9erg.jpeg?q=70',
      title: 'Glen 7020 Electric room Heater with 2 Heat Settings',
      Originalprice: 2599,
      discountedPrice: 364,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70',
      title: 'Mi 20000 mAh 18 W Power Bank',
      Originalprice: 1700,
      discountedPrice: 359,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/i/e/g/-original-imah45qhfy8wfe8t.jpeg?q=70',
      title: 'Boult Bassbox X60 with Subwoofer, 60W Power, 2.1 Channel',
      Originalprice: 9999,
      discountedPrice: 452,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/h/g/r/-original-imah2pguxst5hacc.jpeg?q=70',
      title: 'Boult Astra with Quad Mic ENC, 48Hrs Battery',
      Originalprice: 4999,
      discountedPrice: 258,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/e/v/g/ve011180-wipro-original-imagz7affezfnzmh.jpeg?q=70',
      title: 'Wipro VE011180 Electric Kettle',
      Originalprice: 999,
      discountedPrice: 348,
      discountpercent: 99
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70',
      title: 'SONY WH-CH720N Active Noise Cancelling',
      Originalprice: 6599,
      discountedPrice: 199,
      discountpercent: 99
    }
  ]

  const topOffers = [
    {
      img: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/085406bae47866d5.png?q=100',
      title: 'Top Offers'
    },
    {
      img: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/64f1cc66052c66ef.png?q=100',
      title: 'Mobiles'
    },
    {
      img: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1fd83847b32a09d1.png?q=100',
      title: 'Electronic'
    },
    {
      img: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6c0716819ac55121.png?q=100',
      title: "TV's"
    },
    {
      img: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6dbed7ba5417672f.jpg?q=100',
      title: 'Fashion'
    },
  ]


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-[100%] flex flex-col items-center justify-center mx-auto">

      <div className='flex items-center justify-between w-[100%]'>
        {topOffers.map((offer, index) => (
          <div className='flex flex-col items-center justify-between'>
            <img className='w-14' src={offer.img} alt="" />
            <h2 className='text-center text-sm'>{offer.title}</h2>
        </div>
        ))}
      </div>

      <div>
        <img src="https://bbd.super-deel.site/sp/public/iphone.jpg" alt="" />
      </div>
      <div className="h-24 w-full flex flex-col items-center justify-center mx-auto">
        <h1 className='text-xl font-bold text-blue-500'>Deals of the Day</h1>
        <h2>Time Remaining: {formatTime(count)}</h2>
        <button className='text-red-500 font-bold bg-zinc-100 px-3 py-2 rounded-lg'>Sale is Live</button>
      </div>

      <div className='w-full flex gap-2 flex-wrap items-center justify-center'>
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
