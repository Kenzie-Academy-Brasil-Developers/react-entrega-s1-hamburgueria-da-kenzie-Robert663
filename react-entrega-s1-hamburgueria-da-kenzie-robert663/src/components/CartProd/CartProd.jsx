import Button from '../Button/Button';
import App from '../../App';
import '../../CSS/CartProd/CartProd.css';
import Cart from '../Cart/Cart';
const CartProd = ({children}) => {

    return (
        <li className='CartList'>
            <div className='cartImgHeader'>
            <img className='CartImage' src = {children.img}></img>
            </div>
            <div>
            <h2>{children.name}</h2> 
            <p>{children.category}</p>
            </div>
            <Button className = 'buttonCart' >Deletar</Button>
        </li>
    )
}

export default CartProd