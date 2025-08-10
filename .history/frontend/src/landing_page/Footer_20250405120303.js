import React from 'react';

function Footer() {
      return (  
            <div className='container'>
                  <div className='row'>
                        <div className='col'>
                              <img src='media/logo.svg' alt='logo' style={{width: "50%"}}/>
                        </div>
                        <div className='col'>
                              <p>Company</p>
                              <a href=''>About</a>
                              <a href=''>Products</a>
                              <a href=''>Pricing</a>
                              <a href=''>Referral programme</a>
                              <a href=''>Careers</a>
                              <a href=''>Zerodha.tech
                              <a href=''>Press & Media
                              <a href=''>Zerodha Cares (CSR)
                        </div>
                        <div className='col'>
                        <p>Support</p>
                        </div>
                        <div className='col'>
                        <p>Account</p>
                        </div>
                  </div>
            </div>

      );
}

export default Footer;