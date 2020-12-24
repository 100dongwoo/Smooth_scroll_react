import React from 'react';
import SignIn from '../components/Signin';
import ScroolToTop from '../components/ScroolToTop';
function SigninPage(props) {
    return (
        <div>
            <ScroolToTop />
            <SignIn />
        </div>
    );
}

export default SigninPage;
