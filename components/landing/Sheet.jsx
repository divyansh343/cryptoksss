import Image from 'next/image'
import React from 'react'
import sheet from '../../assets/images/sheet.jpg'
import { FaChartLine } from 'react-icons/fa'

const Sheet = () => {
  return (
    <div>
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

          </Image>


          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">

            We have an Outstanding Monthly ROI. 📈</h2><p className="text-base-content-secondary">We had a fantastic month, with only four SL hits out of 43.
              Profit of 1585%</p>
              
              <p className="text-base-content-secondary">We follow Risk Management Strategies for Secure Trading</p>

            <a className="btn btn-block btn-primary md:btn-wide"href='/sheet.pdf'download>🔽Download Sheet</a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Sheet