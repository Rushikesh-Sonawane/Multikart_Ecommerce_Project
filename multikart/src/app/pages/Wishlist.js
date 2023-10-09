import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/wishlist.css';

const Wishlist = () => {
    return (
        <div>
        
            <div className="container-fluid bg-wishlist">
                <div className="row ">
                    <div className="col-lg-6 offset-1">
                        <h2 className='wishlist-headinhH2'>WISHLIST</h2>
                    </div>
                    <div className="col-lg-2 offset-2 ">
                        <ul className='d-flex list-unstyled '>
                            <li className='ms-2'><Link className='text-decoration-none listHeadingWish' to="/">HOME</Link><span className='fs-5 ps-2 listHeadingWish '>/</span></li>
                            <li className='ms-2'><Link className='text-decoration-none listHeadingWish' >WISHLIST</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className='table text-center mt-5'>
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>AVALIBILTY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-7  offset-1 d-flex flex-row-reverse">
                        <button className='ms-3  btn-wishlist'>CHECK OUT</button>
                        <button className=' btn-wishlist'>CONTINUE SHOPPING</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
