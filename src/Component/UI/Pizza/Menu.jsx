import { Pizza } from "./Pizza";
import "../../../style/component/UI/Pizzastyle/Menu.css";
import pizzaData from "../../../data/Pizzadata.js";

export const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzalength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzalength > 0 ? (
          pizzas.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          ))
        ) : (
          <p>we are working to set the Menu</p>
        )}
      </ul>

      {/* Using dstructuring the object
      <ul className="pizzas">
        {pizzas.length > 0 ? (
          pizzas.map(({ name, ingredients, price, photoName, soldOut }) => (
            <Pizza
              key={name}
              name={name}
              ingredients={ingredients}
              price={price}
              photoName={photoName}
              soldOut={soldOut}
            />
          ))
        ) : (
          <p>No pizzas available.</p>
        )}
      </ul> */}

      {/* we pass the data using the props */}
      {/* <Pizza
        name="Focaccia"
        ingradient="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      />
      <Pizza
        name="Pizza Margherita"
        ingradient="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Spinaci"
        ingradient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={6}
      />
      <Pizza
        name="Pizza Funghi"
        ingradient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={4}
      /> */}
    </main>
  );
};
