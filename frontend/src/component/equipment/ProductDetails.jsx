import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/ProductActions";

import MetaData from "../../more/Metadata";
import "./Productdetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemsToCart } from "../../actions/CartAction";
import Loading from "../../more/Loader";

const ProductDetails = ({ match, history }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error]);

  // Increase quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return toast.error("Product stock limited");
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.Stock > 0) {
      dispatch(addItemsToCart(match.params.id, quantity));
      toast.success("Product Added to cart");
    } else {
      toast.error("Product stock limited");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={`${product.name}`} />

          <div className="ProductDetails">
            <div className="first__varse">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div className="varse__2">
              <div className="detailsBlock-1">
                <h2 className="productName luxury1 ms-3">{product.name}</h2>
              </div>

              <div className="detailsBlock">
                <div>
                  <h1>{`$${product.price}`}</h1>
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
                </div>
                <div className="detailsBlock-3-1 row">
                  <div className="col-8 d-flex">
                    <div className="col-2">
                      <span className="discountPrice discount">Quantity</span>
                    </div>
                    <div className="col-9">
                      <div className="d-flex col-4">
                        <button
                          onClick={decreaseQuantity}
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            height: "40px",
                          }}
                        >
                          -
                        </button>
                        <input
                          className="bg-light"
                          type="number"
                          readOnly
                          value={quantity}
                          style={{
                            width: "60px",
                            color: "black",
                            height: "40px",
                          }}
                        />
                        <button
                          onClick={increaseQuantity}
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            height: "40px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="stock__meta">
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
                <div
                  className="Description"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="d-flex">
                    Description: <p className="ms-2">{product.description}</p>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="pointer flex bg-primary"
                    style={{
                      padding: "10px 5px",
                      alignItems: "center",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    onClick={addToCartHandler}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                    <button
                      className="cartBtn"
                      style={{
                        opacity: 0.7,
                        padding: "0px 5px",
                        border: "none",
                        cursor: "pointer",
                        background: "none",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </>
  );
};

export default ProductDetails;
