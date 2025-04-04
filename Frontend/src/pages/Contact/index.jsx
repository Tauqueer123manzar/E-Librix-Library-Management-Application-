import React from 'react'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <section className='bg-white'>
        <div
          className='flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-fixed'
          style={{
            backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5e0e8831bd9c76034e82b4ee/1593038776755-81T6ZIC2P38BO266C0P6/ke17ZwdGBToddI8pDm48kDrPwNVXYEunyd5GI-T5dTMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjnGyVxz4_7fGUBBocNlg5GFIaMd2sRlNBQxXhqLPHNahoHUF39SckYf9CqjRTAfQ/image-asset.jpeg")',
            height: "60vh"
          }}
        >
          <h1 className='text-5xl font-bold text-white text-center mt-10'>Contact Us</h1>
        </div>
        <div className='flex-col grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 mx-auto max-w-7xl'>

        {/* ================================ contact section============================= */}
          <div>
            <h1 className='text-3xl font-bold text-red-500 mt-5'>Let's<span className='text-gray-700'> Connect</span></h1>

            <input
              type="text"
              placeholder='Enter Your Name'
              className='border border-gray-300 rounded-md p-2 w-full mt-10'
            />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='border border-gray-300 rounded-md p-2 w-full mt-5'
            />
            <textarea rows={6} cols={6}
              placeholder='Enter Your Message'
              className='border border-gray-300 rounded-md p-2 w-full mt-5'
            />
             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-auto w-full  cursor-pointer' type='submit'>Send Message</button>
          </div>

          <div className='flex justify-center mt-6'>
            <div className='flex flex-col items-center h-[350px] md:h-[450px] w-[400px] md:w-[400px] md:ml-[50px] '>
             <img src='https://static.vecteezy.com/system/resources/previews/004/578/793/large_2x/man-working-with-computer-at-desk-free-vector.jpg' alt='contact' className='w-full h-full' /> 
            </div>
          </div>
        </div>
        {/* =============================== Footer =============================== */}
        <Footer />
      </section>
    </>
  )
}

export default Contact
