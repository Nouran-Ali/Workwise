import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {

  // axios.get('http://localhost:3000/api/user')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  return (
    <>
      <div className='bg-[#f2f2f2]'>
        <Navbar />
        <div className='grid grid-cols-3 gap-3 mt-11'>
          <div className='w-96 text-center relative bg-white'>
            <div className='bg-[#e44d3a] h-32'></div>
            <img src='/user2.png' className='mx-auto absolute left-[122px] top-[58px] bg-[#e44d3a] rounded-full border-4 border-white' width="128px" />
            <div className='mt-16'>
              <p className='text-3xl'>John Doe</p>
              <p className='mt-2 mb-5 text-[#686868] text-lg'>Graphic Designer at Self Employed</p>
              <hr />
              <div className='my-2'>
                <p className='text-[#686868] text-lg'>Following</p>
                <p>34</p>
              </div>
              <hr />
              <div className='my-2'>
                <p className='text-[#686868] text-lg'>Followers</p>
                <p>155</p>
              </div>
              <hr />
              <div className='my-4'>
                <a href='#' className='text-[#e44d3a] text-lg'>View Profile</a>
              </div>
            </div>
          </div>
          <div className=''>
            gg
          </div>
          <div className=''>
            gg
          </div>
          hhh
        </div>
      </div>

    </>

  )
}
