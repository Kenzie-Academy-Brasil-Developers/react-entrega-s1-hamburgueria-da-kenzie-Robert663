import Button from '../Button/Button';
import '../../CSS/CartProd/CartProd.css';
const CartProd = ({children, onClick, index}) => {

    return (
        <li className='CartList' index={index}>
            <div className='cartImgHeader'>
            <img className='CartImage' src = {children.img}></img>
            </div>
            <div>
            <h2>{children.name}</h2> 
            <p>{children.category}</p>
            </div>
            <Button className = 'buttonCart' onClick={onClick}>Deletar</Button>
        </li>
    )
}

export default CartProd