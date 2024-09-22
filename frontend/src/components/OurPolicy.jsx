import React from 'react'
import Title from '../components/Title'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { assets } from '../assets/assets'
import { RiSecurePaymentLine } from "react-icons/ri";

const OurPolicy = () => {
  return (
    <div>
      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  hover:bg-gradient-to-t from-indigo-300 via-indigo-400 to-indigo-500 transition-all duration-300 ease-in-out '>
          <b>High Quality:</b>
          <p className=' text-gray-600'>Do you want the bags with high quality materials and mind blowing features? Then try Search Bags.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gradient-to-t from-purple-300 via-purple-400 to-purple-500 transition-all duration-300 ease-in-out p-6 rounded-lg shadow-lg'>
          <b>Stylish Design:</b>
          <p className=' text-gray-600'>Are you still on the lookout for the perfect elegant bags for stand out from the crowd? Then you are lucky to come at Search  Bags..</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gradient-to-t from-red-300 via-red-400 to-red-500 transition-all duration-300 ease-in-out'>
          <b>Reasonale Price:</b>
          <p className=' text-gray-600'>We sales bags at the most resonable price so every individual can afford and have stylish, amazing, mind blowing bags.

          </p>
        </div>
      </div>


      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>


        <div>
          {/* <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" /> */}
          <CiDeliveryTruck size={30} className=' m-auto mb-5 ' width={45} />
          <p className=' font-semibold'>Free Shipping</p>
          <p className=' text-gray-400'>Free Shipping for Online Payment.</p>
        </div>
        <div>
          {/* <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" /> */}
          <IoCallOutline size={30} className='w-12 m-auto mb-5' />
          {/* <FaStar /> */}
          <p className=' font-semibold'>Online Support</p>
          <p className=' text-gray-400'>9 AM To 9 PM, 6 days a week</p>
        </div>
        <div>
          {/* <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" /> */}
          <RiSecurePaymentLine size={30} className=' w-14 m-auto mb-5' />
          <p className=' font-semibold'>Flexible Payment</p>
          <p className=' text-gray-400'>Pay with Multiple Payment Options</p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy
