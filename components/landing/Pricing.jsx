import React from 'react'
import { BiBoltCircle } from 'react-icons/bi'
import { FaTelegram } from 'react-icons/fa'

const Pricing = () => {
  return (
    <div className='bg-base-100 border-t-2'>
      <div className='grid justify-center '>
        <h3 className="text-3xl mt-10  md:text-5xl tracking-tight font-black leading-tight md:leading-tight">🔥Join our VIP Community</h3>
      </div>

      <div className='grid  justify-center mx-5 py-10'>
        <div className="relative p-8 md:p-12 bg-base-200 text-base-content rounded-3xl w-full md:w-[26rem] group">
          <div className="space-y-8 relative z-10"><p className="text-primary tracking-wide font-semibold md:text-lg">🍜 VIP Membership </p><div className="flex items-baseline flex-wrap gap-x-2">
            <span className="text-lg tracking-tight text-base-content-secondary line-through decoration-[1.5px]">499$</span>

            <span className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">350</span>

            <span className="text-base-content-secondary">USDT</span>

            <span className="badge text-accent-content whitespace-nowrap animate-text-shimmer border-0 bg-gradient-to-r from-orange-400-400 via-primary to-orange-600 bg-[length:400%_100%]">Monthly</span>
          </div>

            <div><ul className="space-y-3 text-base-content-secondary"><li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Premium Signals</li>

              <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Analysis</li>

              <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                <span className="">Risk Management Strategies:
                </span>
              </li>

              <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                <span className="">Educational Resources:
                </span>
              </li>

              <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                <span className="">
                  <span data-for="stripe" data-tip="stripe" className="text-base-content font-medium underline decoration-purple-400 decoration-dashed underline-offset-2 hover:decoration-solid duration-200 cursor-help" currentitem="false">Performance Reports</span>
                </span>
              </li>

              <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
              Exclusive Community
              </li>

            </ul></div>
            <a target='_blank' rel="noreferrer" href="https://t.me/KirtiAzad" className="btn btn-block btn-primary "> <span className={`px-1 inline-block text-blue-500 text-xl `}><FaTelegram /></span>
              Join Now</a>
           
            <div><p className="text-base-content-secondary text-sm text-center mt-2">One-time payment.
              <span className="">No subscription</span>
            </p></div>

          </div>

          <div className="absolute inset-2 blur-lg bg-accent/75 -z-10 group-hover:inset-1 group-hover:bg-accent/100 duration-200 animate-tilt"></div>

        </div>
      </div>
    </div>

  )
}

export default Pricing