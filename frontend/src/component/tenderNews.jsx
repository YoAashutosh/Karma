/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import TenderCard from "./tenderCard/TenderCard";
import { useSelector, useDispatch } from "react-redux";
import { getTender } from "../actions/TenderActions";
import "./news.css";

const tenderNews = ({ match }) => {
  const dispatch = useDispatch();
  const { tenders, error } = useSelector((state) => state.tenders);
  const keyword = match.params.keyword;
  useEffect(() => {
    dispatch(getTender(keyword));
  }, [dispatch, keyword, error]);
  return (
    <>
      <div>
        <news>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row my-5 justify-content-evenly">
                  <div className="col-6">
                    <div className="row">
                      <div className="newsImage mt-5 col-8"></div>
                      <div className="col-4 bg-primary mt-5 text-white">
                        <div className="row mt-5 d-flex justify-content-start">
                          <div className="col-12">
                            <h5 className="ms-3 mb-2">OTHERS</h5>
                          </div>
                        </div>
                        <div className="row ms-1">
                          <div className="col-12">
                            <span className="ms-1">
                              (UNDP), INDIA has floated a tender for
                              Undp/rfp/2023/03
                            </span>
                          </div>
                        </div>
                        <div className="row mt-3 ms-1 ">
                          <div className="col-12">
                            <span className="ms-1">
                              (UNICEF) has floated a tender for Workshop on
                              Covid-19
                            </span>
                          </div>
                          <div className="col-12 mt-3">
                            <span>
                              A tender for Construction of Reception Block,
                              Trade Shop
                            </span>
                          </div>
                          <div className="col-12 mt-3">
                            <span>
                              Construction of Budhiganga River Training Work for
                              the Protection of Sanfebagar Airport
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row justify-content-evenly">
                      <div className="newsImage1 mt-5 col-10 d-flex"></div>
                      <div className="col-10">
                        <h5 className="mt-4">
                          Procurement of Tractors and other Mechanical Equipment
                          for Madhyabindu Municipality
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row justify-content-evenly">
                      <div className="col-11 ms-5 mb-3">
                        <h4>TENDER NEWS</h4>
                      </div>
                      <div className="col-11">
                        <div className="row justify-content-evenly">
                          <div className="col-4">
                            <div className="row">
                              <div className="col-10">
                                <div
                                  class="card ms-2"
                                  style={{ width: "30rem", height: "100%" }}
                                >
                                  {" "}
                                  <div className="waterImage"></div>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      Water Supply Project
                                    </h5>
                                    <p class="card-text">
                                      Construction Works of Pipalchahaari Water
                                      Supply Project
                                    </p>
                                    <p class="city">
                                      Ghorahi Sub-Metropolitan City, 06 Dang
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <div className="col-10">
                                <div
                                  class="card ms-5"
                                  style={{ width: "30rem", height: "100%" }}
                                >
                                  {" "}
                                  <div className="forestImage"></div>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      Sub Division Forest Office
                                    </h5>
                                    <p class="card-text">
                                      Construction of Sub Division Forest Office
                                      Baireni at Imastar
                                    </p>
                                    <p class="city">
                                      Dhading Tender, Nepal - 80687635
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <div className="col-10 ms-5">
                                <div
                                  class="card ms-5"
                                  style={{ width: "30rem", height: "100%" }}
                                >
                                  {" "}
                                  <div className="medsImage"></div>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      Essential Medicine for Free
                                    </h5>
                                    <p class="card-text">
                                      Supply of Essential Medicine for Free
                                      Distribution Tender for many places
                                    </p>
                                    <p class="city">Nepal - 80687631</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 mt-5">
                            <div className="row">
                              <div className="col-10">
                                <div
                                  class="card ms-2"
                                  style={{ width: "30rem", height: "100%" }}
                                >
                                  <div className="waterImage"></div>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      Water Supply Project
                                    </h5>
                                    <p class="card-text">
                                      Construction Works of Jurpaniya Mainatara
                                      Water Supply Project
                                    </p>
                                    <p class="city">
                                      Maiatara, Nepal - 80687173
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 mt-5">
                            <div className="row">
                              <div className="col-10">
                                <div
                                  class="card ms-5"
                                  style={{ width: "30rem", height: "100%" }}
                                >
                                  {" "}
                                  <div className="covidImage"></div>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      Covid-19 Learning Recovery
                                    </h5>
                                    <p class="card-text">
                                      Workshop on Covid-19 Learning Recovery and
                                      Remediation Tender
                                    </p>
                                    <p class="city">Nepal - 80688079</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 mt-5">
                            <div className="row">
                              <div className="col-10 ms-5">
                                <div
                                  class="card ms-5 mb-5"
                                  style={{ width: "30rem", height: "100%" }}
                                >
                                  <div className="constructionImage"></div>
                                  <div class="card-body">
                                    <h5 class="card-title">
                                      Construction of Reception Block & Other
                                    </h5>
                                    <p class="card-text">
                                      Construction of Reception Block, Trade
                                      Shop, Garage, Canteen, Monument, Deep
                                      Boring, Earthfilling Works
                                    </p>
                                    <p class="city">Nepal - 80687940</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="products"
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            flex: ".9",
                          }}
                        >
                          {tenders &&
                            tenders.map((tender) => (
                              <TenderCard key={tender.id} tender={tender} />
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-evenly">
                      <div className="col-11 ms-5 mt-5 mb-3">
                        <h3>LATEST NEWS</h3>
                      </div>
                      <div className="col-11">
                        <div className="row mb-5">
                          <div className="lady ms-3 col-6 me-5"></div>
                          <div className="col-5 bg-dark">
                            <div className="row text-white mt-5 ms-5">
                              <h5 className="mb-5">LATEST TENDERS NEWS</h5>
                              <h6 className="mb-5">
                                Construction of Reception Block, Trade Shop,
                                Bike Garage, Canteen, Compound Wall with
                                Landscaping Works.
                              </h6>
                              <h6 className="mb-5">
                                Supply and Delivery of Pe-100 Grade Ns-40 Hdpe
                                Pipe of Different Water Supply Projects
                              </h6>
                              <h6 className="mb-5">
                                Procurement of Tractors and other Mechanical
                                Equipment for Madhyabindu Municipality
                              </h6>
                              <h6 className="mb-5">
                                Construction Works of Jurpaniya Mainatara Water
                                Supply Project
                              </h6>
                              <h6 className="mb-5">
                                Stringing of Ht Conductor and Ht Poles in
                                Bulbule, Pina Area of Mugu
                              </h6>
                              <h6 className="mb-5">
                                Supply and Delivery of Gi Pipes and Fittings
                              </h6>
                              <h6 className="mb-5">
                                Road Protection Work at
                                Dhulikhel-Nepalthok-Khurkot Section
                              </h6>
                              <h6 className="mb-5">
                                Construction Works of Bharatpur Water Supply
                                Project
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-evenly mt-5">
                      <div className="col-11 mb-5">
                        <table>
                          <thead>
                            <tr>
                              <th>S.No.</th>
                              <th>Notice Publisher</th>
                              <th>Description</th>
                              <th>Published Date</th>
                              <th>Last date of Submission</th>
                              <th>Notice Category</th>
                              <th>Industry</th>
                              <th>Product/Service</th>
                              <th>Newspaper</th>
                              <th>No of Days Left</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Infrastructure Development Office Dailekh</td>
                              <td>Letter of Intent</td>
                              <td>2023-03-28</td>
                              <td>2023-04-26</td>
                              <td>Letter of Intent</td>
                              <td>Government/ Ministries/ Departments</td>
                              <td>Construction/ Building</td>
                              <td>Madhyanha Dainik</td>
                              <td>29 days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </news>
      </div>
    </>
  );
};

export default tenderNews;
