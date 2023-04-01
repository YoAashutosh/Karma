import React from "react";
import "../equipment/equipmentcard.css";
const ProjectCard = ({ project }) => {
  return (
    <>
      <div
        className="productCard ms-5 me-5 mb-5"
        to={`/project/${project._id}`}
      >
        <img
          src={project.images[0].url}
          alt={project.name}
          className="productImg"
        />

        <p className="productName luxury1 ms-3">{project.name}</p>

        <div>
          <div className="descriptionProject">{project.description}</div>
        </div>
        <div>
          <div className="location text-end me-2">{project.location}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
