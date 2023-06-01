import React from "react";
import "../equipment/equipmentcard.css";
import { Link } from "react-router-dom";
const TenderCard = ({ tender }) => {
  return (
    <>
      <Link className="tenderCard ms-5 me-5" to={`/tender/${tender._id}`}>
        <img
          src={tender.images[0].url}
          alt={tender.name}
          className="tenderImg"
          style={{
            borderRadius: "5px 5px 0 0",
            width: "450px",
            height: "300px",
          }}
        />

        <p
          className="tenderName luxury1 mt-2 ms-3"
          style={{ fontWeight: "500", fontSize: "20px" }}
        >
          {tender.name}
        </p>

        <div>
          <div className="locationBox">
            <h1
              className="discountPrice discount mb-3"
              style={{
                paddingLeft: "17vmax",
                fontSize: ".9vmax",
                paddingBottom: "0",
              }}
            >
              {tender.location > 0 ? `$${tender.location}` : ""}
            </h1>
            <span
              className="p__Price ms-3"
              style={{ fontSize: "16px" }}
            >{`${tender.description}`}</span>
          </div>
          <div className="location mt-2 mb-5">
            <span
              className="p_Location ms-5 me-5"
              style={{
                fontSize: "20px",
                paddingLeft: "250px",
                fontWeight: "400",
              }}
            >{`${tender.location}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TenderCard;
