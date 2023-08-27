import Image from 'next/image'
import React from 'react'
import sheet from '../../assets/images/sheet.jpeg'
import { FaChartLine } from 'react-icons/fa'

const Sheet = () => {
  return (
    <div>
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[36rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1693121655/scalp_1_skjvoe.mp4" type="video/mp4" />
          </video>


          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
            Achieve Financial Freedom</h2><p className="text-base-content-secondary">Our Goal is at least 100M$ at the End of Next Bull MarkeT</p>

            <p className="text-base-content-secondary">You know 97% of millionaires created their wealth from hard and smart work - often starting with very little capital
              We will build up our system</p>

            {/* <a className="btn btn-block btn-primary md:btn-wide" href='/sheet.pdf' download>🔽Download Sheet</a> */}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Sheet