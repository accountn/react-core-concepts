import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const arry = ['halal monu', 'belal', 'celal','Amin', 'Akash']
  const products = [
    {name: 'Photoshop', price:'$99.99'},
    {name: 'Illustrator', price:'&60.66'},
    {name: 'PDF Reader', price:'$50.5'}
  ]
  const productNames = products.map(product => product)
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          React core concept
        </p>
        <ul>
          {
            arry.map(arry => <li>{arry}</li>)
          }
          {
            products.map(product => <Product product={product}></Product>)
          }
        <li>{arry[0]}</li>
        <li>{arry[1]}</li>
        <li>{arry[2]}</li>
        </ul>
        <Counter></Counter>
       <Person modhu={arry[0]}></Person>
       <Product product={products[0]}></Product>
       <Product product={products[1]}></Product>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(5);
  const handleIncrease = () => {
    const newCount = count  + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid red',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props){
  return (
  <div>
    <h1>Amr sonar bangla: {props.modhu}</h1>
    <h3>I LOVE U ALLAH</h3>
  </div>
  );
}


export default App;
