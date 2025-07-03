import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import axios from 'axios';
import emailjs from 'emailjs-com';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' , countrycode: '92' });

  const handlePhoneChange = (value, countryData) => {
    const countryCode = countryData.dialCode;
    setFormData({ ...formData, countrycode: countryCode });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value.startsWith('0')) {
      setFormData({ ...formData, [name]: value.substring(1) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, countrycode } = formData;

    if (name === '' || email === '' || phone === '' || countrycode === '') {
      alert('All fields are required');
    } else {
      alert('Thank you for your interest in our services. We will contact you soon.');
      try {
        await emailjs.send(
          'service_1234', 
          'template_4q9owcs', 
          {
            from_name: name,
            from_email: email,
            phone_number: `+${countrycode} ${phone}`, 
            message: `A visitor with the following details wants to contact you: Name: ${name}, Email: ${email}, Phone: ${phone}`,
          },
          'yHq_PN54VRcXFTlKw' 
        );
        console.log('Email successfully sent to the website owner');
      } catch (error) {
        console.error('Failed to send the email:', error);
      }

      await axios.post('http://localhost:3000/users', formData);

      setFormData({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div id='Contact' className="container h-max bg-[#001D35] flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 h-max p-10">
        <h1 className="text-[36px] sm:text-[42px] font-[300] text-white w-[90%] sm:w-[50%] md:w-[40%] lg:w-[50%]">Our Expert Will Help You</h1>
        <h1 className="text-[32px] sm:text-[38px] text-[#56ABE4]">Buy The Best</h1>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 h-max p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full h-[35px] bg-transparent text-white border-0 border-b-2 border-white rounded appearance-none focus:outline-none focus:ring-0 focus:border-[#56ABE4] peer"
              placeholder=" "
              required
              onChange={handleInputChange}
            />
            <label
              htmlFor="name"
              className="absolute text-white peer-focus:text-blue-600 duration-300 transform -translate-y-6 scale-75 top-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name*
            </label>
          </div>

          {/* Gmail Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full h-[35px] bg-transparent text-white border-0 border-b-2 border-white rounded appearance-none focus:outline-none focus:ring-0 focus:border-[#56ABE4] peer"
              placeholder=" "
              pattern=".+@gmail\.com"
              required
              onChange={handleInputChange}
            />
            <label
              htmlFor="email"
              className="absolute text-white peer-focus:text-blue-600 duration-300 transform -translate-y-6 scale-75 top-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Gmail*
            </label>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">
              Phone number *
            </label>
            <div className='flex items-center w-full h-[43px] border-b rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500'>
              <PhoneInput
                country={'pk'}
                value={`+${formData.countrycode}`}
                onChange={handlePhoneChange}
                containerClass="mb-2"
                inputStyle={{
                  width: '100px',
                  height: '52px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: 'none',
                  outline: 'none',
                  paddingTop: '6px'
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: '0px',
                  boxShadow: 'none',
                }}
                countryCodeEditable={false}
                enableSearch={true}
                inputProps={{
                  name: 'countrycode',
                  autoFocus: true,
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="p-2 bg-transparent w-[290%] outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-black font-bold rounded-md hover:bg-[#56ABE4] focus:outline-none focus:ring-2 focus:ring-[#56ABE4]"
          >
            Request A Call Back
          </button>
        </form>
      </div>
    </div>
  );
}
