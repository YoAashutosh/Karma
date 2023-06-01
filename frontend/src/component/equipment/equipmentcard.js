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
            <span
              className="p_Stock ms-3"
              style={{ paddingLeft: "100px" }}
            >{`Stock: ${product.Stock}`}</span>
            <div className="d-flex ">
              <span
                className="p_Category mt-3 ms-3"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                {product.category}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EquipmentCard;
