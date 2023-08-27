import Image from 'next/image'
import React from 'react'
// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = () => {
  return (
    <>
      <div  data-theme="forest" className='p-6 bg-black'>
        <div className="px-[2px] md:px-[36px] xl:px-0 mt-[70px]">
          
          {/* <div className="w-full bg-gray-200 h-[1px] mb-[52px]"></div> */}
          <div className=" grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-4 xl:gap-[98px]">
            
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-sm">Contact</h5>
              <p className="text-text mb-5">Indore, MP
              </p>
              <a href="tel:+918821934797" className="text-text my-2 underline cursor-pointer">+91-8821934797
              </a>
              <p className="text-text cursor-pointer ">contact@chareterdmedia.com
              </p>
            </div>
            <div className='invisible'>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-sm">Our Services</h5>
              <ul className=''>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Brand Collabration</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Influencer Marketing</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Regional Influencer Marketing</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Celebrity Marketing</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Niche Marketing</a></li>
              </ul>
            </div>
            {/* <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-sm">Discover</h5>
              <ul>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Our Blog</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Plans &amp; Pricing</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Knowledge Base</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Cookie Policy</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Office Center</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">News &amp; Events</a></li>
              </ul>
            </div> */}
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-sm">By Cities</h5>
              <ul>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Influencer Agency In Delhi</a></li>
              
              </ul>
            </div>
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-sm">Useful links</h5>
              <ul>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Collabrations</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Influencers</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Events</a></li>
                {/* <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Reviews</a></li>
                <li className="mb-2 text-sm lg:text-base "><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Stories</a></li> */}
              </ul>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px] mb-[20px]"></div>
          <div className="text-gray-400 flex items-center justify-between">
              <p className="text-sm ">@MillionairesClub 2023
              </p>
       
              {/* <a href='https://divyanshpal.netlify.app' target='_blank' rel='noreferrer' className=' text-sm hover:shadow-lg hover:underline cursor-pointer'>-by<span className='text-primary ml-1 '>Divyansh</span></a> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer