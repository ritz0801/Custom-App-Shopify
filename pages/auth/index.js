import React from 'react';
import './auth.css'
import Link from 'next/link';

const AuthPage = ({title}) => {
    return (
        <div className="auth">
            {title}
            <div>This is auth page</div>

            <Link href="/"  >Home</Link>
        </div>
    );
};
AuthPage.getInitialProps = context => {
    console.log("context: ", context)
    return {title: 'Auth Page Title'}
}

export default AuthPage;