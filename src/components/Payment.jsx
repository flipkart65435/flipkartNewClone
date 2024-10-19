import React, { useState, useEffect } from 'react';

function PaymentPage() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [amount, setAmount] = useState(null);

  const upiApps = [
    { name: 'Google Pay', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVO9LUWF81Ov6LZR50eDNu5rNFCpkn0LwYQ&s' },
    { name: 'PhonePe', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s' },
    { name: 'Paytm', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzgoGnOSSiaow6ecaZ7aUUVU6BcIIAW4p3Q&s' },
    { name: 'BHIM', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZu9pLEH0LHjH7gwM-cTnHUrIQ0o8mSGfvQ&s' },
  ];

  // Generate random amount when component mounts
  useEffect(() => {
    const randomAmount = Math.floor(Math.random() * (401 - 100)) + 100;
    setAmount(randomAmount);
  }, []);

  const handleAppSelection = (app) => {
    setSelectedApp(app);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Choose Your UPI App</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {upiApps.map((app) => (
          <button
            key={app.name}
            onClick={() => handleAppSelection(app)}
            className={`flex items-center justify-center p-4 bg-white rounded shadow ${selectedApp?.name === app.name ? 'border-2 border-blue-500' : ''
              }`}
          >
            <img className='w-10 mr-3' src={app.icon} alt="" />
            <span>{app.name}</span>
          </button>
        ))}
      </div>

      {amount && (
        <div className="mt-6 text-center">
          <p className="text-lg">
            Amount to Pay: <span className="font-semibold">₹{amount}</span>
          </p>
        </div>
      )}
      <a href={`upi://pay?pa=gwalextm@slice&pn=Flipkart&am=${amount}&cu=INR&tn=Payment%20via%20Google%20Pay`}>
      <button
        className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg"
        >
        Checkout
      </button>
      </a>

      {selectedApp && (
        <div className="mt-6 text-center">
          <p className="mt-2">Using {selectedApp.name}</p>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;








//