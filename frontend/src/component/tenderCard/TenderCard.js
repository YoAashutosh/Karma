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
        />

        <p className="tenderName luxury1 ms-3">{tender.name}</p>

        <div>
          <div className="locationBox">
            <h1
              className="discountPrice discount"
              style={{
                paddingLeft: "17vmax",
                fontSize: ".9vmax",
                paddingBottom: "0",
              }}
            >
              {tender.location > 0 ? `$${tender.location}` : ""}
            </h1>
            <span className="p__Price ms-3">{`${tender.description}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TenderCard;
