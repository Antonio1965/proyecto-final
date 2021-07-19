import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Context } from '../../Context';
import { Counter } from '../Counter/Counter';


export const ItemDetail = ({ itemToDisplay: item }) => {
 
  // const { addToCart, removeFromCart } = useContext(Context);

  const [count, setCount] = useState(1);

  const [finished, setFinished] = useState(false);

  const handleState = () => setFinished(!finished);

  // const handleSend = () => {
  //   addToCart({ ...item, quantity: count });
  // };

  // const handleRemove = () => {
  //   removeFromCart(item);
  // };

  return (
    <div className="container item-detail">
      <div className="container">
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.title} />
        <hr></hr>
        <h5>{item.description}</h5>
        <p>Precio: ${item.price}</p>
        {!finished ? (
          <>
            <Counter
              initial={1}
              count={count}
              setCount={setCount}
              stock={item.stock}
            />
            <button className="boton-comprar" onClick={() => {
                 handleState();
                //  handleSend();
               }}>
              COMPRAR
            </button>
          </>
        ) : (
          <>
            <Link to="/cart" onClick={handleState}>
              <button className='terminado' onClick={handleState}>TERMINAR MI COMPRA</button>
            </Link>
            <button className='modificado'
              onClick={() => {
                handleState();
                // handleRemove();
              }}
            >
              Modificar
            </button>
          </>
        )}
      </div>
    </div>
  );
};