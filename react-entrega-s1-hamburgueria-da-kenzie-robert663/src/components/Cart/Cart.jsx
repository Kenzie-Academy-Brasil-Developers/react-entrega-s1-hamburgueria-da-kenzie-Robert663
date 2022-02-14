import '../../CSS/Cart/Cart.css';
import CartProd from '../CartProd/CartProd';
const Cart = ({list}) => {
    return(
        <ul className = 'Cart'>
           {list.map((produtos, index) => 
             <CartProd key = {index}>
                  {produtos}
             </CartProd>
  )}
          </ul>
    )
}

export default Cart;