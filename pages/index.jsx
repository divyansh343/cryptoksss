import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Pricing from '../components/landing/Pricing'
import Hero from '../components/landing/Hero'
import Digits from '../components/landing/Digits'
import Testimonials from '../components/landing/Testimonials'
import Sheet from '../components/landing/Sheet'
import Payment from '../components/landing/Payment'
import Inspiration from '../components/Studio/Inspiration'
import Portfolio from '../components/Studio/Portfolio'

export default function Home() {
  return (
    <div className='grid justify-center'>
    <div className='max-w-7xl bg-base-100  mx-5  md:mx-10'>
      <Portfolio />
      <Sheet />
      <Digits/>
      <Pricing />
      <Payment />
      <Testimonials />
    </div>
    </div>
  )
}
