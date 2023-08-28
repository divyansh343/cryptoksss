import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Pricing from '../components/landing/Pricing'
import Hero from '../components/landing/Hero'
import Digits from '../components/landing/Digits'
import Section from '../components/landing/Section'
import Testimonials from '../components/landing/Testimonials'
import Sheet from '../components/landing/Sheet'
import Flex from '../components/landing/Flex'
import Payment from '../components/landing/Payment'
import Alphas from '../components/landing/Alphas'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <Alphas />
      <Sheet />
      <Section/>
      <Flex />
      {/* <Digits/> */}
      <Pricing />
      <Payment />
      <Testimonials />
    </div>
  )
}
