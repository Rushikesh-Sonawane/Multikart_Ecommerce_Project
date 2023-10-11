import React, { useState } from 'react';
import '../../assets/css/Footer.css'

const Footer = () => {


    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubscribe = () => {
        const isEmailValid = /^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(email);

        if (isEmailValid) {
            setEmail("");
            console.log(email);
            alert('Subscribed!');
            setSubscribed(true);
        }
    };

    return (
        <footer className="footer mt-5">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4>KNOW IT ALL FIRST!</h4>
                            <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="footer-widget">

                            {/* <form className='form-css' onSubmit={handleSubmit}>

                                <div className='col-lg-8 col-sm-12'>
                                    <input className='input-email' value={email}
                                        onChange={(e) => { handleChange(e.target.value) }} type="email" placeholder="Enter your email" />
                                </div>
                                <div className='col-lg-4 col-sm-12'><button className='subcribe-btn' onClick={handleSubscribe} type="submit">SUBSCRIBE</button></div>
                            </form> */}

                    {/* subscribe with subscribed button option 2 */}

                            <form className='form-css' onSubmit={handleSubmit}>
                                {!subscribed ?
                                    (<div className='d-flex'>
                                        <div className='col-lg-8 col-sm-12'>
                                            <input
                                                className='input-email'
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-lg-4 col-sm-12'><button className='subcribe-btn' onClick={handleSubscribe} type="submit">SUBSCRIBE</button></div>

                                    </div>
                                    ) : (
                                        <div className='col-lg-4 display-center col-sm-12'><button className='subcribe-btn' >Subscribed</button></div>
                                    )}
                            </form>
                        </div>
                    </div>


                    <div className="col-md-4 col-lg-4">
                        <div className="footer-title  footer-mobile-title">
                            <h4><span className="according-menu"></span></h4>
                        </div>
                        <div className="">
                            <div className="footer-contant">
                                <div className="footer-logo">
                                    <a href="/"><img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png" alt="" className="img-fluid" /></a>
                                </div>
                                <p style={{ padding: "5px", margin: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className='icons'>
                                    <a href='https://www.facebook.com' target='_blank'><i className="fa-brands fa-facebook social-icons"></i></a>
                                    <a href='https://plus.google.com' target='_blank'><i className="fa-brands fa-google-plus-g social-icons"></i></a>
                                    <a href='https://twitter.com' target='_blank'><i className="fa-brands fa-twitter social-icons"></i></a>
                                    <a href='https://www.instagram.com' target='_blank'><i className="fa-brands fa-instagram social-icons"></i></a>
                                    <a href='https://rss.com' target='_blank'><i className="fa-solid fa-rss social-icons"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="footer-widget">
                            <h4>MY ACCOUNT</h4>
                            <ul className='ul1 li1 a1'>
                                <li className='li1'><a href="/" className='a1'>Womens</a></li>
                                <li className='li1'><a href="/" className='a1'>Clothing</a></li>
                                <li className='li1'><a href="/" className='a1'>Accessories</a></li>
                                <li className='li1'><a href="/" className='a1'>Featured</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-widget">
                            <h4>WHY WE CHOOSE</h4>
                            <ul className='ul1'>
                                <li className='li1'><a href="/" className='a1'>Shipping & Return</a></li>
                                <li className='li1'><a href="/" className='a1'>Secure Shopping</a></li>
                                <li className='li1'><a href="/" className='a1'>Gallary</a></li>
                                <li className='li1'><a href="/" className='a1'>Affiliates</a></li>
                                <li className='li1'><a href="/" className='a1'>Contacts</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-widget">
                            <h4>STORE INFORMATION</h4>
                            <table className='table-change'>
                                <tr>
                                    <td><i className="fa-solid fa-location-dot contact-icon"></i></td>
                                    <td>Multikart Demo Store,</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Demo Store India 345-659</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-solid fa-phone contact-icon"></i></td>
                                    <td>Call Us: 123-456-7898</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-regular fa-envelope contact-icon"></i></td>
                                    <td>Email Us: Support@Fiot.Com</td>
                                </tr>
                                <tr>
                                    <td><i className="fa-solid fa-fax contact-icon"></i></td>
                                    <td>Fax: 123456</td>
                                </tr>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
            <div className='container row'>
                <div className="col-lg-6">

                    <p> ©2023-24 themeforest powered by pixelstrap</p>
                </div>
                <div className="col-lg-6">
                    <ul className="ul2 footer-payment-icons">
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-amex text-danger i1"></i></a></li>
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-mastercard text-danger"></i></a></li>
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-diners-club text-danger"></i></a></li>
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-discover text-danger"></i></a></li>
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-paypal text-danger"></i></a></li>
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-stripe text-danger"></i></a></li>
                        <li className='i1'><a href='/' target='_self'><i className="fab fa-cc-visa text-danger"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
