import Image from 'next/image'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { IoPeopleSharp } from 'react-icons/io5'

const Testimonials = () => {
  return (
    <div className='border-t-2 overflow-hidden'>
      <section className="bg-base-100  p-4 py-16 md:py-32">

        <div className="text-center mb-20 space-y-4 md:space-y-6">
          {/* <h3 className="text-3xl  md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Fuckin Proof of Work 🏗️</h3> */}
          <p className="flex items-center gap-2 justify-center text-base-content-secondary">
            <span className="relative inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>Updated Weekly, sorted by newest 📈
          </p>
        </div>


        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">


          <div className="space-y-6 md:space-y-8 max-w-sm  grid"><h2 className="text-2xl md:text-5xl tracking- font-black leading-tight md:leading-tight"> <span className='inline-block'><IoPeopleSharp /></span> Join Our Community of Thriving Traders
</h2>

          {/* <p className="text-base-content-secondary">Track traffic and clicks on your startups. Find out what your followers enjoy the most, rinse and repeat.</p><p className="text-base-content-secondary">Twitter is unstable... Collect your best fans emails. Truly own your audience.</p> */}
          </div>


          <div className="senja-embed" data-id="9fe6a41d-dff0-4bf8-91ee-41af65574ebb" data-lazyload="true"></div>



        </div>
        <a className="btn btn-block btn-primary " target='_blank' rel='noreferrer' href='https://twitter.com/CryptoShillz06'> <span className={`px-1 inline-block text-blue-500 text-xl `}><FaTwitter /></span>
              Follow me on Twitter</a>
      </section>
    </div>
  )
}

export default Testimonials