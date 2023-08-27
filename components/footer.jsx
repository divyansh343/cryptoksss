import Image from 'next/image'
import React from 'react'
import { BiLogoBitcoin } from 'react-icons/bi'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = ({ etheme, settheme }) => {
  return (
    <div data-theme="luxury" className='bg-base-100'>

      <div className='px-5 lg-px-20  pb-10'>
        <p className="pt-6 text-sm  font-thin text-primary lg:pt-4 lg:pl-4 font-pj">
          Trading is risky & most traders lose money. This site & the products & services we offer informational & educational purposes only. All content is to be considered hypothetical, selected after the fact, in order to demonstrate our product and should not be construed as financial advice. Decisions to buy, sell, hold or trade in securities, commodities and other investments involve risk and are best made based on the advice of qualified financial professionals. Trading in USD@-M Futures is subjected to risk.
        </p>

        <p className="pt-6 text-sm text-primary lg:mt-0 lg:ml-4 font-pj">
          Engaging in USD@-M Futures trading presents its own set of risks, and it&apos;s vital to recognize this aspect.

          Testimonials showcased on this platform may not accurately represent the experiences of all clients or customers. They should not be taken as a guarantee of future performance or accomplishments.
        </p>

      </div>
      <footer className="footer items-center bg-base-200 px-2 text-base-content">
        <div className="items-end grid-flow-col">
          <span className='text-xl'>
            <BiLogoBitcoin />

          </span>
          <p>Copyright © 2023 - All right reserved</p>
        </div>

        <div>

        </div>
      </footer>
    </div>
  )
}

export default Footer