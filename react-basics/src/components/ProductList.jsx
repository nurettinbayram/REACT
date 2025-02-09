import { items } from "../data";
import Product from "./Product";

export default function ProductList(){
    
    return ( 
    <> {/*bunlar kapsayici divler anlamina gelir */}
    <h2 className='title'>Product list</h2>
    {
      items.length > 0 ? (
        <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list' >
          {
            items.map((item, index)=>(
              <div className='col' key = {index}>
                <Product   productObj={item} />
              </div>
            
            ))
          }
        </div>
      ) : (
        <p>Suanda satista urunumuz  yok..</p>
      )
    }
    </>
  )}