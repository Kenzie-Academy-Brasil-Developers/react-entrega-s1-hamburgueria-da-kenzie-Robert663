import Product from '../Product/Product';
import '../../CSS/ProductList/ProductList.css'
const ProductList = ({list, sendToCart}) => {
     return(
     <ul className = 'ProdList'>
          {list.map((produtos, index) => 
               <Product sendToCart = {sendToCart} key = {index}>
                    {produtos}
               </Product>
    )}
    </ul>
     )
}


export default ProductList;