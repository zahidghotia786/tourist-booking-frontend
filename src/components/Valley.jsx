import valleyImg from '../assets/valley.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import brochurePdf from '../assets/brochure.pdf';
import { useState } from 'react';
import movingImg from '../assets/her-right.png'
import { FaXmark } from "react-icons/fa6";
import greenImg from '../assets/green.png';
import hoursImg from '../assets/hours.png';
import outdoorImg from '../assets/outdoor.png';
import kidsImg from '../assets/kids.png';


export default function Valley() {
  const [toggle, setToggle] = useState(false);
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
    <div id='About' className="w-full h-max flex flex-col items-center pb-4">
      <div className="container mt-[100px] text-[27px] font-[400] text-[#414147] flex flex-col lg:flex-row justify-around items-center">
        <h1>Avena The Valley Villas by EMAAR Dubai</h1>
        <div className="w-[140px] h-[4px] bg-[#414147] rounded"></div>
      </div>

      <div className="container flex flex-col lg:flex-row mt-10">
        <div className="w-full lg:w-1/2 p-3 sm:p-0">
          <img src={valleyImg} alt="valley img" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-1/2 pl-5 p-1 pr-3">
          <p
            className="text-[15px] lg:text-[14px] font-[400] font-sans text-[#363636] mt-10 lg:mt-0 mb-3 lg:mb-0"
            style={{ lineHeight: '25px' }}
          >
            A quaint new town where life finds its inspiration amidst the vast shimmering sands and lush green open spaces. Welcome to The Valley by Emaar Properties — the perfect place for you to empower your dreams and become the innovators and visionaries that will lead the future of the world. The Valley by Emaar is an oasis of luxury nestled in the heart of the UAE, offering serene landscapes, world-class amenities, and unparalleled sophistication. Experience the epitome of modern living amidst the charm of the desert, where innovation meets tradition in every corner. Discover a harmonious blend of urban convenience and natural beauty, where every day presents new opportunities for exploration and growth. Come, embark on a journey of endless possibilities at The Valley by Emaar.
          </p>

          <button
            onClick={() => setToggle(true)}
            className="w-full sm:w-[70%] h-[50px] bg-[#EA1214] text-white rounded-lg mt-4 hover:bg-[#56ABE4] transition"
          >
            Request Available Units and Price
          </button>

          {toggle && (
            <div className='fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center bg-gray-600 z-50 bg-opacity-70'>
            <div className="w-max h-max flex justify-center items-center mt-2 sm:mt-5">
              <div className="relative w-[100%] lg:w-[420px] h-[300px] lg:h-[270px] bg-[#4B504A] rounded-lg mt-[40px] p-5 flex flex-col items-center">


                <div className="flex items-center border-0 border-b-2 border-white rounded mt-5 ">
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

            <h1 className="text-white text-[15px] mt-6 font-bold text-center">
                  One-click to download Available Units and Price brochure
                </h1>

                <button
                  onClick={handleDownload}
                  className="w-[70%] h-[50px] bg-[#EA1214] font-bold text-white rounded-lg mt-4 hover:bg-[#56ABE4] transition"
                >
                  Download a brochure
                </button>
                <p className="mt-4 text-white font-bold">*Time to download -2 seconds</p>
                <div className="absolute w-max h-max movingImg">
                  <img src={movingImg} className="w-[145px] h-auto" />
                </div>
                <FaXmark onClick={() => setToggle(false)} className='absolute right-2 sm:right-[-20px] top-2 sm:top-[-30px] text-2xl cursor-pointer text-white'/>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>


         
         {/* about options  */}

         <div className='w-full h-auto md:h-[28vh] mt-[70px] flex justify-center items-center'>
           <div className='container h-full flex flex-col sm:flex-row justify-around md:justify-between flex-nowrap sm:flex-wrap items-center'>
            <div className='w-[250px] sm:w-[270px] md:w-[22%] h-max sm:h-full pb-2 shadow-xl sm:shadow-2xl border border-[#f3f2f2] flex flex-col justify-center items-center'>
              <img src={greenImg} alt="green plot" className='w-[60px] opacity-20'/>
              <h1 className='text-[#56ABE4] text-[24px] font-bold mt-2'>Green</h1>
              <p className='text-[15px] mt-3 text-gray-600 font-semibold'>Connecting</p>
            </div>
            <div className='w-[250px] sm:w-[270px] md:w-[22%] h-max sm:h-full pb-2 mt-10 sm:mt-0 shadow-xl sm:shadow-2xl border border-[#f3f2f2] flex flex-col justify-center items-center'>
              <img src={hoursImg} alt="24hrs img" className='w-[60px] opacity-20'/>
              <h1 className='text-[#56ABE4] text-[24px] font-bold mt-2'>24/7</h1>
              <p className='text-[15px] mt-3 text-gray-600 font-semibold'>CCTV</p>
            </div>
            <div className='w-[250px] sm:w-[270px] md:w-[22%] h-max sm:h-full pb-2 mt-10 sm:mt-10 lg:mt-0 shadow-xl sm:shadow-2xl border border-[#f3f2f2] flex flex-col justify-center items-center'>
              <img src={outdoorImg} alt="outdoor img" className='w-[60px] opacity-20'/>
              <h1 className='text-[#56ABE4] text-[24px] font-bold mt-2'>Outdoor</h1>
              <p className='text-[15px] mt-3 text-gray-600 font-semibold'>Poll</p>
            </div>
            <div className='w-[250px] sm:w-[270px] md:w-[22%] h-max sm:h-full pb-2 mt-10 sm:mt-10 lg:mt-0 shadow-xl sm:shadow-2xl border border-[#f3f2f2] flex flex-col justify-center items-center'>
              <img src={kidsImg} alt="kids img" className='w-[60px] opacity-20'/>
              <h1 className='text-[#56ABE4] text-[24px] font-bold mt-2'>Kids</h1>
              <p className='text-[15px] mt-3 text-gray-600 font-semibold'>Play</p>
            </div>
           </div>
         </div>
    </div>
  );
}
