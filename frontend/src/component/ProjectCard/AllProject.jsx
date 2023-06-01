import ProjectCard from "./ProjectCard";
import "./project.css";
import house1 from "../images/house1.jpg";
import React, { useEffect } from "react";
import house2 from "../images/house-2.jpg";
import house3 from "../images/house-3.jpg";
import bridge from "../images/bridge.jpg";
import road from "../images/road.jpg";
import apartment from "../images/apartment.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "../../actions/ProjectActions";
// import { Link } from "react-router-dom";

const AllProject = ({ match }) => {
  const dispatch = useDispatch();
  const { projects, error } = useSelector((state) => state.projects);

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProject(keyword));
  }, [dispatch, keyword, error]);

  return (
    <>
      <div>
        <home>
          <div className="container-fluid">
            <div className="project row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 d-flex mt-5 justify-content-center">
                    <h1>Our Projects</h1>
                  </div>
                  <div className="col-11 my-5 d-flex justify-content-end">
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
                        <span>
                          <strong className="luxury">
                            LUXURIOUS APARTMENT
                          </strong>
                        </span>
                      </div>
                      <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                        <strong>CHABAHILL</strong>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-xl-11 ms-1">
                        <span>
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
                        <span>
                          <strong className="luxury">MODERN TECH HOUSE</strong>
                        </span>
                      </div>
                      <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                        <strong>BARDGHAT</strong>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-xl-11 ms-1">
                        <span>
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
              <div className="col-12">
                <div className="row">
                  <div className="col-1"></div>
                  <div class="col-xl-5 col-6 col-md-4 col-lg-4 mb-5 me-5">
                    <div className="row">
                      <div className="col-12">
                        <img
                          className="house d-flex justify-content-between"
                          src={bridge}
                          alt="bridge"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mt-4 col-6">
                        <span>
                          <strong className="luxury">SIGNATURE BRIDGE</strong>
                        </span>
                      </div>
                      <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                        <strong>GAUSHALA</strong>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-xl-11 ms-1">
                        <span style={{ lineHeight: "30px" }}>
                          The superb bridge created by our company showcases
                          exceptional engineering and design expertise. It
                          stands as a remarkable symbol of innovation,
                          seamlessly blending functionality and aesthetics. With
                          its impeccable craftsmanship and robust construction,
                          the bridge not only enhances connectivity but also
                          adds a touch of architectural marvel to its
                          surroundings.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="ms-5 col-xl-5 col-6 col-md-4 col-lg-4 mb-5">
                    <div className="row">
                      <div className="col-12">
                        <img
                          className="house2 d-flex justify-content-between"
                          src={road}
                          alt="road"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mt-4 col-6">
                        <span>
                          <strong className="luxury">
                            DOUBLE PITCHED ROAD
                          </strong>
                        </span>
                      </div>
                      <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                        <strong>KOTESHWOR</strong>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-1"></div>
                      <div className="col-xl-11 ms-1">
                        <span>
                          <span style={{ lineHeight: "30px" }}>
                            The road created by our company is a testament to
                            our commitment to quality and efficiency. Built with
                            state-of-the-art materials and cutting-edge
                            technology, it ensures smooth and safe
                            transportation for motorists. Its superior
                            durability and meticulous construction make it a
                            reliable infrastructure that withstands heavy
                            traffic and adverse weather conditions.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-1"></div>
                  <div class="col-xl-5 col-6 col-md-4 col-lg-4 mb-5 me-5">
                    <div className="row">
                      <div className="col-12">
                        <img
                          className="house d-flex justify-content-between"
                          src={apartment}
                          alt="apartment"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mt-4 col-6">
                        <span>
                          <strong className="luxury">
                            LUXURIOUS APARTMENT
                          </strong>
                        </span>
                      </div>
                      <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                        <strong>BOUDDHA</strong>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-xl-11 ms-1">
                        <span>
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
                          src={house3}
                          alt="house3"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mt-4 col-6">
                        <span>
                          <strong className="luxury">SKY TOWER</strong>
                        </span>
                      </div>
                      <div className="col-5 mt-4 d-flex justify-content-end ms-3">
                        <strong>BUDHANILKANTHA</strong>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-xl-11 ms-1">
                        <span>
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
              <div className="col-12">
                <div className="row">
                  <div className="col-4 mt-5 mb-3 d-flex justify-content-end">
                    <h3>NEWLY ADDED PROJECTS</h3>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-5 ms-5">
                        <span className="d-flex mb-5 justify-content-center ms-5">
                          We bet you you will wish to have a project like’em
                          all.
                        </span>
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
                          {projects &&
                            projects.map((project) => (
                              <ProjectCard key={project.id} project={project} />
                            ))}
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
  );
};

export default AllProject;
