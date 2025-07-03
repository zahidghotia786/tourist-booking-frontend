import { useState } from 'react';
import formImg from '../assets/formImg.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import emailjs from 'emailjs-com';

export default function BrochureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countrycode: '92'
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, countrycode } = formData;

    let formattedPhone = phone;
    if (phone.startsWith('0')) {
      formattedPhone = phone.substring(1);
      setFormData({ ...formData, phone: formattedPhone });
    }
  

    if (name === '' || email === '' || phone === '' || countrycode === '') {
      setErrorMessage('All fields are required');
    } else {
      alert('Thank you for your interest in our services. We will contact you soon.')
      setErrorMessage('');

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

      // Clear form
      setFormData({ name: '', email: '', phone: '', countrycode: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value.startsWith('0')) {
      setFormData({ ...formData, [name]: value.substring(1) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhoneChange = (value, countryData) => {
    const countryCode = countryData.dialCode;

    setFormData({ ...formData, countrycode: countryCode });
  };

  return (
    <div id='Features' className="container h-max lg:h-[80vh] bg-[#4B504A] rounded mt-[60px] mb-[30px] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2 h-[450px] lg:h-full flex flex-col items-center lg:items-baseline relative">
        <div className="w-full sm:w-[380px] h-[150px] ml-0 sm:ml-[90px] mt-5 flex flex-col items-center">
          <h1 className="text-[28px] font-[400] text-white text-center">Descriptive brochure</h1>
          <div className="w-[70%] h-auto flex justify-between items-center flex-wrap mt-4">
            {/* Categories */}
            <div className="h-max flex w-[120px] items-center mt-2">
              <div className="w-[20px] h-[2px] bg-[#d6d5d5] mr-3"></div>
              <h1 className="text-[15.5px] font-medium text-[#e0e0e0]">LifeStyle</h1>
            </div>
            <div className="h-max flex w-[120px] items-center mt-2">
              <div className="w-[20px] h-[2px] bg-[#d6d5d5] mr-3"></div>
              <h1 className="text-[15.5px] font-medium text-[#e0e0e0]">Gallery</h1>
            </div>
            <div className="h-max flex w-[120px] items-center mt-2">
              <div className="w-[20px] h-[2px] bg-[#d6d5d5] mr-3"></div>
              <h1 className="text-[15.5px] font-medium text-[#e0e0e0]">MasterPlan</h1>
            </div>
            <div className="h-max flex w-[120px] items-center mt-2">
              <div className="w-[20px] h-[2px] bg-[#d6d5d5] mr-3"></div>
              <h1 className="text-[15.5px] font-medium text-[#e0e0e0]">Floor Plan</h1>
            </div>
          </div>
        </div>

        {/* Image with animation */}
        <div className="lg:absolute lg:left-[-80px] lg:bottom-[-180px] animate-swing">
          <img src={formImg} alt="form img" className="w-[400px] lg:w-[660px]" />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center mb-10">
        <div className="w-[320px] h-[340px] relative border border-[#797878] mt-[90px] shadow-2xl flex flex-col justify-center items-center p-5">
          <div className="line"></div>
          <div className="line2"></div>
          <h1 className="mb-5 text-[24px] text-white font-bold">Fill in the form</h1>
          <form className="flex flex-col w-full space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500"
            />
            <div className='flex items-center w-full h-[43px] border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500'>
              <PhoneInput
                country={'pk'}
                value={`+${formData.countrycode}`}
                onChange={handlePhoneChange}
                containerClass="mb-2"
                inputStyle={{
                  width: '85px',
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
                className="p-2 bg-transparent w-[190%] outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-[45px] bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 transition"
            >
              Send
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
