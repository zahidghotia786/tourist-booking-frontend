import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import brochurePdf from '../assets/brochure.pdf';
import floorPlanPdf from '../assets/floorpdf.pdf'
import { useState } from 'react';
import movingImg from '../assets/her-right.png'
import { FaXmark } from "react-icons/fa6";
import floorPlans from '../assets/floorplans.jpg'

export default function Plans() {

    const [phone, setPhone] = useState('');
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    const handleDownload = () => {
        if (phone !== '') {
            const link = document.createElement('a');
            link.href = brochurePdf;
            link.setAttribute('download', 'brochure.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } else {
            alert('Please enter phone number');
        }
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
        <div id='Floor Plan' className="container h-max mt-32 flex flex-col items-center pt-5">
            <h1 className="text-[27px] sm:text-[33px] font-[700] text-[#414141] mt-10 text-center">Floor Plans of Avena The Valley Villas</h1>

            <div className="w-[170px] h-[75px]  mt-8 flex justify-between ">
                <div className="w-[47%] h-full bg-[#001D35] text-white flex flex-col justify-center items-center cursor-pointer hover:bg-opacity-95">
                    <h1 className="font-medium text-3xl">3</h1>
                    <p className="text-sm">BR</p>
                </div>
                <div className="w-[47%] h-full border-b-4 border-b-[#001D35] flex flex-col justify-center cursor-pointer items-center">
                    <h1 className="font-medium text-3xl">4</h1>
                    <p className="text-sm">BR</p>
                </div>
            </div>


            <div className="w-full h-max flex flex-col sm:flex-row items-center sm:items-start border mt-14 pt-5">
                <div className="w-full sm:w-1/2 h-full flex flex-col items-center p-5 sm:p-0">
                    <strong className="text-[13.5px] mt-4 text-[#121233]">3-Bedroom Unit</strong>
                    <p className="text-[16px] mt-1">Total Area: 2217 sqft</p>

                    <button
                        onClick={() => setToggle(true)}
                        className="w-full lg:w-[45%] h-[40px] bg-[#EA1214] text-white rounded-lg mt-6 hover:bg-[#741d1f] transition"
                    >
                        Download Plan.pdf
                    </button>

                    <button
                        onClick={() => setToggle2(true)}
                        className="w-full lg:w-[45%] h-[40px] bg-[#EA1214] text-white rounded-lg mt-6 hover:bg-[#741d1f] transition"
                    >
                        Download All Floor Plans.pdf
                    </button>

                </div>





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
                                    onClick={handleDownload}
                                    className="w-[70%] h-[50px] bg-[#EA1214] font-bold text-white rounded-lg mt-4 hover:bg-[#56ABE4] transition"
                                >
                                    Download a brochure
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

                {toggle2 && (
                    <div className='fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center bg-gray-600 z-50 bg-opacity-70'>
                        <div className="w-max h-max flex justify-center items-center mt-2 sm:mt-5">
                            <div className="relative w-[100%] lg:w-[420px] h-[300px] lg:h-[270px] bg-[#4B504A] rounded-lg mt-[40px] p-5 flex flex-col items-center">
                                <h1 className="text-white text-[15px] mt-6 font-bold">
                                    One-click to download All Floor Plans brochure
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
                                    Download a brochure
                                </button>
                                <p className="mt-4 text-white font-bold">*Time to download -2 seconds</p>
                                <div className="absolute w-max h-max movingImg">
                                    <img src={movingImg} className="w-[145px] h-auto" />
                                </div>
                                <FaXmark onClick={() => setToggle2(false)} className='absolute right-2 sm:right-[-20px] top-2 sm:top-[-30px] text-2xl cursor-pointer text-white' />
                            </div>
                        </div>
                    </div>
                )}



            <div className='w-1/2 h-full flex justify-between'>
            <img src={floorPlans} alt="floor plans" className='w-1/2 h-[600px]'/>
            <img src={floorPlans} alt="floor plans" className='w-1/2 h-[600px]'/>

            </div>
            </div>

        </div>
    )
}
