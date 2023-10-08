import React from 'react'

const Portfolio = () => {
  return (
    <section className='lg:h-screen lg:px-5'>
      <div className='grid pt-10 md:grid-cols-3 gap-2'>
        <div>
          <video controls loop ="" className="rounded-2xl aspect-auto w-full sm:w-[18rem] border  border-base-content/20" width="350" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696736463/y9Ht_ZYF1BZOcjTc_zgkrco.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls loop  className="rounded-2xl aspect-auto w-full sm:w-[18rem] border  border-base-content/20" width="350" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696736452/i4feO3K2KYiwiVAn_oqbbyb.mp4  " type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls loop ="" className="rounded-2xl aspect-auto w-full sm:w-[18rem] border  border-base-content/20" width="350" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696736463/y9Ht_ZYF1BZOcjTc_zgkrco.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

  )
}

export default Portfolio