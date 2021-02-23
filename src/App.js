// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const product = [
    { name: 'Photoshop', pricing: '$20.99', details: 'Create and share online videos. Fast and easy.' },
    { name: 'Illustrator', pricing: '$30.99', details: 'Professional video and film editing.' },
    { name: 'Premiere Rush', pricing: '$40.99', details: 'Create and share online videos. Fast and easy.' },
    { name: 'Indesign Rush', pricing: '$45.99', details: 'Create and share online videos. Fast and easy.' }
  ];
  const nayika = ['Purnima', 'Mousumi', 'Popi', 'Cathy'];
  let app = { name: 'React' };
  let power = { feature: 'dynamic' };
  let style = {
    color: 'salmon',
    backgroundColor: 'gray'
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>The Beauty queen {app.name}</h1>
        <h3 style={{ color: 'cyan', backgroundColor: 'orange' }}>The key feature is: {power.feature + " " + app.name}</h3>

        {/* create multiple elements from an array and array of objects */}
        <ul>
          {
            nayika.map(naika => <li>{naika}</li>)
          }
          {
            product.map(products => <li>{products.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>
        <div>

          {/* alternative of writing product element individually */}
          {
            product.map(pd => <Products product={pd}></Products>)
          }
        </div>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Hero nayok="Jeet" nayika="Koel"></Hero>
        <Hero nayok="Soham" nayika="Shrabonti"></Hero>
        <Hero nayok="Amir Khan" nayika="Preety Jinta"></Hero>

        {/* <Products product = {product[0]}></Products>
        <Products product = {product[1]}></Products>
        <Products product = {product[2]}></Products> */}
      </header>
    </div>
  );
}

// similar in look and similiar in data 
function Person() {
  let personStyling = {
    boxShadow: '5px 5px 10px springgreen',
    border: '2px solid springgreen',
    padding: '20px',
    width: '50%',
    margin: '20px auto'
  }
  return (
    <div style={personStyling}>
      <h2>I am a React Developer</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate molestiae iure, minima alias sed dicta! Perspiciatis minima laudantium rem?</p>
    </div>
  )
}

//similar in look and different in data
function Hero(props) {
  // we can pass value from an array 
  // const nayoks = ['Jeet', 'Rubel', 'Manna', 'Bulbul'];
  let HeroStyling = {
    boxShadow: '5px 5px 10px tomato',
    border: '2px solid tomato',
    padding: '20px',
    width: '50%',
    margin: ' 20px auto'
  }
  return (
    <div style={HeroStyling}>
      <h2>Nayok: {props.nayok}</h2>
      <p>Hero of {props.nayika}</p>
    </div>
  )
}

//pass object to components and access objects
function Products(props) {
  const productStyling = {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px cyan',
    border: '2px solid cyan',
    display: 'inline-block',
    margin: '20px auto',
    color: 'white',
    textAlign: 'left',
    width: '40%',
    height: '100%'
  };
  const { name, pricing, details } = props.product;
  return (
    <div style={productStyling}>
      <h2>{name}</h2>
      <h3>{pricing}</h3>
      <p>{details}</p>
      <button>Buy Now</button>
    </div>
  )
}

//component state hook and set component state method
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onMouseOver={handleIncrease}>Increse</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

// load dynamic data and api call 
function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  })

  const userStyling ={
    border: '2px solid purple',
    padding:'20px',
    boxShadow: '5px 5px 10px purple',
    textAlign: 'left'
  }
  return (
    <div>
      <div style={userStyling}>
      <h2>Dyanmic User Emails:</h2>
        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
      </div>
    </div>
  )
}
export default App;
