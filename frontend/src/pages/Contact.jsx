import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        {/* <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" /> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.07396531803!2d72.82764857466267!3d18.972340555219667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe5e39b5bd3%3A0x980c420885117d0c!2sSearch%20Bag%20-Mumbai!5e0!3m2!1sen!2sin!4v1726079694288!5m2!1sen!2sin" width="400" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>Shop No. 27 , Lohe Ki Chawl , Mumbai Bag Market <br /> Maulana  Azad Road, Madanpura , Mumbai-8  </p>
          <p className=' text-gray-500'>Phone: +91 8828081163 <br /> Email: searchbags789@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>SEARCH BAG</p>
          {/* <p className=' text-gray-500'>Learn more about our Products..</p> */}
          {/* <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore </button> */}
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
