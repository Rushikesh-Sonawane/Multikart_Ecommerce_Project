import HomeWatch from "../../Component/HomeWatch";
import Product from "./Product"
import ImageCart from '../../Component/ImageCart';
import SpecialProduct from '../../Component/SpecialProduct'
import FreeShipping from '../../Component/FreeShip';

function Watch(){
    var furnitureUrl="http://localhost:5000/WatchesBrand"
    return(
        <div>
            <HomeWatch/>
            <Product Url={furnitureUrl} />
            <ImageCart/>
     <SpecialProduct/>
     <FreeShipping/>

        </div>
    )
}
export default Watch;