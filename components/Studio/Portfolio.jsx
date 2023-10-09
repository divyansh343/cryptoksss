import React from 'react'

const Portfolio = () => {
  return (
    <section className='px-2 lg:px-5 pt-32'>
      <div className="flex flex-col text-center w-full my-10">
        <div className="mb-4">
          <h2 className=" text-3xl md:text-4xl font-bold text-base-content">
            Our Services
          </h2>
        </div>
        <p className="mx-auto font-medium text-gradient-cold mb-4">Your growth, Our Commitment: Explore Our Services</p>
      </div>
      <div className='grid justify-between md:grid-cols-3 gap-2'>
        <div className='grid justify-center'>
          <video controls loop className="rounded-2xl aspect-auto w-full sm:w-[17rem] border  border-base-content/20" width="350" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696736463/y9Ht_ZYF1BZOcjTc_zgkrco.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='grid justify-center'>
          <video controls loop className="rounded-2xl aspect-auto w-full sm:w-[17rem] border  border-base-content/20" width="350" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696736452/i4feO3K2KYiwiVAn_oqbbyb.mp4  " type="video/mp4" />
          </video>
        </div>
        <div className='grid justify-center'>
          <video controls loop className="rounded-2xl aspect-auto w-full sm:w-[17rem] border  border-base-content/20" width="350" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696736463/y9Ht_ZYF1BZOcjTc_zgkrco.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

  )
}

export default Portfolio