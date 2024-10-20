import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-3 border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 glex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
            <div className='social-icon'>
                <a href='https://github.com/akhil-k-se' target="_blank" className='social-icon'><img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2' /></a>
            </div>
            <div className='social-icon'>
                <a href='https://www.instagram.com/akh_il.k/' target="_blank" className='social-icon'><img src='/assets/instagram.svg' alt='instagram' className='w-1/2 h-1/2' /></a>
            </div>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/akhil-kumar-se/' target="_blank" className='social-icon'><img src='/assets/linkedin.svg' alt='instagram' className='w-1/2 h-1/2' /></a>
            </div>
        </div>
        <p className='text-white-500'>© 2024 Akhil, All Rights Reserved</p>
    </section>
  )
}

export default Footer
