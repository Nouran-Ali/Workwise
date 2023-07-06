import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';

const OauthGoogle = () => {

    const [profile, setProfile] = useState(null);

    return (
        <div>
            {/* {!profile ? */}
             <GoogleOAuthProvider clientId="313057911750-in7loii26vcj73bsrdn1e59fhr3k075o.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details = jwtDecode(credentialResponse.credential);
                        setProfile(details)
                        console.log(details);
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider> 
            {/* : "" */}
            {/* } */}

            {/* {profile ? 
            <>
            <h1>{profile.email}</h1>
            <h1>{profile.name}</h1>
            <img src={profile.picture}/>
            </>
            
            : " "} */}
        </div>
    )
}

export default OauthGoogle
