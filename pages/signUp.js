import OauthGoogle from "@/components/OauthGoogle";
import styles from "../styles/login.module.css";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Input, Radio } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const login = () => {

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     axios.post("http://localhost:3000/api/user", {
  //         email: email,
  //         password: password
  //     })
  //         .then((response) => {
  //             console.log(response);
  //         })
  //         .catch((error) => {
  //             setError(error);
  //         });
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

  };

  return (
    <div className={`${styles.login} bg-[#e44d3a] flex justify-center items-center`}>
      <div className={`container w-2/3 ${styles.box}`}>
        <div className=" grid grid-cols-2 flex justify-center py-6">
          <div className="px-5 py-5">
            <div className="flex flex-row items-center">
              <img src="logo.png" alt="logo" />
              <h1 className="text-2xl font-semibold">Workwise</h1>
            </div>
            <p className="text-slate-600 mt-5 mb-5">Workwise, is a global freelancing platform and social
              networking where businesses and independent
              professionals connect and collaborate remotly</p>
            <img src="login/signIn.png" alt="signIn" width="450px" />
          </div>

          <div className="px-7 py-7 border-l">
            <div className="flex justify-end">
              <a href="/login"><button className="bg-zinc-300 text-black py-2 px-3 rounded-l-lg">Sign in</button></a>
              <a href="/signUp"><button className="bg-[#e44d3a] text-white py-2 px-3 rounded-r-lg">Sign up</button></a>
            </div>
            <h3 className="text-xl">Sign up</h3>
            <hr className="mt-2 mb-4 w-10 border border-[#e44d3a] " />
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Name"
                prefix={<UserOutlined />}
                className="mb-4"
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
              />
              <Input
                placeholder="Email"
                prefix={<MailOutlined />}
                className="mb-4"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />

              <Input.Password
                placeholder="Password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                prefix={<LockOutlined />}
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />

              <Input.Password
                placeholder="Confirm password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                prefix={<LockOutlined />}
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />

              <div className="flex justify-between">
                <Radio className="text-base text-slate-600">I agree to Workwise Terms & Conditions.</Radio>
              </div>
              {error ? <p className="flex justify-center">{error}</p> : " "}
              <button className="mt-4 mb-5 bg-[#e44d3a] text-white py-2 px-6 rounded" type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </div>)
}

export default login
