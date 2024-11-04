import React from 'react'
import Logo from "../assets/icons8-khan-academy-80.png";


const footer_links=[

    {
        name:'Contact Us',
        subTitle1:'+880-186-2609526',
        subTitle2:'abdullahnur000@gmailcom',
        subTitle3:'SS Road,Sirajganj',
    },
    {
        name:'About',
        subTitle1:'Our Team',
        subTitle2:'Our Services',
        subTitle3:'Our Moto',
    },
    {
        name:'Rules & Regulation',
        subTitle1:'Terms & Conditions',
        subTitle2:'Privacy Policy',
        subTitle3:'Payment Policy',
    },
    {
        name:'About',
        subTitle1:'Our Team',
        subTitle2:'Our Services',
        subTitle3:'Our Moto',
    },
]
const Footer = () => {
  return (
    <div className='flex items-center justify-center rounded-sm
     relative bottom-0 left-0 right-0
     gap-[140px] px-8 py-8 mx-auto bg-black'>
        <div className='flex flex-col gap-2'>
        <div className="flex items-center gap-1">
        <img src={Logo} alt="logo" className="w-10 object-cover" />
        <h1 className="text-xl font-bold text-green-500">GrowAsDev</h1>
         </div>
         <p className='text-white'>Changes Your identity</p>
        </div>
      
      <div className='flex items-center gap-14'>
        {footer_links.map((item, index) => (
          <div key={index} className='flex flex-col justify-between gap-2'>
            <h1 className="font-bold text-white">{item.name}</h1>
            <h1 className="font-light text-white">{item.subTitle1}</h1>
            <h1 className="font-light text-white">{item.subTitle2}</h1>
            <h1 className="font-light text-white">{item.subTitle3}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer