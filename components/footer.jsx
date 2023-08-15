import Image from 'next/image'
import React from 'react'
// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = () => {
    return (
        <>
            <div className='bg-base-200' >
                <footer className="footer p-10 bg-base-200 border-t-2 text-base-content">

                    <div>
                        {/* <Image src={logoImg} height={50} width={50} alt="" /> */}
                        <p className='text-2xl font-bold'>Crypto Shillz</p>
                        <p className='text-md'>Top Notch Crypto Analysis & Signals.</p>
                        <p className='text-md'>@2023</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <div className='grid place-items-center  '>
                            <div className="stats shadow bg-white text-secondary drop-shadow-lg">
                                <div className="stat">
                                    <div className="stat-title text-secondary">🪙BTC target</div>
                                    <div className="stat-value">$32,000<span className='inline-block text-md   mr-1'>
                                        {/* <HiTrendingUp /> */}
                                    </span></div>
                                    <div className="stat-desc text-secondary">ETH, LTC, DOGE...</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>
                <div className='px-5 lg-px-20 bg-base-200 pb-20'>
                    <p className="pt-6 text-sm  font-thin text-primary-focus lg:mt-4 lg:ml-4 font-pj">
                        Trading is risky & most traders lose money. This site & the products & services we offer informational & educational purposes only. All content is to be considered hypothetical, selected after the fact, in order to demonstrate our product and should not be construed as financial advice. Decisions to buy, sell, hold or trade in securities, commodities and other investments involve risk and are best made based on the advice of qualified financial professionals. Trading in USD@-M Futures is subjected to risk.
                    </p>

                    <p className="pt-6 text-sm text-primary-focus lg:mt-0 lg:ml-4 font-pj">
                        Engaging in USD@-M Futures trading presents its own set of risks, and it&apos;s vital to recognize this aspect.

                        Testimonials showcased on this platform may not accurately represent the experiences of all clients or customers. They should not be taken as a guarantee of future performance or accomplishments.
                    </p>



                </div>
                <div className='grid justify-end'>
                    <a href="https://suprr.link/divyansh" target="_blank" rel="noreferrer" className="link link-hover text-xs p-5">🥑Designed by - Divyansh</a>
                </div>
            </div>
        </>
    )
}

export default Footer