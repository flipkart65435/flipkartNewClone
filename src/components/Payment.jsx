import React, { useState, useEffect } from 'react';
import QR from '../assets/images/image.png';

function PaymentPage() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [amount, setAmount] = useState(null);
  const [show, setShow] = useState(false);

  const upiApps = [
    { name: 'Google Pay', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVO9LUWF81Ov6LZR50eDNu5rNFCpkn0LwYQ&s' },
    { name: 'PhonePe', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s' },
    { name: 'Paytm', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzgoGnOSSiaow6ecaZ7aUUVU6BcIIAW4p3Q&s' },
    { name: 'BHIM', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZu9pLEH0LHjH7gwM-cTnHUrIQ0o8mSGfvQ&s' },
  ];

  useEffect(() => {
    const randomAmount = Math.floor(Math.random() * (401 - 100)) + 100;
    setAmount(randomAmount);
  }, []);

  const handleClick = () => {
    setShow(!show);
  };

  const handleCopyClick = () => {
    const textToCopy = 'gpay-11176859178@okbizaxis'; // Define the text to be copied
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Choose Your UPI App</h1>

      <div className="flex flex-col items-center justify-center">
        <img src={QR} alt="QR Code" />
        <h4>gpay-11176859178@okbizaxis</h4>
        <button className="px-3 py-2 rounded-lg bg-yellow-400" onClick={handleCopyClick}>Copy</button>
      </div>

      {amount && (
        <div className="mt-6 text-center">
          <p className="text-lg">
            Amount to Pay: <span className="font-semibold">₹{amount}</span>
          </p>
        </div>
      )}

      <div className="w-80 flex flex-col">
        <input className="p-4 rounded-lg w-full" type="text" placeholder="Transaction ID" />
        <button onClick={handleClick} className="mt-4 rounded-lg px-3 py-2 bg-blue-500 text-zinc-50">Confirm Order</button>
      </div>

      <div className={`${show ? "absolute" : "hidden"} h-screen w-full bg-green-400 flex items-center justify-center`}>
        Your Order was Successful
      </div>

      {selectedApp && (
        <div className="mt-6 text-center">
          <p className="mt-2">Using {selectedApp.name}</p>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
