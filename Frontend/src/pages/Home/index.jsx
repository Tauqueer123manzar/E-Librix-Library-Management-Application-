import React from 'react';

const Home = () => {
  return (
    <section>
      <div
        className="flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          height: '60vh',
        }}
      >
        <h1 className="text-5xl font-bold text-white text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-10 animate-bounce">
          Welcome to Library
        </h1>
      </div>

      <div className='flex flex-col items-start m-5'>
         <h1 className='text-4xl font-bold text-black mt-5 border-b-2'>Explore</h1>   
      </div>
    </section>
  );
};

export default Home;
