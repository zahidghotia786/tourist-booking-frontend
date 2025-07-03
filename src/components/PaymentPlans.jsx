import { useState } from "react";
import floorPlanPdf from '../assets/floorpdf.pdf'
import movingImg from '../assets/her-right.png'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaXmark } from "react-icons/fa6";



export default function PaymentPlans() {
  const [toggle, setToggle] = useState(false);
  const [activeButton, setActiveButton] = useState('standard'); 
  const [phone, setPhone] = useState('');

  const handleChange = (buttonName) => {
    setActiveButton(buttonName); 
  };

  const handleDownloadPlan = () => {
    if (phone !== '') {
        const link = document.createElement('a');
        link.href = floorPlanPdf;
        link.setAttribute('download', 'floorPlan.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    } else {
        alert('Please enter phone number');
    }
};

  return (
    <div id="Payment Plan" className="container border p-7 mt-[70px] h-max mb-10">
      <h1 className="text-[34px] font-bold text-[#414141]">Payment Plans</h1>

      <div className="w-full h-max border-2 mt-4 flex flex-col sm:flex-row items-center relative">

        <div className="relative mr-4">
          <button
            onClick={() => handleChange('standard')}
            className={`h-[55px] cursor-pointer text-[16px] font-[600] pl-2 pr-2 ${
              activeButton === 'standard' ? 'text-blue-500' : 'text-[#666666]'
            }`}
          >
            STANDARD PAYMENT PLAN
          </button>
          <div
            className={`absolute h-[3px] bg-blue-500 right-0 bottom-0 sm:bottom-[-2px] transition-all duration-500 ease-in-out ${
              activeButton === 'standard' ? 'w-[100%] right-0' : 'w-[0%] translate-x-full'
            }`}
            style={{
              transform: activeButton === 'standard' ? 'translateX(0)' : 'translateX(0%)',
              right: 0,
            }}
          ></div>
        </div>

        <div className="relative">
          <button
            onClick={() => handleChange('postHandover')}
            className={`h-[55px] cursor-pointer text-[16px] font-[600] pl-2 pr-2 ${
              activeButton === 'postHandover' ? 'text-blue-500' : 'text-[#666666]'
            }`}
          >
            3 YEARS POST HANDOVER (50/50)
          </button>
          <div
            className={`absolute h-[3px] bg-blue-500 left-0 bottom-0 sm:bottom-[-2px] transition-all duration-500 ease-in-out ${
              activeButton === 'postHandover' ? 'w-[97%]' : 'w-[0%] translate-x-full'
            }`}
            style={{
              transform: activeButton === 'postHandover' ? 'translateX(0)' : 'translateX(0%)',
              left: 0,
            }}
          ></div>
        </div>
      </div>


             {/* block */}

             <div className="w-full h-max mt-10 flex flex-wrap justify-center sm:justify-between items-center">
                <div className="border border-gray-100 w-[80%] sm:w-[250px] md:w-[23%] h-[160px] shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-[#3a3a3a] mb-2 text-[28px] font-bold">{
                     activeButton === 'postHandover' ? '20%' : '10%'
                        }
                    </h1>
                    <p className="text-[18px] font-medium text-center text-[#3a3a3a]">Down Payment</p>
                </div>
                <div className="border border-gray-100 w-[80%] sm:w-[250px] md:w-[23%] h-[160px] shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-[#3a3a3a] mb-2 text-[28px] font-bold">{
                        activeButton === 'postHandover' ? '1%' : '0.5%'
                        }</h1>
                    <p className="text-[18px] font-medium text-center text-[#3a3a3a]">Monthly {activeButton === 'postHandover' ? '36' : '20'} Installments</p>
                </div>
                <div className="border border-gray-100 w-[80%] sm:w-[250px] md:w-[23%] h-[160px] shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-[#3a3a3a] mb-2 text-[28px] font-bold">{activeButton === 'postHandover' ? '10%' : '5%'}</h1>
                    <p className="text-[18px] font-medium text-center text-[#3a3a3a]">Every 6 Months ({activeButton === 'postHandover' ? '6' : '4'} Installments)</p>
                </div>
                <div className="border border-gray-100 w-[80%] sm:w-[250px] md:w-[23%] h-[160px] shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-[#3a3a3a] mb-2 text-[28px] font-bold">{activeButton === 'postHandover' ? '40%' : '60%'}</h1>
                    <p className="text-[18px] font-medium text-center text-[#3a3a3a]">On Handover</p>
                </div>
             </div>
                        

                                    <button 
                                    onClick={() => setToggle(true)}
                                    className='w-full sm:w-max h-max sm:h-[50px] bg-[#EA1214] text-white rounded-lg mt-6 p-2 pl-4 pr-4 hover:bg-[#56ABE4] transition'>
                                   Download complete payment plan.pdf
                                  </button>


                                  {toggle && (
                    <div className='fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center bg-gray-600 z-50 bg-opacity-70'>
                        <div className="w-max h-max flex justify-center items-center mt-2 sm:mt-5">
                            <div className="relative w-[100%] lg:w-[420px] h-[300px] lg:h-[270px] bg-[#4B504A] rounded-lg mt-[40px] p-5 flex flex-col items-center">
                                <h1 className="text-white text-[15px] mt-6 font-bold">
                                    One-click to download Floor Plan brochure
                                </h1>

                                <div className="w-[70%] mt-5">
                                    <PhoneInput
                                        country={'us'}
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                        containerClass="mb-2"
                                        inputStyle={{ width: '100%', height: '43px' }}
                                        buttonStyle={{ borderRadius: '5px 0 0 5px' }}
                                    />
                                </div>

                                <button
                                    onClick={handleDownloadPlan}
                                    className="w-[70%] h-[50px] bg-[#EA1214] font-bold text-white rounded-lg mt-4 hover:bg-[#56ABE4] transition"
                                >
                                    Download Floor Plan.pdf
                                </button>
                                <p className="mt-4 text-white font-bold">*Time to download -2 seconds</p>
                                <div className="absolute w-max h-max movingImg">
                                    <img src={movingImg} className="w-[145px] h-auto" />
                                </div>
                                <FaXmark onClick={() => setToggle(false)} className='absolute right-2 sm:right-[-20px] top-2 sm:top-[-30px] text-2xl cursor-pointer text-white' />
                            </div>
                        </div>
                    </div>
                )}
    </div>
  );
}
