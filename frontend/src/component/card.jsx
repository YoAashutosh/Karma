import React from "react";
import "./news.css";

const card = () => {
  return (
    <>
      <card>
        <div className="col-4 my-5 ms-5">
          <div className="row">
            <div className="col-8">
              <div class="card ms-2" style={{ width: "30rem", height: "100%" }}>
                <div className="waterImage"></div>
                <div class="card-body">
                  <h5 class="card-title">Water Supply Project</h5>
                  <p class="card-text">
                    Construction Works of Pipalchahaari Water Supply Project
                  </p>
                  <p class="city">Ghorahi Sub-Metropolitan City, 06 Dang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </>
  );
};

export default card;
