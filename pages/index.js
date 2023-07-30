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
        <div className='grid grid-cols-4 gap-4 mt-11'>
          <div className='text-center relative bg-white'>
            <div className='bg-[#e44d3a] h-32'></div>
            <img src='/user2.png' className='mx-auto absolute left-[94px] top-[58px] bg-[#e44d3a] rounded-full border-4 border-white' width="128px" />
            <div className='mt-16'>
              <p className='text-3xl'>John Doe</p>
              <p className='mt-2 mb-5 text-[#686868]'>Graphic Designer at Self Employed</p>
              <hr />
              <div className='my-2'>
                <p className='text-[#686868]'>Following</p>
                <p>34</p>
              </div>
              <hr />
              <div className='my-2'>
                <p className='text-[#686868]'>Followers</p>
                <p>155</p>
              </div>
              <hr />
              <div className='my-4'>
                <a href='#' className='text-[#e44d3a]'>View Profile</a>
              </div>
            </div>
          </div>

          <div className='col-span-2 w-[95%] mx-auto'>
            <div className=' flex items-center bg-white border-t-4 border-[#e44d3a] py-6'>
              <img src='/user2.png' className='bg-[#e44d3a] rounded-full ml-5' width="60px" />
              <button className='bg-[#e5e7eb] text-[#94a3b8] px-6 py-3 rounded-md mr-3'>Post a Project</button>
              <button className='bg-[#e44d3a] text-white px-6 py-3 rounded-md'>Post a Job</button>
            </div>
            <div className='bg-white mt-5 py-5'>
              ii
            </div>
          </div>

          <div className=''>
            <div className='bg-white py-5 text-center'>
              <img src='/logo.png' width="80px" className='mx-auto'/>
              <p>Track Time on Workwise</p>
              <p>Pay only for the Hours worked</p>
              <hr/>
              <a href='#' className='text-[#e44d3a]'>Sign Up</a>
            </div>
          </div>

          hhh
        </div>
      </div>

    </>

  )
}
