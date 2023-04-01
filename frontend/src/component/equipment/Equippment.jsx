import React from "react";
import "../project.css";
import "./equipmentcard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EquipmentCard from "./equipmentcard.js";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import { getProduct } from "../../actions/ProductActions";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const categories = ["All", "New", "Old"];

const Equipment = ({ match }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const handleViewAllProjects = () => {
    history.push("/project");
  };

  useEffect(() => {
    if (category === "All") {
      dispatch(getProduct(keyword, currentPage));
    } else {
      dispatch(getProduct(keyword, currentPage, category));
    }
  }, [dispatch, keyword, currentPage, category, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            {products.length === 0 ? (
              ""
            ) : (
              <h2
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgba(21,21,21,0.5)",
                  width: "20vmax",
                  fontSize: "1.4vmax",
                  fontFamily: "Poppins,sans-serif",
                  margin: "3vmax auto",
                  color: "rgb(0, 0, 0, 0.7)",
                }}
              >
                Featured Products
              </h2>
            )}
            <div
              className="sidebar__product"
              style={{
                display: "flex",
                flex: 1,
              }}
            >
              <div
                className="sidebar__products"
                style={{
                  border: "1px solid #999",
                  margin: "1vmax",
                  flex: ".177",
                }}
              >
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  CHOOSE CATEGORIES
                </Typography>
                <ul
                  className="categoryBox"
                  style={{
                    boxSizing: "inherit",
                  }}
                >
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                      type="checkbox"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {products.length === 0 ? (
                <span
                  style={{
                    display: "block",
                    padding: "30px 0",
                    fontSize: "1.5rem",
                    flex: ".9",
                    textAlign: "center",
                  }}
                >
                  No Product Found ....
                </span>
              ) : (
                <div
                  className="products"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flex: ".9",
                  }}
                >
                  {products &&
                    products.map((product) => (
                      <EquipmentCard key={product.id} product={product} />
                    ))}
                </div>
              )}
            </div>

            <div
              className="pagination__box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "6vmax",
              }}
            >
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
          <div>
            <home>
              <div className="container-fluid">
                <div className="project row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-4 mt-5 mb-3 d-flex justify-content-end">
                        <h3>OUR UPCOMING PROJECTS</h3>
                      </div>
                      <div className="col-7 my-5 d-flex justify-content-end">
                        <button
                          className="view1"
                          onClick={handleViewAllProjects}
                        >
                          View All Projects
                        </button>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-5 ms-5">
                            <span className="d-flex mb-5 justify-content-center">
                              We bet you you will wish to have a house like’em
                              all.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-3">
                        <div className="row ms-5 mb-5">
                          <div className="ms-3 house3 col-12  d-flex justify-content-end text-white">
                            <Link className="ms-2 text-white" to="">
                              <i class="mt-2 info fa-solid fa-circle-info"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="row ms-5">
                          <div className="ms-3 house4 col-12 d-flex justify-content-end text-white">
                            <Link className="ms-2 text-white" to="">
                              <i class="mt-2 info fa-solid fa-circle-info"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="row ms-5">
                          <div className="ms-3 house5 col-12 d-flex justify-content-end text-white">
                            <Link className="ms-2 text-white" to="">
                              <i class="mt-2 info fa-solid fa-circle-info"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-3">
                        <div className="row ms-5 mb-5">
                          <div className="ms-3 house6 col-12  d-flex justify-content-end text-white">
                            <Link className="ms-2 text-white" to="">
                              <i class="mt-2 info fa-solid fa-circle-info"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="row ms-5">
                          <div className="ms-3 house7 col-12 d-flex justify-content-end text-white">
                            <Link className="ms-2 text-white" to="">
                              <i class="mt-2 info fa-solid fa-circle-info"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="row ms-5">
                          <div className="ms-3 house8 col-12 d-flex justify-content-end text-white">
                            <Link className="ms-2 text-white" to="">
                              <i class="mt-2 info fa-solid fa-circle-info"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row mt-5">
                      <div className="col-12 mb-5 d-flex justify-content-center">
                        <h3>ONGOING PROJECTS</h3>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-1"></div>
                          <div className="col-6 justify-content-center">
                            <div className="upper ms-5"></div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <h3>Glance of Our Ongoing</h3>
                                <h3>Project.</h3>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-7 mt-5">
                                <span>
                                  We are using high grade Materials,
                                  waterproofing chemicals, and wiring to make
                                  your dream home last long for years.
                                </span>
                              </div>
                            </div>
                            <div className="row mt-5 mb-5">
                              <div className="col-4">
                                <span className="budget">Budget</span>
                                <h6 className="conf mt-3">Confidential</h6>
                              </div>
                              <div className="col-4">
                                <span className="budget">Size</span>
                                <h6 className="conf mt-3">1780 Sq. Ft.</h6>
                              </div>
                              <div className="col-4">
                                <span className="budget">Type</span>
                                <h6 className="conf mt-3">House</h6>
                              </div>
                              <div className="col-4 mt-5">
                                <span className="budget">Status</span>
                                <h6 className="conf mt-3">Done</h6>
                              </div>
                              <div className="col-4 mt-5">
                                <span className="budget">Location</span>
                                <h6 className="conf mt-3">Bhavnagar</h6>
                              </div>
                              <div className="col-4 mt-5">
                                <span className="budget">Flat</span>
                                <h6 className="conf mt-3">3BHK</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </home>
            <start>
              <div className="foot container-fluid">
                <div className="start row ">
                  <div className="col-10 d-flex justify-content-center ms-5 text-white">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-12 ms-5 text-center">
                        <h1 className="ms-5 now">START YOUR</h1>
                        <h1 className="ms-5 now">PROJECT</h1>
                        <h1 className="ms-5 now">NOW</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </start>
          </div>
        </>
      )}
    </>
  );
};

export default Equipment;
