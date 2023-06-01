import React from "react";
import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Sidebar from "./sidebar";
import "./sidebar.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../more/Metadata";
import Loading from "../../more/Loader";
import { getAdminProduct } from "../../actions/ProductActions.js";
import { getAllOrders } from "../../actions/OrderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import AllUsers from "./AllUsers";
import { getHire } from "../../actions/HiringAction";
import EditIcon from "@material-ui/icons/Edit";
const Admin = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.AllOrders);

  const { users } = useSelector((state) => state.allUsers);

  const { hires } = useSelector((state) => state.hires);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });
  const userCount = users.filter((user) => user.role === "user").length;
  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "TOTAL AMOUNT EARNED DAILY",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, 100000, 50000, 30000, 350000, 50000, 60000, totalAmount],
      },
    ],
  };

  const lineState1 = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "TOTAL AMOUNT EARNED WEEKLY",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, 7000, 30000, 25000, totalAmount],
      },
    ],
  };

  const lineState3 = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "TOTAL AMOUNT EARNED MONTHLY",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [
          0,
          30000,
          40000,
          30000,
          12000,
          35000,
          17000,
          18000,
          50000,
          20000,
          36000,
          23000,
          totalAmount,
        ],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.25,
    },
    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 100,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        name: item.name,
      });
    });

  useEffect(() => {
    dispatch(getHire());
  }, [dispatch]);

  const columns1 = [
    {
      field: "email",
      headerName: "Email",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "profession",
      headerName: "Profession",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "experience",
      headerName: "Experience",
      minWidth: 150,
      flex: 0.5,
    },
  ];

  const rows1 = [];

  hires &&
    hires.forEach((item) => {
      rows1.push({
        id: item._id,
        email: item.email,
        name: item.name,
        profession: item.profession,
        experience: item.experience,
      });
    });

  return (
    <>
      <div>
        <admin>
          <div className="container-fluid d-flex p-0">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="content col-10">
              <div className="row">
                <div className="col-8">
                  <div className="row justify-content-evenly">
                    <div className="col-5">
                      <div class="card mt-5">
                        <div class="card-body">
                          <div className="row">
                            <i class="user mt-3 mb-4 fa-solid fa-users"></i>
                          </div>
                          <h5 class="card-title mb-3">Users</h5>
                          <p class="card-text">
                            Attendance Percentage: {userCount}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div class="card mt-5">
                        <div class="card-body">
                          <div className="row">
                            <i class="user mt-3 mb-4 fa-solid fa-sack-dollar"></i>
                          </div>
                          <h5 class="card-title mb-3">Earnings</h5>
                          <p class="card-text">Through Bonus: {totalAmount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-evenly">
                    <div className="col-11">
                      <div class="card1 mt-5">
                        <div class="card-body">
                          <h5 class="card-title mt-4 mb-3">Visitor Insights</h5>
                          <div className="lineChart">
                            <Line data={lineState} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-evenly">
                    <div className="col-11">
                      <div class="mt-5">
                        <div class="card-body">
                          <Link
                            to="/allhire"
                            className="text-dark"
                            style={{ textDecoration: "none" }}
                          >
                            <h5 class="card-title mt-5 mb-3">
                              Recent Hiring Activity
                            </h5>
                          </Link>
                          <div className="col-11 mb-5">
                            <DataGrid
                              rows={rows1}
                              columns={columns1}
                              pageSize={10}
                              disableSelectionOnClick
                              className="productListTable"
                              autoHeight
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row justify-content-evenly">
                    <div className="col-12">
                      <Link
                        to="/allusers"
                        style={{ textDecoration: "none" }}
                        className="text-dark"
                      >
                        <div class="myCard card mt-5">
                          <div class="card-body">
                            <h5 class="card-title mb-3 ms-3">User Record</h5>
                            <div className="row justify-content-center">
                              <div className="col-11 mb-5">
                                <DataGrid
                                  rows={rows}
                                  columns={columns}
                                  pageSize={10}
                                  disableSelectionOnClick
                                  className="productListTable"
                                  autoHeight
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-12">
                      <div class="myCard card mt-5">
                        <div class="card-body">
                          <h5 class="card-title mb-3">Employee Progress</h5>
                          <div className="row justify-content-center">
                            <div className="col-11 mb-5">
                              <div className="row">
                                <div className="col-6">
                                  <span>Last Month</span>
                                  <p className="my-2">$4.087</p>
                                </div>
                                <div className="col-6">
                                  <span>Last Month</span>
                                  <p className="my-2">$4.087</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </admin>
      </div>
    </>
  );
};

export default Admin;
