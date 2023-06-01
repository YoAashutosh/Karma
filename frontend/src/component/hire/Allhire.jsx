import { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";

import { getHire, clearErrors } from "../../actions/HiringAction";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Allhire = ({ history }) => {
  const dispatch = useDispatch();

  const { error, hires } = useSelector((state) => state.hires);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getHire());
  }, [dispatch, error, history]);

  const columns = [
    { field: "id", headerName: "Hire ID", minWidth: 180, flex: 0.8 },

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

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to="/success">
              <button
                className="d-flex align-items-center justify-content-center"
                style={{ borderRadius: "15px", width: "80px", height: "60px" }}
              >
                Hire
              </button>
            </Link>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  hires &&
    hires.forEach((item) => {
      rows.push({
        id: item._id,
        email: item.email,
        name: item.name,
        profession: item.profession,
        experience: item.experience,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <div className="productListContainer">
          <h3 className="my-5 text-center " id="productListHeading">
            Professionals We Have Now
          </h3>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable mx-5"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default Allhire;
