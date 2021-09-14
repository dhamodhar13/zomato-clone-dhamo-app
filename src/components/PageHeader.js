import React, { Component } from 'react';
import '../styles/filter.css';
import '../styles/pageHeader.css'
import LoginSection from './LoginSection';



class PageHeader extends Component{

    render() {
        return (
            <div>
                <div className="container-fluid header p-2"> 
                    <nav className="navbar">
                        <div className="container">
                            <a className="navbar-brand logo-filter" href="/">d!</a>
                            <div className='login-section-pageHeader'>
                                <LoginSection />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default PageHeader;
