import Slider from "./Slider";

export default function Gallery() {
  return (
    <div id="Gallery" className="h-[100vh] container">
       <h1 className="text-[44px] font-[600] text-[#414141] mt-[60px] ml-[70px]">Gallery</h1>

       <div className="container h-full p-5  md:p-0">
        <Slider />
       </div>
    </div>
  )
}
