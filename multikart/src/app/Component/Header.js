import React from 'react';
import "../../assets/css/Header.css"



function Header() {


  return (
    <>
      <div id='navbardk' className='container-fluiddk'>

        <div id='navbar1dk'>
          Welcome to Our store Multikart
        </div>
        <div className='container2dk' id='navbardk'>call Us -123-456-7890</div>

        <div className='link1dk'><img src='https://w7.pngwing.com/pngs/997/899/png-transparent-red-heart-illustration-heart-icon-3d-red-heart-love-heart-emoticon-thumbnail.png' width='12' height='12' />Wishlist</div>

        <div className="dropdown">
          <div className="dropbtn"><img src='https://w7.pngwing.com/pngs/129/350/png-transparent-contact-friend-icon-pawn-person-symbol-thumbnail.png' width='13' height='13' />My Account</div>
          <div className="dropdown-content">
            <a href="#"><h6>Login</h6></a>
            <a href="#"><h6>Register</h6></a>
            <a href="#"><h6>Log Out</h6></a>
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
              <a className="btn btn-default" href="#" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <i className="fa fa-align-justify" title="Align Justify" ></i>
              </a>
            </div>
            <div className='homepagedisplayflexdk' col-2>
              <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png' />

            </div>

            <div className='homepagedisplayflexdk' col-1 id='homepage_navbar'>
              <div className="btn-group">

                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">New Demo New</a></li>
                    <li><a className="dropdown-item" href="#">Clothing</a></li>
                    <li><a className="dropdown-item" href="#">Basics</a></li>
                    <li><a className="dropdown-item" href="#">Beauty</a></li>
                    <li><a className="dropdown-item" href="#">Electronic</a></li>
                    <li><a className="dropdown-item" href="#">Furniture</a></li>
                    <li><a className="dropdown-item" href="#">Vegetables</a></li>
                    <li><a className="dropdown-item" href="#">Watch</a></li>
                    <li><a className="dropdown-item" href="#">Lights</a></li>
                    <li><a className="dropdown-item" href="#">Goggles</a></li>

                  </ul>
                </div>
              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                  </a>
                  <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Right Sidebar</a></li>

                    <li><a className="dropdown-item" href="#">No Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Sidebar Popup</a></li>
                    <li><a className="dropdown-item" href="#">Metro New</a></li>
                    <li><a className="dropdown-item" href="#">Full Width New</a></li>
                    <li><a className="dropdown-item" href="#">3 Grid</a></li>
                    <li><a className="dropdown-item" href="#">6 Grid</a></li>
                    vercel<li><a className="dropdown-item" href="#">List View</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTS
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Thumbnail Image</a></li>

                    <li><a className="dropdown-item" href="#">3-Column</a></li>
                    <li><a className="dropdown-item" href="#">4 Image</a></li>
                    <li><a className="dropdown-item" href="#">Bundle Product</a></li>
                    <li><a className="dropdown-item" href="#">Sticky</a></li>
                    <li><a className="dropdown-item" href="#">Accordian</a></li>
                    <li><a className="dropdown-item" href="#">Image Swatch</a></li>
                    <li><a className="dropdown-item" href="#">Accordian</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>

              <div className="btn-group">
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Furnitures
                  </a>
                  <ul className="dropdown-menu">
                    <h5 id='middledk'>Portfolio</h5>
                    <li><a className="dropdown-item" href="#">Portfolio Grid 2</a></li>
                    <li><a className="dropdown-item" href="#">Portfolio Grid 3</a></li>
                    <li><a className="dropdown-item" href="#">Portfolio Grid 4</a></li>
                    <li><a className="dropdown-item" href="#">Masonry Grid 2</a></li>
                    <li><a className="dropdown-item" href="#">Masonry Grid 3</a></li>
                    <li><a className="dropdown-item" href="#">Masonry Grid 4</a></li>
                    <li><a className="dropdown-item" href="#">Masonry Full Width</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Vendor NEW</a></li>
                    <li><a className="dropdown-item" href="#">Account</a></li>

                    <li><a className="dropdown-item" href="#">About-us</a></li>
                    <li><a className="dropdown-item" href="#">Search</a></li>
                    <li><a className="dropdown-item" href="#">Typography NEW</a></li>
                    <li><a className="dropdown-item" href="#">Review</a></li>
                    <li><a className="dropdown-item" href="#">Order-Success</a></li>
                    <li><a className="dropdown-item" href="#">Compare</a></li>
                    <li><a className="dropdown-item" href="#">Collection</a></li>
                    <li><a className="dropdown-item" href="#">Lookbook</a></li>
                    <li><a className="dropdown-item" href="#">Site-Map</a></li>
                    <li><a className="dropdown-item" href="#">404</a></li>

                  </ul>
                </div>
              </div>
            </div>

            <div className='homepagedisplayflexdk' col-1>
              <div className="btn-group">


                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    BLOGS
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">No Sidebar</a></li>
                    <li><a className="dropdown-item" href="#">Blog Detail</a></li>
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
                <a href="#">English</a>
                <a href="#">Franch</a><br />
                <h4>Currency</h4>
                <a href="#">$USD</a>
                <a href="#">$IND</a>
                <a href="#">$EUR</a>
                <a href="#">$GBP</a>
              </div>
            </div>
            <div className='homepagedisplayflexdk' id='size' col-1>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzsHdivSzgnGmBt5up1Qz6IZuK20equGS3t5Yi3oXbpeP500N_dv5LSoH6ql-mhe8pQQ&usqp=CAU' height='37' width='37' />
            </div>

          </nav>
        </div>

      </div>


    </>



  )
}
export default Header

