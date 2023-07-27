import React, { useState } from 'react';
import { AppstoreOutlined, HomeFilled, DownOutlined, TeamOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Menu } from 'antd';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeFilled className='ml-2 mt-4 text-white' style={{ fontSize: '18px' }} />,
  },
  {
    label: 'Profiles',
    key: 'profiles',
    icon: <TeamOutlined className='ml-2 mt-4 text-white' style={{ fontSize: '18px' }} />,
  },
  {
    label: 'Jobs',
    key: 'jobs',
    icon: <AppstoreOutlined className='ml-2 mt-4 text-white' style={{ fontSize: '18px' }} />,
  },
  {
    label: 'Messages',
    key: 'messages',
    icon: <AppstoreOutlined className='ml-2 mt-4 text-white' style={{ fontSize: '18px' }} />,
  },
  {
    label: 'Notification',
    key: 'notification',
    icon: <AppstoreOutlined className='ml-2 mt-4 text-white' style={{ fontSize: '18px' }} />,
  },
];

export default function Navbar() {

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

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
        <div className='flex items-center bg-[#e44d3a] px-7'>
          <Link href="/" >
            {/* <Image layout="fill" src="/Final-Logo.png" alt="logo" /> */}
            <img src="/logo2.png" alt="logo" />
          </Link>

          <div className='ml-5 mr-7'>
            <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
          </div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='bg-[#e44d3a] text-white' />
          <div className='bg-[#ca392f] w-px h-12'></div>


          <div className='bg-[#ca392f] w-px h-12'></div>
        </div>

    </>

  )
}