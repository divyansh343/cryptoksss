import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa';

const Navbar = ({ etheme, handleChange }) => {

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
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div> */}
        </div>
        <div className="navbar-center">
          <Link href="/">
            <a className="font-bold normal-case heading text-4xl">Heavy Ink<span className="grounded mx-2 text-3xl ">.Studio&apos;s</span></a>
          </Link>
        </div>
        <div className="navbar-end">
          <div className='hidden md:visible'>
            <Link href="/about">
              <a className="font-bold text-base pr-5">About me</a>
            </Link>

          </div>
          <select value={etheme} onChange={handleChange}
            className="select select-sm select-primary w-full max-w-xs mx-1">
            <option disabled selected>Choosfffe Theme?</option>
            {options.map((option) => (
              <>
                <option value={option.value}>{option.label}</option>
              </>
            ))}

          </select>
          {/* <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button> */}
        </div>
      </div>
    </>
  )
}



<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link href="/">
      <div className="btn btn-ghost normal-case text-lg lg:text-lg font-semibold tracking-wide">
        <span className='mx-1'>
          {/* Crypto */}
          {/* <Image src={power} height={25} width={25} alt="" /> */}
        </span>
        {/* {isMobile ? "/" : "Suprr.link/"} */}

        <span className='text-base-content pl-1 tracking-wide text-xl'> HeavyInk Studios </span>
        <span className='hidden md:block mx-[2px] text-primary saturate-150 font-medium tracking-wide'>
          {/* <TextTransition springConfig={presets.gentle}>
                  {"/" + TEXTS[index % TEXTS.length]}
                </TextTransition> */}
        </span>

      </div>
    </Link>
  </div>
  <div className="navbar-end">

    {/* <select  value={etheme} onChange={handleChange}
            className="select select-sm select-primary w-full max-w-xs mx-1">
            <option disabled selected>Choose Theme?</option>
            {options.map((option) => (
              <>
                <option value={option.value}>{option.label}</option>
              </>
            ))}

          </select> */}
    <a target='_blank' rel="noreferrer" href="https://t.me/KirtiAzad" className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">
      →
      Get Appointment</a>
    {/* <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link> */}
  </div>
</div>

export default Navbar