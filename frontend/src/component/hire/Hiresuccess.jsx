import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./hireSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon className="successIcon" />
      <Typography variant="h5" className="successText">
        Your hire has been successful!
      </Typography>
      <Link to="/allhire" style={{ background: "none" }}>
        <button className="hireMoreBtn">Hire More</button>
      </Link>
    </div>
  );
};

export default Success;
