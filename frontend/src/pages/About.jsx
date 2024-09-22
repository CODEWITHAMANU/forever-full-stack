import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.hero_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Established in the year 2007 at Mumbai, Maharashtra, we “Search Bag" are a Sole Proprietorship based firm, engaged as the foremost Manufacturer and Wholesaler of Messenger Bag, Boys Backpack, etc. Our products are high in demand due to their premium quality  and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market. </p>
          {/* <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p> */}
          <b className='text-gray-800'>Our Mission</b>
          <p>At Search Bag, our mission is to offer high-quality, stylish, and durable bags that meet the diverse needs of our customers. We are committed to delivering innovative products at affordable prices, ensuring that everyone can enjoy premium value. With a strong focus on customer satisfaction and timely service, we aim to build lasting relationships and become a trusted brand in every customer’s journey..</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>High Quality:</b>
          <p className=' text-gray-600'>Do you want the bags with high quality materials and mind blowing features? Then try Search Bags.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Stylish Design:</b>
          <p className=' text-gray-600'>Are you still on the lookout for the perfect elegant bags for stand out from the crowd? Then you are lucky to come at Search  Bags..</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Reasonale Price:</b>
          <p className=' text-gray-600'>We sales bags at the most resonable price so every individual can afford and have stylish, amazing, mind blowing bags.

          </p>
        </div>
      </div>

      {/* <NewsletterBox /> */}

    </div>
  )
}

export default About
