import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

//import { Link } from "react-router-dom";

import BrokerHeader from "../Broker/BrokerHeader";

const Deal = () => {
  let nav = useNavigate();
  const [data, setData] = useState([]);
  //const[id,setId] = useState(0);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:3300/alldeal")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

 
  const del = async (id) => {
    //e.preventDefault();
    //console.log(id);
    // console.log(id);
    return await axios
      .delete(`http://localhost:3300/deletedeal/${id}`)
      .then((response) => {
        setData(response.data);
        alert("Deal Deleted");
        window.location.reload(false);
        nav("/deal");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <BrokerHeader />
      <MDBContainer>
        <body>
          <div style={{ marginTop: "60px" }}>
            <h2 className="text-center">All Deals Pending</h2>
            <MDBRow>
              <MDBCol size="12">
                <MDBTable>
                  <MDBTableHead dark>
                    <tr>
                      <th scope="col">Serial No.</th>
                      <th scope="col">Customer ID</th>
                      <th scope="col">Property ID</th>
                      <th scope="col">Property Type</th>
                      <th scope="col">Price</th>
                      <th scope="col">City</th>
                      <th scope="col">Delete Deals</th>
                    </tr>
                  </MDBTableHead>
                  {data.length === 0 ? (
                    <MDBTableBody>
                      <tr>
                        <td colSpan={8} className="text-center mb-0">
                          No Deal Available
                        </td>
                      </tr>
                    </MDBTableBody>
                  ) : (
                    data.map((item, index) => (
                      <MDBTableBody key={index}>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{item.cust_id}</td>
                          <td>{item.prop_id}</td>
                          <td>{item.prop_type}</td>
                          <td>{item.price}</td>
                          <td>{item.city}</td>
                          <td>
                            <button
                              onClick={() => del(item.id)}
                              type="button"
                              className="btn btn-danger btn-rounded"
                              data-mdb-ripple-color="dark"
                            >
                              Delete
                            </button>
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

export default Deal;
