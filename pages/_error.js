import React from 'react';
import Link from 'next/link'
import Route from 'next/router'

const errorPage = () => {
    return (
        <div>
            <div>
                Opps, somethings went wrong!
            </div>
            
            <Link href="/">Go home</Link>
        </div>
    );
};

export default errorPage;