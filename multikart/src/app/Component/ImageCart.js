import React from 'react';
import '../../assets/css/ImageCart.css'

function Imagecart(){

    return(
<div className='container-fluid'>
 <div className="row">
  <div className="col-sm-4">
    
      <div className="card-body  cartmargin card-1">
    <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/banner1.jpg' width='360'height='190'/>
    <div className='heading .d-none'>
    <h4>MINIMUM 50% OFF</h4>
       <h2>GOLD WATCH</h2>
       </div>
      </div>
    
  </div>


  <div className="col-sm-4">
    <div >
      <div className="card-body  cartmargin card-1">
        
         <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/banner2.jpg'width='380'height='190'/>     
      </div>
    </div>
  </div>


 <div className="col-sm-4">
     <div className=" cartmargin card-1">
       <div>
       <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/banner.jpg'width='360'height='190'/> 
       <div className='headingdk'>
       <h4>MINIMUM 50% OFF</h4>
       <h2>GOLD WATCH</h2>
        </div> 
       
       </div>
     </div>
   </div>
 </div>
 </div>
)
 } 
export default Imagecart