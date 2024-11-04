import React from "react";  
import Logo from "../assets/icons8-khan-academy-80.png";  

const nav__links = [  
  {  
    id: 1,  
    title: "Home",  
    path: "/",  
  },  
  {  
    id: 2,  
    title: "Courses",  
    path: "/courses",  
  },  
  {  
    id: 3,  
    title: "Instructors",  
    path: "/instructor",  
  },  
  {  
    id: 4,  
    title: "About",  
    path: "/about",  
  },  
];  

const Header = () => {  
  return (  
    <div className="p-4 md:p-8 flex flex-col md:flex-row justify-between items-center my-4">  
      <div className="flex items-center gap-1">  
        <img src={Logo} alt="logo" className="w-10 object-cover" />  
        <h1 className="text-xl font-bold text-green-500">GrowAsDev</h1>  
      </div>  
      <div className="flex flex-col md:flex-row items-center gap-4 font-bold tracking-wider text-black mt-4 md:mt-0">  
        {nav__links.map((item) => (  
          <a key={item.id} href={item.path} className="hover:text-green-500 transition">  
            {item.title}  
          </a>  
        ))}  
      </div>  
      <div className="mt-4 md:mt-0">  
        <button className="bg-green-500 px-4 py-2 font-bold rounded-md text-white hover:bg-lime-500 hover:text-black">  
          Get Started  
        </button>  
      </div>  
    </div>  
  );  
};  

export default Header;