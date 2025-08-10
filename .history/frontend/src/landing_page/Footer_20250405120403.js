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
                              <a href=''>About</a><br
                              <a href=''>Products</a><br
                              <a href=''>Pricing</a><br
                              <a href=''>Referral programme</a><br
                              <a href=''>Careers</a><br
                              <a href=''>Zerodha.tech</a><br
                              <a href=''>Press & Media</a><br
                              <a href=''>Zerodha Cares (CSR)</a><br
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