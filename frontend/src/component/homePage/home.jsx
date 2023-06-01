import React from "react";
import "./home.css";
import build from "../images/build-1.jpg";
import build2 from "../images/build-2.jpg";
import prop1 from "../images/prop.jpg";
import dozer from "../images/dozer.jpg";
import house1 from "../images/house1.jpg";
import house2 from "../images/house-2.jpg";
import avatar1 from "../images/review.jpg";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import partner1 from "../images/partner.jpg";
import building from "../images/building1.jpg";
import building1 from "../images/building2.jpg";
import hireUs from "../images/hire.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const isAdmin = isAuthenticated && user.role === "admin";

  return (
    <>
      <div>
        {/* ######## Start Home Section ######## */}
        <home>
          {/* ######## Start Notice banner ######## */}
          <div className="container-fluid p-0">
            <div className="slick row">
              <div className="col-12">
                <div className="row mt-5">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xxl-5 col-xl-6 d-flex justify-content-center">
                        <h1 className="build_Y">Build Your</h1>
                      </div>
                      <div className="col-xxl-3 col-xl-4 me-5 d-flex justify-content-center ">
                        <img className="build_first" src={build} alt="build" />
                      </div>
                      <div className="col-xxl-3 d-flex justify-content-center">
                        <h1 className="build_X">Dream</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 mb-5">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xxl-3 col-xl-12 d-flex justify-content-center ms-4">
                        <img
                          className="build_second d-flex justify-content-center ms-5"
                          src={build2}
                          alt="build2"
                        />
                      </div>
                      <div className="col-xxl-8 col-xl-12 d-flex justify-content-center align-items-center">
                        <h1 className="property">Property With Karma</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="fill col-12 d-flex justify-content-center">
                    <span>
                      WE FILL YOUR SPACE IN DREAM WITH PASSION AND THOUGHTS, WE
                      HELP BRING YOUR VISION TO REALITY AND
                    </span>
                  </div>
                  <div className="fill col-12 mt-1 d-flex justify-content-center">
                    <span>
                      OVERCOME ANY ENGINEERING AND TECHNICAL CHALLENGE, WITHOUT
                      DOUBT
                    </span>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-6">
                    <div className="box">
                      <img
                        className="prop_first d-flex justify-content-center pt-3"
                        src={prop1}
                        alt="build2"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-2 col-sm-2 me-5">
                    {/* {isAuthenticated ? (
                      user.role === isAdmin
                    ) : (
                      <Link to="/allhire">
                        <button class="Hire1">Hire Us</button>
                      </Link>
                    )} */}
                    {isAdmin ? null : (
                      <Link to="/allhire">
                        <button class="Hire1">Hire Us</button>
                      </Link>
                    )}
                  </div>

                  <div className="col-xxl-6  mb-5">
                    <div className="box-1 d-flex align-items-center">
                      <img className="stair pb-2" src={build2} alt="build2" />
                      <Link to="/equipment">
                        <img
                          className="dozer ps-2 pb-2"
                          src={dozer}
                          alt="dozer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ######## End Notice banner ######## */}
        </home>

        {/* ######## End Home Section ######## */}
        {/* ######## Start Project Section ######## */}
        <project>
          <div className="projects row">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3 my-5 d-flex justify-content-end text-white">
                  <h1>OUR PROJECTS</h1>
                </div>
                <div className="col-6"></div>
                <div className="col-2"></div>
                <div className="col-1 my-5 d-flex justify-content-start">
                  <a className="view" href="/project">
                    View all
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div class="col-xl-5 col-6 col-md-4 col-lg-4 mb-5 me-5">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="house d-flex justify-content-between"
                        src={house1}
                        alt="house1"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mt-4 col-6">
                      <span className=" text-white">
                        <strong className="luxury">LUXURIOUS APARTMENT</strong>
                      </span>
                    </div>
                    <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                      <strong className="text-white">CHABAHILL</strong>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-xl-11">
                      <span className="text-white">
                        <span style={{ lineHeight: "30px" }}>
                          It includes amenities such as a fitness center,
                          swimming pool, or laundry facilities, and can be
                          located in urban or suburban areas. Apartment living
                          is popular for its convenience, affordability, and
                          flexibility, making it a popular housing option for
                          many people.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="ms-5 col-xl-5 col-6 col-md-4 col-lg-4 mb-5">
                  <div className="row">
                    <div className="col-12">
                      <img
                        className="house2 d-flex justify-content-between"
                        src={house2}
                        alt="house2"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mt-4 col-6">
                      <span className=" text-white">
                        <strong className="luxury">MODERN TECH HOUSE</strong>
                      </span>
                    </div>
                    <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                      <strong className="text-white">BARDGHAT</strong>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-xl-11">
                      <span className="text-white">
                        <span style={{ lineHeight: "30px" }}>
                          It includes amenities such as a fitness center,
                          swimming pool, or laundry facilities, and can be
                          located in urban or suburban areas. Apartment living
                          is popular for its convenience, affordability, and
                          flexibility, making it a popular housing option for
                          many people.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </project>
        {/* ######## End Project Section ######## */}
        {/* ######## Start Partner Section ######## */}
        <partner>
          <div className="container-fluid p-0">
            <div className="background row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center ">
                    <h1 className=" create mt-5 d-flex text-white">
                      Creating World-Class Buildings
                    </h1>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-11 ps-5 d-flex justify-content-start">
                    <h1 className=" attract d-flex text-white">
                      That are Attractive, Beautiful
                    </h1>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-11 ps-5 d-flex justify-content-start">
                    <h1 className=" attract d-flex text-white">And Durable.</h1>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="d-flex hand col-12">
                    <div className="row align-items-end">
                      <h1 className=" zero ms-1 text-white ">01</h1>
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-12">
                    <h2 className="mt-2 best text-white">The Best Price</h2>
                  </div>
                  <div className="col-10 d-flex justify-content-center">
                    <span className="mt-2 text text-white">
                      A Project Is An Activity To Meet The Creation Of A Unique
                      Product Of Service And Trust Activities...
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <h2 className="best text-white">Daily Consultant</h2>
                  </div>
                  <div className="col-10">
                    <span className="my-2 text text-white d-flex justify-content-center">
                      One Of The Most Common Competency Based On Questions For
                      Any Securing Some Project That Make Client For Easy
                      Consulting About The Property...
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className=" hand-1 col-12 d-flex justify-content-end">
                    <div className="row align-items-end">
                      <h1 className=" zero text-white ">02</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row ">
                  <div className=" ms-5 d-flex hand-2 col-12">
                    <div className="row align-items-end">
                      <h1 className="zero text-white ">03</h1>
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-12">
                    <h2 className="mt-2 ps-5 best text-white">
                      Premium Quality
                    </h2>
                  </div>
                  <div className="col-10">
                    <span className="mt-2 ps-5 d-flex justify-content-center text text-white">
                      We Always Use Premium Quality Materials So That Our
                      Clients Are And The Products We Make Last...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </partner>
        {/* ######## End Project Section ######## */}
        {/* ######## Start Service Section ######## */}
        <service>
          <div className="container-fluid p-0">
            <div className="service row">
              <div className="col-12">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-11">
                    <div className="row text-white mt-5">
                      <div className="col-11 d-flex justify-content-end">
                        <Link to="/allhire" style={{ textDecoration: "none" }}>
                          <strong className="text-white">
                            Scroll for more
                          </strong>
                        </Link>
                      </div>
                      <div className="col-12">
                        <h1 className="our">OUR</h1>
                      </div>
                      <div className="col-12">
                        <h1 className="our">SERVICE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="serviceContainer row mt-5 justify-content-center">
                  <div className="design ps-5 mb-5 col-10 d-flex  justify-content-start align-items-center">
                    <h1 className="build text-white">BUILDING DESIGN</h1>
                  </div>
                  <div className="contractor ps-5 mb-5 col-10 d-flex  justify-content-start align-items-center">
                    <h1 className="cont text-white">CONTRACTOR</h1>
                  </div>
                  <div className="contractor ps-5 mb-5 col-10 d-flex  justify-content-start align-items-center">
                    <h1 className="cont text-white">HARDWARE</h1>
                  </div>
                  <div className="contractor ps-5 mb-5 col-10 d-flex  justify-content-start align-items-center">
                    <h1 className="cont text-white">PLUMBER</h1>
                  </div>
                  <div className="contractor ps-5 mb-5 col-10 d-flex  justify-content-start align-items-center">
                    <h1 className="cont text-white">ELECTRICIAN</h1>
                  </div>
                  <div className="contractor ps-5 mb-5 col-10 d-flex  justify-content-start align-items-center">
                    <h1 className="cont text-white">ARCHITECT/ENGINEER</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </service>
        {/* ######## End Service Section ######## */}
        {/* ######## Start Choose Section ######## */}
        <choose>
          <div className="container-fluid p-0">
            <div className="choose row">
              <div className="col-12">
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-11">
                    <h1 className="why">WHY CHOOSE US?</h1>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10 my-4 we">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <span className=" webuild mt-5 ms-3 text-white">
                            We<strong className="passion"> Build</strong> With
                            <strong className="passion"> Passion</strong>
                          </span>
                        </div>
                        <div className="row mt-5">
                          <div className="ps-5 col-3 d-flex align-items-center">
                            <div className="row mt-4 ">
                              <div className="col-12 text-white">
                                <span>
                                  <i class="drip fa-solid fa-fill-drip"></i>
                                </span>
                                <h5 className="mt-3">The best Color</h5>
                                <span>We choose the right color</span>
                                <span>for your project</span>
                              </div>
                            </div>
                          </div>

                          <div className="ps-5 col-3 d-flex align-items-center">
                            <div className="row mt-4 ">
                              <div className="col-12 text-white">
                                <span>
                                  <i class="drip1 bi bi-stickies-fill"></i>
                                </span>
                                <h5 className="mt-2">The best Note taker</h5>
                                <span>We choose the right color</span>
                                <span>for your project</span>
                              </div>
                            </div>
                          </div>
                          <div className="ps-5 col-3 d-flex align-items-center">
                            <div className="row mt-4 ">
                              <div className="col-12 text-white">
                                <span>
                                  <i class="drip fa-solid fa-link"></i>
                                </span>
                                <h5 className="mt-3">The best Link</h5>
                                <span>We choose the right color</span>
                                <span>for your project</span>
                              </div>
                            </div>
                          </div>
                          <div className="ps-5 col-3 d-flex align-items-center">
                            <div className="row mt-4 ">
                              <div className="col-12 text-white">
                                <span>
                                  <i class="drip1 bi bi-shield-lock-fill"></i>
                                </span>
                                <h5 className="mt-2">The safest Project</h5>
                                <span>We choose the right color</span>
                                <span>for your project</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="row align-items-center ps-5 mt-3 mb-5 review">
                      <div className="col-3">
                        <div className="row">
                          <div className="col-4 d-flex align-items-center">
                            <img
                              className="avatar ms-3"
                              src={avatar1}
                              alt="avatar1"
                            />
                          </div>
                          <div className="col-8 d-flex align-items-center">
                            <div className="row">
                              <div className="col-12">
                                <span className="angelina">Angelina Jolie</span>
                              </div>
                              <div className="col-12">
                                <span className="founder">Founder Karma</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="line col-1 bg-dark"></div>

                      <div className="col-8 mt-3">
                        <div className="row">
                          <div className="col-8"></div>
                        </div>
                        <span className="company">
                          “We’re a company tailored to all clients’ needs that
                          always delivers best quality of real estate”
                        </span>
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="row align-items-center ps-5 mt-3 mb-5 subscribe">
                      <div className="col-6">
                        <h1 className="subs mt-3">
                          Subscribe To Our Newsstack
                        </h1>
                        <span className="impress">
                          Impressive and exact information related to new
                          tenders
                        </span>
                      </div>
                      <div className="col-6">
                        <div className="row justify-content-center">
                          <div className="col-10 email">
                            <form
                              className="formS"
                              action="https://formsubmit.co/9a915925aabce4d8eedce2bb0a90bf58"
                              method="POST"
                            >
                              <div className="row">
                                <div className="col-8">
                                  <input
                                    className="inputEmail"
                                    name="email"
                                    type={"email"}
                                    placeholder="  Enter your Email..."
                                    required
                                  ></input>
                                </div>
                                <div className="col-4">
                                  <button className="btnSub col-4">
                                    Subscribe
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </choose>
        {/* ######## End Choose Section ######## */}
        {/* ######## Start Start Section ######## */}
        <start>
          <div className="foot p-0 container-fluid">
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
        {/* ######## End Start Section ######## */}
      </div>
    </>
  );
};
export default Home;
