import React from "react";
import "./equipmentcard.css";
import { Link } from "react-router-dom";
const EquipmentCard = ({ product }) => {
  return (
    <>
      <Link className="productCard ms-5 me-5" to={`/product/${product._id}`}>
        <img
          src={product.images[0].url}
          alt={product.name}
          className="productImg"
        />

        <p className="productName luxury1 ms-3">{product.name}</p>

        <div>
          <div className="offerPriceBox">
            <h1
              className="discountPrice discount"
              style={{
                paddingLeft: "17vmax",
                fontSize: ".9vmax",
                paddingBottom: "0",
              }}
            >
              {product.offerPrice > 0 ? `$${product.offerPrice}` : ""}
            </h1>
            <span className="p__Price ms-3">{`$${product.price}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EquipmentCard;
