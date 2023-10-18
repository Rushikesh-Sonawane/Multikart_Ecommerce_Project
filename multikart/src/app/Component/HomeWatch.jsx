import React,{useEffect, useState} from "react";

function HomeWatch(){
    const [WatchesBrand , setWatchesBrand] = useState([]) ;
    useEffect(()=>{
        fetch('http://localhost:5000/WatchesBrand') 
        .then((response)=>response.json())
        .then((result)=>setWatchesBrand(result))
        .catch((err)=>console.log(err))
 },[])

    return(
       
<div className='d-flex mt-5 watch_img'>
{WatchesBrand.map((item) => (
  <div className="col-lg-3">
    <div className="card text-center" key={item.id} >
      <div className='text-center'>
        <img src={item.image} className='card-img-top'/>
      </div>
      <div className="card-body">
        <div>
        <h5 className="card-title">{item.title}</h5>
        </div>
        <p className="card-text">{item.subtitle}</p>
        <p className="card-text">{item.type}</p>
        <p className="card-text">{item.brand}</p>
        <p className="card-text">{item.feature}</p>
        <div className='card-footer hover_button'>
          
          <button className="btn btn-outline-danger">{item.button}</button>
        </div>
      </div>
    </div>
  </div>
))}
<div>
</div>

</div>
    )
}
export default HomeWatch