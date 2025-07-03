import locationImg from '../assets/location.png';
import heroImg from '../assets/hero-left.png';
import slideImg from '../assets/slide1.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import brochurePdf from '../assets/brochure.pdf';
import floorPlanPdf from '../assets/floorpdf.pdf'
import { useState } from 'react';
import movingImg from '../assets/her-right.png'
import { FaXmark } from "react-icons/fa6";

export default function LocationMap() {

    const [phone, setPhone] = useState('');
    const [toggle, setToggle] = useState(false);

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

    return (
        <div className="container h-max xl:h-[115vh] flex flex-col items-center border mt-[60px] mb-[60px]">
            <div className="flex flex-col md:flex-row mt-24">
                <h1 className="text-[27px] sm:text-[38px] font-[400px] text-[#212121] text-center">Avena The Valley Villas Located in </h1>
                <button className="bg-[#001D35] w-[100px] sm:w-[150px] md:w-max text-white ml-7 pl-3 pr-3 text-[27px] sm:text-[38px] cursor-pointer">Avena</button>
            </div>

            <div className="w-full h-max lg:h-[70vh] flex flex-col lg:flex-row mt-16">
                <div className="w-full lg:w-[35%] h-full flex justify-around items-center relative">
                    <img src={locationImg} alt="location" className="w-[28%] md:w-[230px] lg:w-[170px] lg:h-[250px] ml-0 xl:ml-[45px]" />
                    <img src={heroImg} alt="hero" className='w-[23%] md:w-[180px] md:h-[250px] lg:w-[115px] h-max lg:h-[170px] mr-0 lg:mr-10' />
                    <img
                        src={slideImg}
                        alt="slide"
                        className='lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2  w-[39%] md:w-[280px] lg:w-[180px] md:h-[190px] lg:h-[100px]'/>
                </div>

                 <div className='w-full lg:w-[65%] pt-10 lg:p-0 p-5'>
                    <p className='text-[16px] font-medium text-[#364061]  pr-0 sm:pr-12 xl:pr-24'
                    style={{
                        lineHeight:'30px'
                    }}>Avena is located in the heart of The Valley; it is your gateway to the tranquil central park and green spaces. Here, you can enjoy the best of both worlds—the serenity of nature and proximity to the city's prime destinations.</p>
                    <p className='text-[16px] font-medium text-[#364061] pr-0 sm:pr-12 xl:pr-24 mt-4'
                    style={{
                        lineHeight:'30px'
                    }}>With easy access to all major areas of Dubai and an array of green open spaces, The Valley is strategically located on the Dubai—Al Ain Road, a major connection point between the emirates of Dubai and Abu Dhabi.</p>
                    <p className='text-[16px] font-medium text-[#252933] pr-0 sm:pr-12 xl:pr-24 mt-4'
                    style={{
                        lineHeight:'30px'
                    }}>The Valley is a quaint new town consisting of modern townhouse complexes where life finds its inspiration amidst the vast shimmering sands and lush green open spaces. Discover new facets of The Valley, where beautifully landscaped urban gardens invite you to immerse yourself in nature and live the active lifestyle you've always dreamed of. This new addition brings.</p>


<button
                        onClick={() => setToggle(true)}
                        className="w-full lg:w-[45%] h-[40px] bg-[#EA1214] text-white rounded-lg mt-6 hover:bg-[#741d1f] transition"
                    >
                        Download Location Map
                    </button>


                        {toggle && (
                    <div className='fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center bg-gray-600 z-50 bg-opacity-70'>
                        <div className="w-max h-max flex justify-center items-center mt-2 sm:mt-5">
                            <div className="relative w-[100%] lg:w-[420px] h-[300px] lg:h-[270px] bg-[#4B504A] rounded-lg mt-[40px] p-5 flex flex-col items-center">
                                <h1 className="text-white text-[15px] mt-6 font-bold">
                                    One-click to download location Map brochure
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
                                    Download Map
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
            </div>
        </div>
    )
}
