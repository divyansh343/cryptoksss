import Image from 'next/image'
import React from 'react'
import fourImg from '../../assets/images/csz.jpg'
import sixImg from '../../assets/images/portraits/six.jpeg'
import { BsFillRecordFill } from 'react-icons/bs'

import sec1 from '../../assets/images/sec1.png'
import sec3 from '../../assets/images/sec3.png'
import sec4 from '../../assets/images/sec4.jpeg'


const Section = () => {
  return (
    <div>
      {/* Section */}
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-header">
                Crypto k🔺
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-primary ">RSI14 Oversold (30.01) & Heikin-Ashi price below Bollinger Bands</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
           
              <div className="chat-bubble chat-bubble-primary ">Longed <span className='text-blue-500'>$LPT</span> at CMP $7.25</div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary ">SL $6.7</div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary ">TP 8.6 or Above</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={sixImg} />
                </div>
              </div>
              <div className="chat-header">
                david
              </div>
              <div className="chat-bubble chat-bubble-primary ">Damn</div>
              <div className="chat-footer opacity-50">
                Seen at 12:50
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary "> <span className='text-blue-500'>$LPT</span> Running In +22% So Far🌷</div>
            </div>
          </div>


          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight"> Real-time Alerts for Profitable Opportunities
          {/* <span className='inline-block text-red-600 drop-shadow-lg '><BsFillRecordFill/></span> */}
          </h2>
            <p className="text-base-content-secondary">Easy <span className='underline'>Buy</span>  and <span className='underline'>Sell</span> Signals with Practical TP & SL</p>

          </div>
        </div>
      </section>
      {/* Section */}
      {/* Section */}
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-square w-full sm:w-[30rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1691598222/krypto/3zdZIBvyf4EIxDGk_online-video-cutter.com_hryjeh.mp4" type="video/mp4" />
          </video>

          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Bang the Upcoming Bull Market with us</h2>
            <p className="text-base-content-secondary">Our team of seasoned analysts keeps a vigilant eye on the ever-changing crypto landscape,</p>
            <p className="text-base-content-secondary"> Identifying emerging trends, market sentiment shifts, and potential opportunities before they become widely known. Through in-depth technical and fundamental analysis.</p>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Section




