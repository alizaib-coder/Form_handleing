import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !email) {
      return setMessage("Please fill all fields before submitting.");
    }
    setLoading(true);
    axios
      .post("https://674ffe8169dc1669ec1935cb.mockapi.io/crud-app-adil", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then((response) => {
        setName("");
        setAge("");
        setEmail("");
        setMessage("Data sent successfully!");
        navigate("/");
      })
      .catch((error) => {
        setMessage("Error sending data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="row">
      <div className="mb-2 mt-2">
            <Link to='/'>
            <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
        <div className="col-md-4">
          <div className="bg-primary p-4 text-center">
            <h1>Create data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Enter Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter Age:</label>
              <input
                type="number"
                placeholder="age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter Email:</label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {message && <h1>{message}</h1>}
        </div>
      </div>
    </>
  );
}

export default Create;
