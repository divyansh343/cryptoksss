import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

import heroImg from '../../assets/images/hero.png'
import oneImg from '../../assets/images/portraits/one.jpeg'
import twoImg from '../../assets/images/portraits/two.jpeg'
import fourImg from '../../assets/images/portraits/four.jpeg'
import fiveImg from '../../assets/images/portraits/five.jpeg'
import sixImg from '../../assets/images/portraits/six.jpeg'
import sevenImg from '../../assets/images/portraits/seven.jpeg'
import eightImg from '../../assets/images/portraits/eight.jpeg'
import nineImg from '../../assets/images/portraits/nine.jpeg'
import { useState } from 'react'
import { FiZap } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa'
import lleft from '../../assets/images/leaves-left.png'
import lright from '../../assets/images/leaves-right.png'


const Hero = () => {
  return (
    <div className="relative bg-base-100">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        {/* <Image height={500} width={500} priority className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" /> */}
      </div>
      <section className="relative py-12 sm:py-16 lg:pt-10 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">

                <h1 className="text-4xl mt-3 lg:mt-5 md:text-5xl tracking-wide font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight ">CryptoShillz</h1>

                <h1 className="text-3xl my-4 md:text-5xl tracking-wide font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight ">
                  <ReactTypingEffect
                    typingDelay={400}
                    speed={60}
                    eraseSpeed={30}
                    eraseDelay={1800}
                    text={[
                      `Pumps`,
                      `Siganls`,
                      `Airdrops`,
                    ]}
                  />
                </h1>

                {/* <h1 className="text-3xl md:text-5xl tracking-wide font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight ">🔺VIP Signals🔻</h1> */}

                <div className="mt-5 lg:mt-12 grid place-items-center lg:place-items-start">
                  {/* <div className="avatar-group -space-x-3 ">
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={twoImg} />
                      </div>
                    </div>

                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={sixImg} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={fourImg} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={fiveImg} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={sevenImg} />
                      </div>
                    </div>


                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={nineImg} />
                      </div>
                    </div>

                  </div> */}

                  <div className="flex justify-center items-center gap-2 md:gap-4 md:text-lg" aria-label="Rated 4.8 stars out of 5 stars"><div className="w-14 md:w-20 opacity-30 invert dark:invert-0"><span ><span ></span>

                    {/* <Image alt="Website rating decoration leave left" src={lleft} sizes="100vw" /> */}
                  </span>

                  </div><div className="space-y-2"><div className="flex gap-1 justify-start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 fill-yellow-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 fill-yellow-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 fill-yellow-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 fill-yellow-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 fill-yellow-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg></div><p className="">
                    {/* <strong className="font-bold">4.8/5</strong> on <a className="link hover:link-primary underline-offset-2 decoration-1 md:decoration-2" href="https://gamifylist.com/app/habits-garden" target="_blank" rel="noreferrer">Gamify List</a> */}
                    </p>
                    <p className=""><span className="font-bold">7,000+</span>

                    happy users</p></div><div className="w-14 md:w-20 opacity-30 invert dark:invert-0"><span ><span ></span>

                      {/* <Image alt="Website rating decoration leave right" src={lright} /> */}
                    </span>


                    </div>
                  </div>

                </div>
                <p className="pt-8 text-sm text-primary-focus lg:mt-0 lg:ml-4 text-md  font-pj">
                  We are the #1 provider of Crypto Signals.
                </p>
                <p className="pt-1 text-sm text-primary-focus lg:mt-0 lg:ml-4 text-md  font-pj">
                  Trusted by over 1,000+ traders.
                </p>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-6">
                <a target='_blank' rel="noreferrer" href="https://t.me/CryptoShillz09">
                  <button className="btn mx-1 normal-case btn-primary lg:btn-base    text-base lg:text-lg  font-medium">
                    <span className={`px-1 inline-block text-blue-500 `}><FaTelegram /></span>
                    Join Telegram
                  </button>
                </a>


              </div>
              {/* <div className='mt-8'>
              <div className="tabs tabs-boxed font-medium ">
                <p onClick={() => { setThemeChange("light") }} className={`tab  font-medium ${themeChange === "light" ? "tab-active" : null}`}>Light</p>
                <p onClick={() => { setThemeChange("night") }} className={`tab  font-medium ${themeChange === "night" ? "tab-active" : null}`}>Night</p>
                <p onClick={() => { setThemeChange("aqua") }}
                  className={`tab hidden md:flex
                  font-medium ${themeChange === "aqua" ? "tab-active" : null}`}>Aqua</p>
                <p onClick={() => { setThemeChange("forest") }} className={`tab hidden md:flex  font-medium ${themeChange === "forest" ? "tab-active" : null}`}>Forest</p>
                <p onClick={() => { setThemeChange("lofi") }} className={`tab  font-medium ${themeChange === "lofi" ? "tab-active" : null}`}>Classic</p>
                <p onClick={() => { setThemeChange("halloween") }} className={`tab  font-medium ${themeChange === "halloween" ? "tab-active" : null}`}>Halloween</p>
              </div>
            </div> */}
            </div>
            <div className="xl:col-span-3 shadow-lg">
              <Image height={800} width={1200} className="mx-auto shadow lg:px-20 border-sky-200 border-2  rounded-xl" src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero