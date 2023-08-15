import Image from 'next/image'
import React from 'react'
import flex1 from '../../assets/images/flex1.jpg'
import flex2 from '../../assets/images/flex2.jpg'

const Flex = () => {
  return (
    <div>
          <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <Image alt='' src={flex1} className="rounded-3xl aspect-auto w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="922" height="446">

          </Image>
          <Image alt='' src={flex2} className="rounded-3xl aspect-auto w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="922" height="446">

          </Image>


          {/* <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">

            We have an Outstanding Monthly ROI. 📈</h2><p className="text-base-content-secondary">We had a fantastic month, with only four SL hits out of 43.
              Profit of 1585%</p>
              
              <p className="text-base-content-secondary">We follow Risk Management Strategies for Secure Trading</p>

            <a className="btn btn-block btn-primary md:btn-wide"href='/sheet.pdf'download>🔽Download Sheet</a>
          </div> */}

        </div>
      </section>
    </div>
  )
}

export default Flex