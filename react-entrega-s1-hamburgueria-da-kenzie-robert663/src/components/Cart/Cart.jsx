import '../../CSS/Cart/Cart.css';
import CartProd from '../CartProd/CartProd';
const Cart = ({list, removerItem}) => {
    return(
        <ul className = 'Cart'>
           {list.map((produtos, index) => 
             <CartProd key = {index} onClick={() => removerItem(produtos.id)}>
                  {produtos}
             </CartProd>
  )}
          </ul>
    )
}

export default Cart;