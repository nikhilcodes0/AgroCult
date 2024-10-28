import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import greenLeaf from "../assets/green-leaf.png";
import leafBg from "../assets/Leafbg.png";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";

import "../App.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="text-[#dcffd7] py-8 w-[90%] mx-auto">
        <div className="lg:flex lg:gap-14 w-[100%] justify-between">
          <div>
            <p className="text-5xl font-semibold lg:hidden">About Us</p>
            <div className="mt-8">
              <img
                src={leafBg}
                alt=""
                className="absolute -z-10 mx-[4rem]  brightness-75 w-[55%] md:w-[40%] md:mx-[11rem] top-64 lg:mx-[2rem] lg:w-[23%] lg:top-52"
              />
              <img src={greenLeaf} alt="Leaf" className="mx-auto w-[85%] md:w-[60%] lg:w-[31rem]" />
            </div>
            <div className="lg:w-[60%] lg:left-[-9%]  md:w-[40%] bg-[#24ff02] w-[30%] h-[485.93px] left-[30%] top-[20%] opacity-[0.35] filter blur-[84.03px] rotate-[35.24deg] absolute -z-20"></div>
            <div className="lg:left-[12%] lg:bottom-[23%] md:left-[27%] md:bottom-[10rem] bg-[#fcff45] w-20 h-20 rounded-full flex items-center justify-center p-4 relative left-20 bottom-32">
              <p className="text-black font-semibold">Monstera</p>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <p className="text-7xl mt-5 mb-5 font-semibold hidden lg:block">About Us</p>
            <h1 className="text-xl italic my-5">Smart Farming Project at Hoskote Village, Bengaluru, Karnataka</h1>
            <p className="text-justify font-medium tracking-wider text-white text-lg paragraph ">
              At Kristu Jayanti College, we are committed to making a difference in rural communities through sustainable and innovative initiatives.
              As part of this mission, we have adopted Hoskote Village in Bengaluru, Karnataka, and launched a transformative Smart Farming Project.
              This initiative aims to empower local farmers with advanced technology and resources, enabling them to achieve higher productivity and resilience in agriculture.
              <br />
              <br />
              Our Smart Farming Project leverages cutting-edge tools and techniques to support the unique needs of Hoskote's agricultural community.
              Key components of the project include:
              <dl>
                <dt className="text-white font-semibold my-5 text-xl">1.	Weather Reporting</dt>
                <dd className="text-white ml-5">Accurate weather forecasts are critical for farmers to plan their planting, irrigation, and harvesting activities.
                  Our weather reporting systems provide real-time updates, helping farmers anticipate climatic conditions and make informed decisions to maximize crop yield and minimize risk.</dd>
              </dl>
              <dl>
                <dt className="text-white font-semibold my-5 text-xl">2.	Soil Moisture & Nutrient (NPK) Testing</dt>
                <dd className="text-white ml-5">Understanding soil health is fundamental to successful farming.
                  Through regular soil moisture and nutrient testing, we provide insights into nitrogen, phosphorus, and potassium (NPK) levels, allowing farmers to tailor fertilization practices and improve soil quality. 
                  This data-driven approach enhances crop growth, conserves resources, and promotes sustainable soil management.</dd>
              </dl>
            </p>
          </div>
        </div>
        <Separator className="my-10 w-[95%] mx-auto opacity-100 bg-[#dcffd71a] p-[1px]" />

        <div className="bg-[#24513b] p-4 grid md:grid-cols-2 gap-3 rounded-lg w-[100%]">
          <div className="flex gap-2 w-full">
            <img src={img1} alt="" className="w-[50%] object-cover rounded-md" />
            <img src={img2} alt="" className="w-[50%] object-cover rounded-md"/>
          </div>
          <div className="flex gap-2 w-full">
            <img src={img3} alt="" className="w-[50%] object-cover rounded-md"/>
            <img src={img4} alt="" className="w-[50%] object-cover rounded-md"/>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-justify font-medium tracking-wider text-white text-lg paragraph">
          <dl>
                <dt className="text-white font-semibold my-5 text-xl">3.	Smart Lighting & Irrigation</dt>
                <dd className="text-white ml-5">Our project incorporates smart lighting solutions that optimize plant growth cycles and resource use. 
                  By utilizing intelligent irrigation systems, we aim to reduce water wastage and ensure that crops receive the precise amount of water they need. 
                  This automation not only increases crop yield but also conserves water, a vital resource in agriculture.</dd>
              </dl>
              <dl>
                <dt className="text-white font-semibold my-5 text-xl">4.	Disease Identification and Management</dt>
                <dd className="text-white ml-5">Early detection of crop diseases is crucial for preventing large-scale crop damage. 
                  We provide farmers with tools to identify plant diseases through advanced image processing and pattern recognition. 
                  This proactive approach enables timely intervention, helping farmers protect their crops and maintain healthy yields.</dd>
              </dl>
            <br />
            <br />
            Through the Smart Farming Project, Kristu Jayanti College empowers Hoskote Village farmers with the knowledge, skills, and technology needed to thrive in modern agriculture. 
            This initiative embodies our dedication to community development, sustainable farming practices, and rural prosperity.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
