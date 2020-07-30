import React from 'react';
import Link from 'next/link';

const AuthPage = ({ title }) => {
    return (
        <div className="auth">
            {title}
            <div>This is MAPPING page</div>
        </div>
    );
};
AuthPage.getInitialProps = context => {
    return { title: 'Mapping Page Title' }
}

export default AuthPage;