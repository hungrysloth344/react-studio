import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Array(bakeryData.length).fill(0));
  const [total, setTotal] = useState(0);

  return (

    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="App-Container">
        <div className="BakeryItem-Container">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem
              item={item}
              index={index}
              total={total}
              setTotal={setTotal}
              setCart={setCart}
              key={index}
            />

            // <p> Bakery Item {index}</p> // replace with BakeryItem component
          ))}
        </div>
        <div>
          <h2>Cart</h2>

          {/* TODO: render a list of items in the cart */}
          <p>Total Cost: ${Math.round(total * 100) / 100}</p>
          {console.log(cart)}
          {cart.map((key, idx) => {
            if (key > 0) {
              return (
                <div key={idx}>
                  {key}x {bakeryData[idx].name}
                </div>
              )

            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
