// TODO: create a component that displays a single bakery item

import React from 'react';

const BakeryItem = (props) => {
  return (
    <div className = "BakeryItem"> 
        <img src={props.item.image} alt="bakery item"></img>
        <div className="BakeryTextContainer">
        <strong className = "Title">{props.item.name}</strong>
        <div>{props.item.description}</div>
        <div>{props.item.price}</div>
        <button onClick={() => {
            props.setTotal(props.total + props.item.price);
            props.setCart((prevCart) => {
                let newCart = [...prevCart];
                newCart[props.index] += 1;
                return newCart;
            })
        }}>Add to Cart</button>
        </div>
    </div>
  );
};

export default BakeryItem;