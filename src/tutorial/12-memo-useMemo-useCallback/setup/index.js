import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const maxPrice = (data) => {
  console.log("called");
  return (
    data.reduce((total, item) => {
      if (item.fields.price > total) {
        total = item.fields.price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const changeCart = useCallback(() => {
    console.log(cart);
    setCart(cart + 1);
  }, [cart]);

  const highPrice = useMemo(() => maxPrice(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2 style={{ marginTop: "3rem" }}>Cart: {cart}</h2>
      <h2 style={{ marginTop: "3rem" }}>Max Price: {highPrice}</h2>
      <BigList changeCart={changeCart} products={products} />
    </>
  );
};

const BigList = React.memo(({ products, changeCart }) => {
  useEffect(() => {
    console.log("Big list Called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            changeCart={changeCart}
            key={product.id}
            {...product}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, changeCart }) => {
  useEffect(() => {
    console.count("Single product Called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={changeCart}>Add to cart</button>
    </article>
  );
};
export default Index;
