// shortcut -> rafcp -> Snippets for propTypes
import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, price, image }) => {
  // console.log(name, price, image);
  const url = image && image.url;
  return (
    <article className="product">
      {/* <h4>single product</h4> */}
      <img src={url || defaultImage} alt={name} />
      {/* <img src={image.url} alt={name} /> */}
      <h4>{name}</h4>
      {/* <p>${price}</p> */}
      <p>${price || 5.98}</p>
    </article>
  );
};

Product.propTypes = {
  // shortcut for setting up prop
  // property: ptar -> PropTypes.array.isRequired
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 5.98,
//   image: defaultImage,
// };

export default Product;
