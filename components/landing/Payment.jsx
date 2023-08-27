import React from 'react'
// import btc from '../../assets/images/btc.png'
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { toast } from 'react-hot-toast';
import { FaTelegram, FaTwitter } from 'react-icons/fa';

const Payment = () => {

  const address = "TQhCRKkGHviptJ45Nwkq98YEiBrqzwwDbf";
  return (
    <div id='payment' className='grid justify-center my-20'>
      <div className="stat bg-base-200 rounded border-opacity-70 shadow border-primary border px-2 md:px-30 lg:px-52">
        <div className="stat-figure text-primary">
          {/* <Image height={50} width={50} alt="" src={btc} /> */}
          <button onClick={()=>{copy(address); toast.success("Copied")}} className="btn btn-sm rounded-sm my-2 btn-primary ml-2">copy</button>

        </div>

        <div className="stat-title lg:font-bold">Wallet Address (TRC 20)</div>
        <div className="stat-title my-2 text-primary text-xs lg:text-xl font-normal">{address}</div>
        <div className="stat-desc  ">Pay and send Screenshot on <span className='border-b border-primary '><a target="_blank" rel='noreferrer' href="https://twitter.com/Abu__Crypto">twitter</a></span>    <span className={`px-1 inline-block text-blue-500  `}><FaTwitter /></span></div>
      </div>
      {/* <div className="stats shadow border-primary border-2">
        
      </div> */}
    </div>
  )
}

export default Payment