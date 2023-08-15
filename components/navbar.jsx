import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa';

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
          <Link href="/">
            <div className="btn btn-ghost normal-case text-lg lg:text-lg font-semibold tracking-wide">
              <span className='mx-1'>
                {/* Crypto */}
                {/* <Image src={power} height={25} width={25} alt="" /> */}
              </span>
              {/* {isMobile ? "/" : "Suprr.link/"} */}

              <span className='text-primary pl-1 tracking-wide text-xl'> CryptoShillz </span>
              <span className='hidden md:block mx-[2px] text-primary saturate-150 font-medium tracking-wide'>
                {/* <TextTransition springConfig={presets.gentle}>
                  {"/" + TEXTS[index % TEXTS.length]}
                </TextTransition> */}
              </span>

            </div>
          </Link>
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
          <a target='_blank' rel="noreferrer" href="https://t.me/CryptoShillz09" className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">
            <span className={`px-1 inline-block text-blue-500  `}><FaTelegram /></span>
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