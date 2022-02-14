import '../../CSS/Product/Product.css'
import Button from '../Button/Button';
import { useState } from 'react';

const Product = ({children, sendToCart}) => {
    return (
        <li className='ProdLi'>
            <div className='imgHeader'>
            <img src = {children.img}></img>
                </div>
            <h2>{children.name}</h2> 
            <p>{children.category}</p>
            <span>{children.price}</span>
            <Button onClick = {sendToCart} value = {children.id} className= 'buttonProd'>Adicionar</Button>
        </li>
    )
}

export default Product;
