import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
// import fourImg from '../assets/images/csz.jpg'

const Navbar = ({ etheme, handleChange, settheme }) => {

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
      label: "light",
      value: "light",
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
            <Link href="/">
              <a className="font-title inline-flex text-lg md:text-xl"><span className="normal-case">Millionaire</span> <span className="normal-case text-primary">Club</span></a>
            </Link>
          </div>
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
          <a target='_blank' rel="noreferrer" href="https://twitter.com/Abu__Crypto" className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">
            <span className={`px-1 inline-block text-base-100`}><FaTelegram /></span>
            Join Now</a>
          {/* <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link> */}
          <label className="swap swap-rotate p-3">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input onChangeCapture={etheme === "fantasy" ? () => settheme("forest") : () => settheme("fantasy")} type="checkbox" />
            <span className='swap-on text-2xl text-primary'>
              <BsFillSunFill />
            </span>

            {/* <!-- moon icon --> */}
            <span className='swap-off text-xl text-primary'>
              <BsMoonFill />
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Navbar