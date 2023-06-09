import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const TableList = ({ formList, setFormList }) => {
  const DeleteUser = (id) => {
    setFormList(formList.filter((num) => num.id !== id));
  };

  const editForm = (id) => {

    navigate(`/edit/${id}`);
  };

  const navigate = useNavigate();
  return (
    <>
      <tbody>
        {formList.map((user,index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.content}</td>
            <td>
              <div className="button">
                <IconButton
                  aria-label="Edit"
                  color="primary"
                  onClick={() => editForm(user.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => DeleteUser(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableList;