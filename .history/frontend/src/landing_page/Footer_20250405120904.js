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
                              <a href=''>About</a><br></br>
                              <a href=''>Products</a><br></br>
                              <a href=''>Pricing</a><br></br>
                              <a href=''>Referral programme</a><br></br>
                              <a href=''>Careers</a><br></br>
                              <a href=''>Zerodha.tech</a><br></br>
                              <a href=''>Press & Media</a><br></br>
                              <a href=''>Zerodha Cares (CSR)</a><br></br>
                        </div>
                        <div className='col'>
                        <p>Support</p>
                        <p>Company</p>
                              <a href=''>Contact us </a><br></br>
                              <a href=''>Support portal</a><br></br>
                              <a href=''>Z-Connect blog</a><br></br>
                              <a href=''>List of charges</a><br></br>
                              <a href=''>Downloads & resources</a><br></br>
                              <a href=''>Videos</a><br/>
                              <a href=''>Market overview</a><br></br>
                              <a href=''>How to file a complaint?</a><br></br>
                              <a href=''>Status of your complaints</a><br></br>
                        </div>
                        <div className='col'>
                        <p>Account</p>
                        <a href=''>Open an account</a>
                        <a href=''></a>
                        </div>
                  </div>
            </div>

      );
}

export default Footer;