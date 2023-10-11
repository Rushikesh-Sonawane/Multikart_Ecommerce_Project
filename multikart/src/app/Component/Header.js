import React from 'react';
import "../../assets/css/Header.css"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'



function Header() {
  const  cartItem=useSelector(state=>state.cart)

  return (
    <>
      <div id='navbardk' className='container-fluiddk'>

        <div id='navbar1dk'>
          Welcome to Our store Multikart
        </div>
        <div className='container2dk' id='navbardk'>call Us -123-456-7890</div>

        <div className='link1dk'><img src='https://w7.pngwing.com/pngs/997/899/png-transparent-red-heart-illustration-heart-icon-3d-red-heart-love-heart-emoticon-thumbnail.png' width='12' height='12' /><NavLink to={"/Wishlist"} >Wishlist</NavLink></div>

        <div className="dropdown">
          <div className="dropbtn"><img src='https://w7.pngwing.com/pngs/129/350/png-transparent-contact-friend-icon-pawn-person-symbol-thumbnail.png' width='13' height='13' />My Account</div>
          <div className="dropdown-content">
          <NavLink to={"/Login"} >Login</NavLink>
          <NavLink to={"/Wishlist"} >Wishlist</NavLink>
          <NavLink to={"/Cart"} >Cart</NavLink>
          <NavLink to={"/clothing"} className='text-dark offset-9 text-decoration-none'>CartItem:{cartItem.length}</NavLink>
          <NavLink to={"/Register"} >Register</NavLink>
          <NavLink to={"/"} >Logout</NavLink>
            {/* <NavLink to="/"><h6>Login</h6></NavLink>
            <NavLink to="/"><h6>Register</h6></NavLink>
            <NavLink to="/"><h6>Log Out</h6></NavLink> */}
          </div>
        </div>

      </div>


      <div className='container3dk container'>
        <div className='row'>

          <nav className='homepagenav'>
            <div className='homepagedisplayflex btn-group' col-1 >

              {/* Offcanvas Sidebar  */}
              <div className="offcanvas offcanvas-start" id="demo"  >
                <div className="offcanvas-header">
                  <h1 className="offcanvas-title" data-bs-dismiss="offcanvas"> Back</h1>
                  <hr></hr>
                </div>
                <div className="offcanvas-body">
                  <h5>CLOTHING</h5><br></br>
                  <h5>BAGS</h5><br></br>
                  <h5>FOOTWEAR</h5><br></br>
                  <h5>WATCHES</h5><br></br>
                  <h5>ACCESSORIES</h5><br></br>
                  <h5>HOUSE OF DESIGN</h5><br></br>
                  <h5>BEAUTY AND PERSONAL CARE</h5><br></br>
                  <h5>HOME AND DECOR</h5><br></br>
                  <h5>KITCHEN</h5>


                </div>
              </div>


              <div id="myNav" class="overlay">

              </div>

              {/* Button to open the offcanvas sidebar  */}
              <NavLink className="btn btn-default" to="/" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <i className="fa fa-align-justify" title="Align Justify" ></i>
              </NavLink>
            </div>
            <div className='homepagedisplayflexdk' col-2>
              <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png' />

            </div>

            <div className='homepagedisplayflexdk' col-1 id='homepage_navbar'>
              <div className="btn-group">

                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/">New Demo New</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/clothing">Clothing</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Basics</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Beauty</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Electronic</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Furniture</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Vegetables</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Watch</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Lights</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Goggles</NavLink></li>

                  </ul>
                </div>
              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                  </NavLink>
                  <ul className="dropdown-menu" >
                    <li><NavLink className="dropdown-item" to="/">Left Sidebar</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Right Sidebar</NavLink></li>

                    <li><NavLink className="dropdown-item" to="/">No Sidebar</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Sidebar Popup</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Metro New</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Full Width New</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">3 Grid</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">6 Grid</NavLink></li>
                    vercel<li><NavLink className="dropdown-item" to="/">List View</NavLink></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTS
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/">Sidebar</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Thumbnail Image</NavLink></li>

                    <li><NavLink className="dropdown-item" to="/">3-Column</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">4 Image</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Bundle Product</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Sticky</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Accordian</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Image Swatch</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Accordian</NavLink></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>

              <div className="btn-group">
                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Furnitures
                  </NavLink>
                  <ul className="dropdown-menu">
                    <h5 id='middledk'>Portfolio</h5>
                    <li><NavLink className="dropdown-item" to="/">Portfolio Grid 2</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Portfolio Grid 3</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Portfolio Grid 4</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Masonry Grid 2</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Masonry Grid 3</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Masonry Grid 4</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Masonry Full Width</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/">Vendor NEW</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Account</NavLink></li>

                    <li><NavLink className="dropdown-item" to="/">About-us</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Search</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Typography NEW</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Review</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Order-Success</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Compare</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Collection</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Lookbook</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Site-Map</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">404</NavLink></li>

                  </ul>
                </div>
              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">


                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    BLOGS
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/">Blog Left Sidebar</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Blog Right Sidebar</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">No Sidebar</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Blog Detail</NavLink></li>
                  </ul>
                </div>
              </div>

            </div>


            <div className='homepagedisplayflexdk' id='size' col-1>
              <img src='https://w7.pngwing.com/pngs/198/609/png-transparent-computer-icons-symbol-search-box-magnifying-glass-search-miscellaneous-black-zooming-user-interface-thumbnail.png' height='25' width='25' />
            </div>



            <div className="dropdown  homepagedisplayflexdk" id='size' col-1>
              <div className="dropbtn"><img src='https://w7.pngwing.com/pngs/563/496/png-transparent-computer-icons-gear-setting-area-setting-set-thumbnail.png' height='25' width='25' /></div>
              <div className="dropdown-content">
                <h4>Languages</h4>
                <NavLink to="/">English</NavLink>
                <NavLink to="/">Franch</NavLink><br />
                <h4>Currency</h4>
                <NavLink to="/">$USD</NavLink>
                <NavLink to="/">$IND</NavLink>
                <NavLink to="/">$EUR</NavLink>
                <NavLink to="/">$GBP</NavLink>
              </div>
            </div>
            <div className='homepagedisplayflexdk' id='size' col-1>
             
            <NavLink to={"/Cart"} className='text-dark text-decoration-none'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzsHdivSzgnGmBt5up1Qz6IZuK20equGS3t5Yi3oXbpeP500N_dv5LSoH6ql-mhe8pQQ&usqp=CAU' height='37' width='37' /><span className='border border-2 text-bg-warning rounded-5 p-2'>{cartItem.length}</span></NavLink>
            </div>

          </nav>
        </div>

      </div>
     

    </>



  )
}
export default Header

