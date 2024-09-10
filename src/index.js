import React from "react";
import ReactDOM from "react-dom/client"; // Corrected import
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
    <div className="conteiner">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="main-header">
      <h1 className="header-primarry">Fast React Pizza Co.</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <div className="header-content">
        <h2 className="header-secoundry"> our menu</h2>
        <p className="header-content-info">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.{" "}
        </p>
      </div>
      <div className="grid-2-colom">
        <MenuList />
      </div>
    </main>
  );
}

function MenuList() {
  return (
    <>
      {pizzaData.map((pizza) => (
        <Menu pizzaObj={pizza} key={pizza.name} />
      ))}
    </>
  );
}

function Menu({ pizzaObj: { name, ingredients, price, soldOut, photoName } }) {
  return (
    <div className={`menu-box ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="food-items" className="food-img" />
      <div className="menu-content">
        <h3 className="header-teriory">{name} </h3>
        <p className="menu-info">{ingredients} </p>
        <p className="price">{price} </p>
      </div>
    </div>
  );
}

function Footer() {
  const open = 23;
  const close = 22;

  return (
    <footer className="footer">
      <p className="footer-content">
        {open < close
          ? "We're happy to welcome you between 12:00 and 22:00."
          : "Sorry We close bro"}
      </p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
