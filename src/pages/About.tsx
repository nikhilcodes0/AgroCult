import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import greenLeaf from "../assets/green-leaf.png";
import leafBg from "../assets/Leafbg.png";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";

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
            <p className="text-7xl mt-5 mb-20 font-semibold hidden lg:block">About Us</p>
            <p className="text-justify font-medium tracking-wider text-white text-lg paragraph ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod totam
              animi fugit fugiat laboriosam ad ab ut sit odio! Error, molestias
              illum debitis at nesciunt quia sunt rem qui accusantium, incidunt
              vel! In reiciendis tempora sit quam harum velit magnam nobis
              deserunt veniam libero vel alias atque molestiae cupiditate amet
              quia recusandae nostrum labore dolor at, error rerum laboriosam
              repudiandae corporis. Rerum, omnis deserunt possimus ullam atque
              error dicta sequi! <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              corrupti quos ratione totam necessitatibus laudantium quidem
              provident exercitationem accusamus sint et impedit accusantium
              cupiditate nulla voluptatem praesentium. Fugit adipisci harum quis
              earum mollitia veniam atque hic porro autem repellendus suscipit
              possimus quidem nesciunt, voluptatum cumque, odit aliquam.
              Temporibus provident repellendus, nam at doloribus fugiat aperiam
              maiores nobis iste cupiditate, impedit rem aspernatur possimus
              suscipit. Ab saepe laborum quaerat voluptas excepturi!
            </p>
          </div>
        </div>
        <Separator className="my-10 w-[95%] mx-auto opacity-100 bg-[#dcffd71a] p-[1px]" />

        <div className="bg-[#24513b] p-4 grid md:grid-cols-2 gap-3 rounded-lg w-[100%]">
          <div className="flex gap-2 w-full">
            <img src={img1} alt="" className="w-[50%] rounded-md" />
            <img src={img2} alt="" className="w-[50%] rounded-md"/>
          </div>
          <div className="flex gap-2 w-full">
            <img src={img1} alt="" className="w-[50%] rounded-md"/>
            <img src={img2} alt="" className="w-[50%] rounded-md"/>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-justify font-medium tracking-wider text-white text-lg paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod totam
            animi fugit fugiat laboriosam ad ab ut sit odio! Error, molestias
            illum debitis at nesciunt quia sunt rem qui accusantium, incidunt
            vel! In reiciendis tempora sit quam harum velit magnam nobis
            deserunt veniam libero vel alias atque molestiae cupiditate amet
            quia recusandae nostrum labore dolor at, error rerum laboriosam
            repudiandae corporis. Rerum, omnis deserunt possimus ullam atque
            error dicta sequi! <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            corrupti quos ratione totam necessitatibus laudantium quidem
            provident exercitationem accusamus sint et impedit accusantium
            cupiditate nulla voluptatem praesentium. Fugit adipisci harum quis
            earum mollitia veniam atque hic porro autem repellendus suscipit
            possimus quidem nesciunt, voluptatum cumque, odit aliquam.
            Temporibus provident repellendus, nam at doloribus fugiat aperiam
            maiores nobis iste cupiditate, impedit rem aspernatur possimus
            suscipit. Ab saepe laborum quaerat voluptas excepturi!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
