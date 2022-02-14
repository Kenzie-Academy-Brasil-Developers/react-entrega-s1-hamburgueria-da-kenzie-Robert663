import ProductList from './components/ProductList/ProductList';
import './App.css';
import '../src/CSS/Cart/Cart.css';
import './CSS/Header/Header.css';
import Button from './components/Button/Button';
import Cart from './components/Cart/Cart';
import Input from './components/Input/Input';
import {useEffect, useState} from 'react';
function App() {
  const [produtos, setProdutos] = useState([]);
  const [prodClicked, setProdClicked] = useState([]);
  const [cartPrice, setCartPrice] = useState([]);
  const removerTudo = (e) => {
      setProdClicked([]);
      setCartPrice([]);
  }
  const sendToCart = (e) => {
    if(prodClicked.length > 0 && prodClicked.find(x => x.id == e.target.value)){
      setCartPrice([...cartPrice], produtos[e.target.value-1].price)
    }else{
      setProdClicked([...prodClicked, produtos[e.target.value-1]])
    }
    setCartPrice([...cartPrice, produtos[e.target.value-1].price])
  }
  const sumPrices =  cartPrice.length > 0 && cartPrice.reduce((a,b) => a+b, 0).toFixed(2)

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((data) => setProdutos(data))
  }, [])
    return (
      <div className="App">
        <header> 
          <div className='image'/>
        </header>
          <Input 
          placeholder = 'Digitar Pesquisa' 
         />
        <main>
          <ProductList sendToCart = {sendToCart} list = {produtos}/>
        </main>
        <div className='CartBlock'>
        <h2 className='h2Cart'>Carrinho de compras</h2>
        </div>
        <div className='CartProd'>
          <Cart list = {prodClicked}/>
        </div>
          <hr></hr>
          <p className='total'>Total</p>
           <span className='sumPrices'>R$ {sumPrices}</span>
          <Button onClick={removerTudo} className='ButtonRemover'>Remover tudo</Button>
      </div>
    );
    }
      
export default App;
