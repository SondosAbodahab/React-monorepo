import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = { color: "red", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Pizza company</h1>
    </header>
  );
}

function Menu() {
  const pizzaNum = pizzaData.length
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {!!pizzaNum && <ul className="pizzas">
        {
          pizzaData.map((pizza,index )=>{
            return <Pizza key={index}
            photoName={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            />
          })
        }
      </ul>}
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 24;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (<footer className="footer">{isOpen && (
  <div className="order">
    <p>We are open until {closeHour}:00</p>
    <button className="btn">Order now</button>
  </div>
  )}</footer>)
}

function Pizza({photoName, name , ingredients, price}) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

// react 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
