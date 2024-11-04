import React from 'react';  

import Nur from '../assets/nur.png';  
import Mahim from '../assets/1730726857663.jpg';  
import Tanvir from '../assets/1730726795051.jpg';  
import Younus from '../assets/1730726900425.jpg';  
import Mehedi from '../assets/1730727078989.jpg';  

const instructors = [  
    {  
        name: "Abdullah Al Ibrahim Nur",  
        age: "24 years",  
        subject: "React, Javascript and Tailwind CSS",   
        experience: "1.7 Years",  
        email: "abdullahnur0000@gmail.com",  
        image: Nur,  
        currentPosition: "Edupybd.com",  
        university: "Khwaja Yunus Ali University"  
    },  
    {  
        name: "Md. Huzzatul Islam Mahim",  
        age: "23 years",  
        subject: "CSS",  
        experience: "7 Months",  
        email: "huzzatulislam915@gmail.com",  
        image: Mahim,  
        currentPosition: "",  
        university: "Khwaja Yunus Ali University"  
    },  
    {  
        name: "Tanvir Ahmed Hanif",  
        age: "22 years",  
        subject: "",  
        experience: "7 Months",  
        email: "",  
        image: Tanvir,  
        currentPosition: "",  
        university: "Khwaja Yunus Ali University"  
    },  
    {  
        name: "Md. Younus Sheikh",  
        age: "22 years",   
        subject: "React, Javascript and Tailwind CSS",  
        experience: "12 Months",  
        email: "younussheikh364@gmail.com",  
        image: Younus,  
        currentPosition: "Front-End Developer",  
        university: "Khwaja Yunus Ali University"  
    },  
    {  
        name: "Md. Mehedi Hasan",  
        age: "22 years",  
        subject: "CSS",  
        experience: "5 Months",  
        email: "mehedihasan27092002@gmail.com",  
        image: Mehedi,  
        currentPosition: "",  
        university: "Khwaja Yunus Ali University"  
    }  
];  

const Instructors = () => {  
    return (  
        <div className="container mx-auto p-12 bg-gray-100 w-full">  
            <h1 className="text-3xl text-center font-extrabold mb-6 text-black">Instructors</h1>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 p-2 gap-6">  
                {instructors.map((instructor, index) => (  
                    <div  
                        key={index}  
                        className="border rounded-lg p-4 shadow-lg bg-white  hover:shadow-200 transition-transform transform hover:scale-105 hover:shadow-xl"  
                    >  
                        <h2 className="text-xl text-black text-center font-semibold">{instructor.name}</h2>  
                        <p className="text-black text-center">Age: {instructor.age || "N/A"}</p>  
                        <p className="text-black font-bold text-center">Subject: {instructor.subject || "N/A"}</p>  
                        <p className="text-black text-center">Experience: {instructor.experience || "N/A"}</p>  
                        <p className="mb-2 text-black text-center">Email: {instructor.email || "N/A"}</p>  
                        {instructor.image && (  
                            <img   
                                className="w-64 h-64 object-contain border-4 border-white shadow-lg mx-auto rounded-full mb-2"   
                                src={instructor.image}   
                                alt={instructor.name}   
                            />  
                        )}  
                        <p className="text-black text-center">Current Position: {instructor.currentPosition || "N/A"}</p>  
                        <p className="text-black text-center">University: {instructor.university}</p>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
}  

export default Instructors;