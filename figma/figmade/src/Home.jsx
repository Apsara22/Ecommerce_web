import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import img1 from "./assets/img1.jpeg"
import { useState } from "react";
import products from './assets/products'
export default function Home() {
  const [data, setData] = useState()
  return (
    <>
      <div className="bg-[#3B3B3B] bg-cover  h-screen  text-white grid grid-cols-2  font-bold">
        {/* first row */}
        <div className=" pt-11  pl-10 row-span-3 ">
          <div>
            <h1 className="text-6xl ">
              Portfolio <br />
              Templete
            </h1>
          </div>
          <div className="pt-11 ">
            <hr className="w-[32%] pl-28 pb-12" />
            <p className="text-3xl">
              Export your design
              <br /> to HTML code
            </p>
          </div>
          <div className="flex pt-80 text-4xl space-x-10">
            <FaFacebookSquare />
            <FaLinkedin />
            <FaTwitterSquare />
          </div>
        </div>
        {/* Second row */}

        <div className="grid grid-cols-2  space-x-5 ">
          {/* frist column */}
          <div className="  py-6 space-y-10">
            <div className=" grid grid-cols-2  bg-white text-black rounded pl-8  h-72">
            <div className="">
              <p>Branding|Image Packing </p>
              <h1 className="text-2xl pb-3">Visual Designer</h1>
              <p className="text-start pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique illum necessitatibus dignissimos!</p>
              <button className="bg-black p-3 rounded text-white text-center pb-3">
                Contact
              </button>
            </div>
            <div className="pt-14">
              <img src={img1} alt=""  className="text-3xl rounded pr-8"/>
            </div>

            </div>
            
            {/* second column */}
            <div className="  bg-white text-black h-[390px]  rounded  ">
           <h1 className="text-xl text-center">Latest Work</h1>
           <div className="grid grid-cols-3 gap-4 pt-11">
              {products.map((data, i) =>(
                <ul key={i}>
                  <li className="h-16 w-24 pl-2"><img src={data.imgage}/></li>
                  <li className="pt-10 text-sm">{data.name}</li>
                  <li>{data.price}</li>

                </ul>
                
              ))}
           </div>

            </div>
            
          </div>
          <div>
          <div className="  py-6 space-y-10">
            <div className=" grid grid-cols-2  bg-white text-black rounded pl-8  h-72">
            <div className="">
              <p>Branding|Image Packing </p>
              <h1 className="text-2xl pb-3">Visual Designer</h1>
              <p className="text-start pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique illum necessitatibus dignissimos!</p>
              <button className="bg-black p-3 rounded text-white text-center pb-3">
                Contact
              </button>
            </div>
            <div className="pt-14">
              <img src={img1} alt=""  className="text-3xl rounded pr-8"/>
            </div>

            </div>
            
            {/* second column */}
            <div className="  bg-white text-black h-[390px]  rounded  ">
           <h1 className="text-xl text-center">Latest Work</h1>
           <div className="grid grid-cols-3 gap-4 pt-11">
              {products.map((data, i) =>(
                <ul key={i}>
                  <li className="h-16 w-24 pl-2"><img src={data.imgage}/></li>
                  <li className="pt-10 text-sm">{data.name}</li>
                  <li>{data.price}</li>

                </ul>
                
              ))}
           </div>

            </div>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
