import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShippingForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    pincode: '',
    house: '',
    area: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here, e.g., API call
    console.log('Form submitted:', formData);
  };

  return (
    <section className="mt-12 mb-12">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12">
            <form className="shipping_calculator" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2 mb-6">
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="PIN Code"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="house"
                    value={formData.house}
                    onChange={handleChange}
                    placeholder="Flat, House no, Building, Company"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Area, Colony, Street, Sector, Village"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Town / City"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full px-2 mb-4">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="w-full px-2">
                <Link to='/payment'>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
                >
                  Proceed to Pay
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingForm;
