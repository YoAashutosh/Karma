import React from "react";
import "../equipment/equipmentcard.css";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <>
      <Link
        className="productCard1 mb-5 ms-5 me-5 col-12"
        to={`/project/${project._id}`}
      >
        <img
          src={project.images[0].url}
          alt={project.name}
          className="productImg"
          style={{ borderRadius: "20px 20px 0 0", width: "400px" }}
        />

        <p className="productName ms-3" style={{ fontSize: "22px" }}>
          {project.name}
        </p>

        <div>
          <div className="offerPriceBox mx-3">
            <span
              className="discountPrice discount ms-3"
              style={{
                paddingLeft: "17vmax",
                fontSize: ".7vmax",
                paddingBottom: "0",
              }}
            >
              {project.description}
            </span>
          </div>
          <div className="offerPriceBox mt-4 mb-4">
            <span className="p_Price text-end ms-5 me-2">
              {project.location}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
