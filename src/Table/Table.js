import React from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import TableList from "./TableList";

const Table = ({ formList, setFormList }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container container-1">
        <h1 className="main-heading text-center">CRUD App</h1>
        <div className="row row-main">
          <div className="col">
            <h4 className="text-center pb-3">Form Data</h4>
            <div className="row">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">About You</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <TableList formList={formList} setFormList={setFormList} />
              </table>
            </div>
            <div className="create-div">
              <button
                className="btn btn-primary create-btn"
                onClick={() => navigate(`/form`)}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;