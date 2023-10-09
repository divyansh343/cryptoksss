import Image from 'next/image'
import React from 'react'
import cc from '../../assets/images/cc.jpg'
import wb from '../../assets/images/wb.jpg'

const Inspiration = () => {
  const data = [
    {
      "id": 1,
      "img": cc,
    },
    {
      "id": 1,
      "img": wb,
    },
    {
      "id": 1,
      "img": cc,
    },
    {
      "id": 1,
      "img": wb,
    },
    {
      "id": 1,
      "img": cc,
    },
    {
      "id": 1,
      "img": wb,
    },
  ];

  return (
    <section className='pt-32'>
      <div className="flex flex-col text-center w-full my-10">
        <div className="mb-4">
          <h2 className=" text-3xl md:text-4xl font-bold text-base-content">
            Our Services
          </h2>
        </div>
        <p className="mx-auto font-medium text-gradient-cold mb-4">Your growth, Our Commitment: Explore Our Services</p>

      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {data.map(item => (
          <>
            <div className="pt-5 drop-shadow cursor-pointer ">
              <Image
                src={item.img}
                alt=""
                width={400}
                height={400}
                className="rounded-2xl transition-transform duration-500   transform hover:scale-110"
              />
              <div className="mt-3 grid justify-center ">
                <h3
                  className="text-lg font-bold text-base-content group-hover:underline group-hover:underline-offset-4"
                >
                  Small Headphones
                </h3>

              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}

export default Inspiration