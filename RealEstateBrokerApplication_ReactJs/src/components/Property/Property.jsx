import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import BrokerHeader from "../Broker/BrokerHeader";

const Property = () => {
  let nav = useNavigate();
  const [data, setData] = useState([]);
  //const [value, setValue] = useState("");
  //const[val,setVal] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:3300/allproperty")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  console.log("data", data);

  const del = async (id) => {
    return await axios
      .delete(`http://localhost:3300/deleteproperty/${id}`)
      .then((response) => {
        //setData(response.data);
        alert("Property Deleted");
        window.location.reload(false);
        nav("/property");
      })
      .catch((err) => console.log(err));
  };

  // const edit = async (id) => {
  //   return await axios
  //     .delete(`http://localhost:3300/deleteproperty/${id}`)
  //     .then((response) => {
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <BrokerHeader />
      <MDBContainer>
        <body>
          <div style={{ marginTop: "60px" }}>
            <h2 className="text-center">All Properties Available</h2>
            <MDBRow>
              <MDBCol size="12">
                <MDBTable>
                  <MDBTableHead dark>
                    <tr>
                      <th scope="col">Serial No.</th>
                      <th scope="col">Property ID</th>
                      <th scope="col">Property Type</th>
                      <th scope="col">Price</th>
                      <th scope="col">Offer</th>
                      <th scope="col">City</th>
                      <th scope="col">Edit Property</th>
                      <th scope="col">Delete Property</th>
                    </tr>
                  </MDBTableHead>
                  {data.length === 0 ? (
                    <MDBTableBody>
                      <tr>
                        <td colSpan={8} className="text-center mb-0">
                          No Available Property
                        </td>
                      </tr>
                    </MDBTableBody>
                  ) : (
                    data.map((item, index) => (
                      <MDBTableBody key={index}>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{item.prop_id}</td>
                          <td>{item.prop_type}</td>
                          <td>{item.price}</td>
                          <td>{item.offer_type}</td>
                          <td>{item.city}</td>
                          <td>
                            <Link style={{ color: "white" }} to={`/editproperty/${item.id}`}>
                              <button
                                //onClick={() => edit(item.id)}
                                type="button"
                                className="btn btn-primary btn-rounded"
                                data-mdb-ripple-color="dark"
                              >
                                Edit
                              </button>
                            </Link>
                          </td>
                          <td>
                            <Link style={{ color: "white" }} to="/property">
                              <button
                                onClick={() => del(item.id)}
                                type="button"
                                className="btn btn-danger btn-rounded"
                                data-mdb-ripple-color="dark"
                              >
                                Delete
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </MDBTableBody>
                    ))
                  )}
                </MDBTable>
              </MDBCol>
            </MDBRow>
          </div>
        </body>
      </MDBContainer>
    </>
  );
};

export default Property;
