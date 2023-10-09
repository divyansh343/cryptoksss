import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Pricing from '../components/landing/Pricing'
import Digits from '../components/landing/Digits'
import Testimonials from '../components/landing/Testimonials'
import Sheet from '../components/landing/Sheet'
import Payment from '../components/landing/Payment'
import Inspiration from '../components/Studio/Inspiration'
import Portfolio from '../components/Studio/Portfolio'
import Faq from '../components/Studio/Faq'
import Carousel from '../components/Studio/Reviews'
import Reviews from '../components/Studio/Reviews'
import { Services } from '../components/Studio/Services'

export default function Home() {
  return (
    <div className=''>
      <div className=''>
        <Sheet />
        <Services />
        <Inspiration />
        <Portfolio />
        <Reviews />
        {/* <Digits />
        <Pricing />
        <Payment />
        <Testimonials /> */}
        <Faq/>
      </div>
    </div>
  )
}
