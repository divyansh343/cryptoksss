import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa';
// import fourImg from '../assets/images/csz.jpg'

const Navbar = ({etheme,handleChange}) => {
  
  const options = [
   {
     label: "Light",
     value: "light",
   },
   {
     label: "Dark",
     value: "dark",
   },
   {
     label: "Cupcake",
     value: "cupcake",
   },
   {
     label: "corporate",
     value: "corporate",
   },
   {
     label: "garden",
     value: "garden",
   },
   {
     label: "aqua",
     value: "aqua",
   },
  
   {
     label: "fantasy",
     value: "fantasy",
   },
   {
     label: "Cyberpunk",
     value: "cyberpunk",
   },
   {
     label: "halloween",
     value: "halloween",
   },
  
   {
     label: "luxury",
     value: "luxury",
   },
   {
     label: "dracula",
     value: "dracula",
   },
   {
     label: "night",
     value: "night",
   },
   {
     label: "lemonade",
     value: "lemonade",
   },
   {
     label: "autumn",
     value: "autumn",
   },
   {
     label: "forest",
     value: "forest",
   },
   {
     label: "Winter",
     value: "winter",
   },
   {
     label: "Wireframe",
     value: "wireframe",
   },
   {
     label: "Lofi",
     value: "lofi",
   },
   {
     label: "Neon",
     value: "synthwave",
   },
  ];
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
            <div className="btn btn-ghost normal-case text-lg lg:text-lg font-semibold tracking-wide">
                
                 <div className="font-title inline-flex text-lg md:text-xl"><span className="normal-case">Millionaire</span> <span className="normal-case text-primary">Club</span></div>
            </div>
        </div>
        <div className="navbar-end">
          <select  value={etheme} onChange={handleChange}
            className="select select-sm select-primary w-full max-w-xs mx-1">
            <option disabled selected>Choose Theme?</option>
            {options.map((option) => (
              <>
                <option value={option.value}>{option.label}</option>
              </>
            ))}

          </select>
          <a target='_blank' rel="noreferrer" href="https://t.me/+cZbgBo7jpLVjZjY0" className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">
            <span className={`px-1 inline-block text-black `}><FaTelegram /></span>
            Join Now</a>
          {/* <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Navbar