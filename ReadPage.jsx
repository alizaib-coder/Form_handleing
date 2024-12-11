import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ReadPage() {
  const [apiData, setApiData] = useState([]);
  function getData() {
    axios
      .get("https://674ffe8169dc1669ec1935cb.mockapi.io/crud-app-adil")
      .then((response) => {
        setApiData(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://674ffe8169dc1669ec1935cb.mockapi.io/crud-app-adil/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        alert(error);
      });
  };

  function setDataToStorage(id,name,age,email){
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('email',email);
  }

  const handleDeleteWithConfirmation = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      handleDelete(id);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create a New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((items) => {
                return (
                  <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.e_name}</td>
                    <td>{items.e_age}</td>
                    <td>{items.e_email}</td>
                    <td>
                      <Link to='/edit'>
                      <button className="btn btn-primary" onClick={()=>setDataToStorage(items.id,items.e_name,items.e_age,items.e_email)}>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteWithConfirmation(items.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ReadPage;
