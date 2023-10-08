import Image from 'next/image'
import React from 'react'
// import Slider from "react-slick";

const Inspiration = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = [
    {
      "id" : 1,
      "img": "https://images.unsplash.com/photo-1696451203065-477f3a08e8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    }
  ];

  return (
    <div>
      <h2> Single Item</h2>
      {/* <Slider {...settings}>
        {
          data.map(item => (
            <>
              <Image key={item.id} alt='' src={item.img} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
              </Image>
            </>
          ))
        }
      </Slider> */}
    </div>
  )
}

export default Inspiration