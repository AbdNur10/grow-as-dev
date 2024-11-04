import React from "react";
import Logo from "../assets/icons8-khan-academy-80.png";
import Banner0 from "../assets/banner.jpg";
const Banner = () => {
  return (
    <>
    <div className="flex items-center justify-between mx-auto">
      <div
        className=" w-[90%] h-[400px]
      flex items-center justify-between
      mx-auto mb-14"
      >
        <div className="flex flex-col gap-2 p-14">
          <div className="flex items-center gap-1  ">
            <img src={Logo} alt="logo" className="w-10 object-cover" />
            <h1 className="text-4xl font-bold text-green-500">GrowAsDev</h1>
          </div>
          <p className="text-black text-2xl">Changes Your identity</p>
         
        </div>
        <div className=" ">
          <img
            src={Banner0}
            alt=""
            className="w-[800px] h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
    <p className="text-center font-semibold text-gray-600 mb-8 text-wrap">
            <span className="text-xl font-bold text-green-500">GrowAsDev</span> Academy is dedicated to empowering learners with essential
            web development skills including HTML, CSS, JavaScript, React, and
            Tailwind CSS. Our comprehensive curriculum covers foundational
            concepts, enabling students to build responsive and dynamic web
            applications from scratch. With experienced instructors, we offer
            hands-on projects and real-world scenarios that enhance learning
            through practical application. Our interactive community encourages
            collaboration, allowing students to share insights and feedback to
            foster growth. At GrowAsDev, we believe that mastering these
            technologies is crucial for success in today’s tech landscape. Join
            us to unlock your potential and take the next step in your journey
            to becoming a proficient web developer
          </p>
    </>
  );
};

export default Banner;
