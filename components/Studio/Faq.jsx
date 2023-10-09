import React from 'react'

const Faq = () => {
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
      <div className='lg:px-44 '>
      <div className="collapse mb-3 collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse mb-3 collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse mb-3 collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Faq