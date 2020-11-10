import React from 'react';
import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

import './Layout.css';

const Layout = ({children}) => {
    return ( 
        <Fragment>
            <Header/>
                <div>
                    {children}
                </div> 
            <Footer/>
        </Fragment>
    );
}
 
export default Layout;