import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
  <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

  <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>

    <p>
      Welcome to Healora, your trusted companion for smarter and more accessible
      healthcare. We understand that finding the right doctor, scheduling
      appointments, and managing healthcare needs can often be overwhelming.
      Healora simplifies the process by bringing patients and healthcare
      providers together on one seamless digital platform.
    </p>

    <p>
      At Healora, innovation and patient experience are at the heart of
      everything we build. Our platform is designed to provide secure, reliable,
      and convenient healthcare interactions — from discovering specialists to
      booking appointments with ease. We continuously improve our technology to
      deliver a faster, smoother, and more personalized healthcare experience.
    </p>

    <b className='text-gray-800'>Our Vision</b>

    <p>
      Our vision at Healora is to redefine digital healthcare by making quality
      medical services simple, connected, and available to everyone. We aim to
      bridge the gap between patients and healthcare professionals through
      technology, trust, and seamless accessibility.
    </p>

  </div>
</div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About