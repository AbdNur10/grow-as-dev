import React from 'react';  

import HTML from '../assets/icons8-html-100 (1).png';  
import CSS from '../assets/icons8-css-100.png';  
import Tailwind from '../assets/icons8-tailwindcss-100.png';  
import JS from '../assets/icons8-js-100.png';  
import ReactJS from '../assets/icons8-react-js-100.png';  
import Figma from '../assets/icons8-figma-100 (1).png';  

const our__courses = [  
  {  
    id: 1,  
    title: 'HTML5',  
    subtitle: 'Learn HTML5',  
    img: HTML,  
  },  
  {  
    id: 2,  
    title: 'Cascading Style Sheets',  
    subtitle: 'Learn CSS',  
    img: CSS,  
  },  
  {  
    id: 3,  
    title: 'Tailwind CSS',  
    subtitle: 'Learn Tailwind CSS',  
    img: Tailwind,  
  },  
  {  
    id: 4,  
    title: 'JavaScript',  
    subtitle: 'Learn JavaScript',  
    img: JS,  
  },  
  {  
    id: 5,  
    title: 'ReactJS',  
    subtitle: 'Learn ReactJS',  
    img: ReactJS,  
  },  
  {  
    id: 6,  
    title: 'Figma to ReactJS',  
    subtitle: 'Learn Conversion',  
    img: Figma,  
  },  
];  

const Courses = () => {  
  return (  
    <div className="p-8 bg-gray-100">  
      <h1 className="text-3xl font-bold text-center mb-6">Courses</h1>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">  
        {our__courses.map((item) => (  
          <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg
           transition-shadow duration-200 p-4 flex flex-col items-center">  
            <img src={item.img} alt={item.title} className="w-18 h-18 mb-4" />  
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>  
            <p className="text-gray-600 mb-4">{item.subtitle}</p>  
            <button className="mt-auto bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">  
              Explore Now  
            </button>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Courses;