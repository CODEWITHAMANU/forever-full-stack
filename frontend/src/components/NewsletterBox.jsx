import React from 'react'
import { assets } from '../assets/assets'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>"Get the Latest Insights and Updates – Join Our WhatsApp Community!"</p>
      <p className='text-gray-400 mt-3'>
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>

        {/* <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/> */}
      </form>
      <div>
        <img src={assets.whatsapp} className='py-2' alt="" />

        <a href="https://chat.whatsapp.com/LnX8nRXrQHsEScV5XxTXWU" target="_blank" rel="noopener noreferrer" >
          <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>Join Now </button>

        </a>


      </div>

    </div>
  )
}

export default NewsletterBox
