import React from 'react'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
     <section className='bg-white'>
       <div
       className='flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-fixed'
       style={{
        backgroundImage:'url("https://images.squarespace-cdn.com/content/v1/5e0e8831bd9c76034e82b4ee/1593038776755-81T6ZIC2P38BO266C0P6/ke17ZwdGBToddI8pDm48kDrPwNVXYEunyd5GI-T5dTMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjnGyVxz4_7fGUBBocNlg5GFIaMd2sRlNBQxXhqLPHNahoHUF39SckYf9CqjRTAfQ/image-asset.jpeg")',
        height:"60vh"
       }}
       >  
       <h1 className='text-5xl font-bold text-white text-center mt-10'>Contact Us</h1>
       </div>
       <div className='flex-col grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 mx-auto max-w-7xl'>
          <div>
            <h1 className='text-3xl font-bold text-gray-400 mt-5 border-b-1'>Contact <span className='text-gray-700'>Us</span></h1>
            
          </div>
          <div></div>
       </div>
       <Footer/>
     </section>
    </>
  )
}

export default Contact
