import { useState } from 'react';
import leftImg from '../assets/hero-left.png';
import { RiMoneyDollarBoxLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import brochurePdf from '../assets/brochure.pdf';
import movingImg from '../assets/her-right.png'

export default function Hero() {
  const [countryCode, setCountryCode] = useState('+92');
  const [phoneNumber, setPhoneNumber] = useState(''); 

  const handleDownload = ()=> {
    if(phoneNumber !== ''){
        const link = document.createElement('a');
        link.href = brochurePdf;
        link.setAttribute('download', 'brochure.pdf'); 
        document.body.appendChild(link);
        link.click();
        link.remove();
    } else {
        alert('Please enter a phone number');
    }
  };

  const handlePhoneChange = (value, country) => {
    if (country) {
      setCountryCode(`+${country.dialCode}`); 
      // setPhoneNumber(value); 
    }
  };

  return (
    <div id='Home' className='w-full h-max sm:h-[200vh] lg:h-[105vh] flex-col flex lg:flex-row justify-center items-center mt-[130px] lg:mt-[100px]'>

      {/* Left image */}
      <div className='w-full lg:w-1/2 h-full flex justify-center items-center p-5 sm:p-0'>
        <img src={leftImg} alt="Family-Oriented Villas" className='w-full sm:w-[550px] lg:w-[75%] h-auto lg:h-[75%] rounded-md' />
      </div>

      {/* Right side text & form */}
      <div className='w-full sm:w-[65%] lg:w-1/2 h-full pt-[30px] p-5 sm:p-0'>
        <h1 className='text-[34px] font-[600] text-center lg:text-left text-[#414141] mt-3'>Family-Oriented 3 & 4BR Villas</h1>
        <h3 className='text-[18px] font-[500] text-center lg:text-left font-sans text-[#4B504A]'>in AVENA AT THE VALLEY by EMAAR, Dubai.</h3>
        <div className='w-[140px] h-[5px] bg-[#1b1b1b] rounded mt-2'></div>
        <p className='text-[14.5px] font-[300px] mt-4 font-sans text-[#414141]'>
          Avena at The Valley is a place where modern living meets the gentle touch of nature. 
          This charming community of elegant 4-bedroom villas is designed to offer a sustainable lifestyle, 
          nestled in harmony with the environment.
        </p>

        {/* Price, Plan, and Completion Info */}
        <div className='w-full lg:w-[90%] h-max md:h-[60px] mt-5 flex flex-wrap justify-between items-center'>
          <div className='w-[50%] sm:w-[180px] md:w-[20%] mb-3 mt-3 h-full flex justify-center items-center'>
            <RiMoneyDollarBoxLine className='text-3xl text-[#0B6273] mr-2' />
            <div className='text-center'>
              <h1 className='text-[14px] font-bold text-[#4e4e4e]'>AED 4,362,888</h1>
              <p className='text-[9.5px]'>Starting Price</p>
            </div>
          </div>
          <div className='w-[50%] sm:w-[180px] md:w-[20%] mb-3 mt-3 h-full flex justify-center items-center'>
            <GiMoneyStack className='text-3xl text-[#0B6273] mr-2' />
            <div className='text-center'>
              <h1 className='text-[14px] font-bold text-[#4e4e4e]'>Easy 60/40</h1>
              <p className='text-[9.5px]'>Payment Plan</p>
            </div>
          </div>
          <div className='w-[50%] sm:w-[180px] md:w-[20%] mb-3 mt-3 h-full flex justify-center items-center'>
            <RiMoneyDollarCircleFill className='text-3xl text-[#0B6273] mr-2' />
            <div className='text-center'>
              <h1 className='text-[14px] font-bold text-[#4e4e4e]'>50% DLD</h1>
              <p className='text-[9.5px]'>Payment Plan</p>
            </div>
          </div>
          <div className='w-[50%] sm:w-[180px] md:w-[20%] mb-3 mt-3 h-full flex justify-center items-center'>
            <FaHandHoldingHeart className='text-3xl text-[#0B6273] mr-2' />
            <div className='text-center'>
              <h1 className='text-[14px] font-bold text-[#4e4e4e]'>Q4 2025</h1>
              <p className='text-[9.5px]'>Completion</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className='w-full h-max flex justify-center items-center mt-8 sm:mt-10'>
          <div className='relative w-[100%] lg:w-[420px] h-[300px] lg:h-[270px] bg-[#4B504A] rounded-lg mt-[40px] p-5 flex flex-col items-center'>
            <h1 className='text-white text-[15px] mt-6 font-bold'>
              One-click to download Price List and PDF brochure
            </h1>

            {/* Phone input with country code and flag */}
            <div className="flex items-center border-0 border-b-2 border-white rounded ">
              <div className="flex items-center bg-transparent px-3 py-2 rounded-l-lg ">
                <PhoneInput
                  country={'pk'} 
                  onChange={handlePhoneChange} 
                  inputStyle={{
                    width: '0', 
                    visibility: 'hidden',
                    opacity: 0,
                  }}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                  dropdownStyle={{
                    backgroundColor: '#1E3A8A',
                  }}
                  disableDropdown={false} 
                  disableCountryCode={true} 
                />
                <span className="text-white">{countryCode}</span> 
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} 
                className="block w-full h-[35px] bg-transparent text-white rounded-r-lg appearance-none focus:outline-none focus:ring-0 "
                placeholder="Enter Number"
                required
              />
            </div>

            <button 
              onClick={handleDownload}
              className='w-[70%] h-[50px] bg-[#EA1214] font-bold text-white rounded-lg mt-4 hover:bg-[#56ABE4] transition'>
              Download Price brochure
            </button>
            <p className='mt-4 text-white font-bold'>*Time to download -2 seconds</p>
            <div className='absolute w-max h-max movingImg'>
              <img src={movingImg} className='w-[145px] h-auto' alt="Right side hero" />
            </div>

          </div>
        </div>           
      </div>
    </div>
  );
}
