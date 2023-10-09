import Image from 'next/image'
import React from 'react'
import ab from '../assets/images/about.jpg'

const about = () => {
  return (
    <div>
      <section className='pt-32 '>
        <div className=''>
          <Image className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            src={ab}
            alt=""
            width={800}
            height={500}
          />
        </div>
        <div className="font-light mb-20 sm:text-lg">
            <h2 className="mb-4 text-4xl mt-16 tracking-tight font-extrabold">Aniket Vishwkarma</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className='grid justify-center'>
          <Image className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            src={ab}
            alt=""
            width={800}
            height={500}
          />
        </div>
      </section>
    </div>
  )
}

export default about