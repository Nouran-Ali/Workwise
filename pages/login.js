import OauthGoogle from "@/components/OauthGoogle";
import styles from "../styles/login.module.css";
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import { Input, Radio } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const login = () => {

    const [passwordVisible, setPasswordVisible] = React.useState(false);

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

                    <div className="px-7 py-5 border-l">
                        <div className="flex justify-end">
                            <a href="/login"><button className="bg-[#e44d3a] text-white py-2 px-3 rounded-l-lg">Sign in</button></a>
                            <a href="/signUp"><button className="bg-zinc-300 text-black py-2 px-3 rounded-r-lg">Sign up</button></a>
                        </div>
                        <h3 className="text-xl">Sign in</h3>
                        <hr className="mt-2 mb-4 w-10 border border-[#e44d3a] " />
                        <form onSubmit={handleSubmit}>
                            <Input
                                placeholder="Email"
                                prefix={<UserOutlined />}
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
                            <div className="flex justify-between">
                                <Radio className="text-base text-slate-600">Remember me</Radio>
                                <a href="#" className="text-base text-slate-600">Forgot Password?</a>
                            </div>
                            {error ? <p className="flex justify-center">{error}</p> : " "}
                            <button className="mt-4 mb-5 bg-[#e44d3a] text-white py-2 px-6 rounded" type="submit">Sign in</button>
                        </form>
                        <h3 className="text-center text-base">LOGIN VIA SOCIAL ACCOUNT</h3>

                        <div className="mt-5 flex justify-center">
                            <div>
                                <OauthGoogle />
                                {/* <OauthFacebook /> */}
                                {/* <button className="bg-white border text-black w-full py-2 rounded flex items-center justify-center"><img src="login/google.png" width="16px" className="mr-2" /> Login Via Google</button> */}
                                <button className="block bg-[#3d5998] text-white w-full py-2 rounded flex items-center justify-center mt-4"><img src="login/facebook.png" width="16px" className="mr-2" /> Login Via Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <a href="#" class="footer-links">Help Center</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">About</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Privacy Policy</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Community Guidelines</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Help Center</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Cookies Policy</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Career</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Forum</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Language</a>
                <div class="line-links">|</div>

                <a href="#" class="footer-links">Copyright Policy</a>
            </div> */}
        </div>)
}

export default login
