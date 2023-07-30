import React, { useState } from 'react';
import { AppstoreOutlined, HomeFilled, DownOutlined, TeamOutlined, SearchOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Input, Menu, Dropdown, message, Space } from 'antd';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import styles from "../styles/navbar.module.css";

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

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

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
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={`${styles.menu} bg-[#e44d3a] text-white`}/>
        <div className='bg-[#ca392f] w-px h-12'></div>
        <div className='flex'>
          <img src='/user2.png' className='ml-3 mr-3' width="32px"/>
          <div className='mr-3'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button className='text-white flex items-center'>John <CaretDownOutlined className='ml-2 mr-1' style={{ fontSize: '14px' }} /></button>
            {
              isDropdownVisible &&
              <div className={`${styles.Dropdown} rounded-md mt-5 px-5 pb-4`}>
                <a href="#">My profile</a>
                <a href="#">Saved items</a>
                <a href="#">Setting</a>
                <a href="#">Privacy</a>
                <a href="#">Help</a>
                <a href="#" className='border-t-indigo-500'>Log out</a>
              </div>
            }
          </div>
        </div>
        <div className='bg-[#ca392f] w-px h-12'></div>
      </div>

    </>

  )
}