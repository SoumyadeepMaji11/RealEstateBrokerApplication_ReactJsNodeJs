import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import BrokerHeader from "../Broker/BrokerHeader";
//import { Link } from "react-router-dom";

const Customer = () => {
  const [data, setData] = useState([]);
  //const [value, setValue] = useState("");
  //const[val,setVal] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:3300/allcustomer")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  console.log("data", data);

  return (
      <>
      <BrokerHeader />
    <MDBContainer>
      <body>
        <div style={{ marginTop: "60px"}}>
          <h2 className="text-center" >Registered Customers</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Serial No.</th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer Age</th>
                    <th scope="col">Customer Gender</th>
                    <th scope="col">Customer Name</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody>
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Customer Available 
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.cust_id}</td>
                        <td>{item.cust_age}</td>
                        <td>{item.cust_gender}</td>
                        <td>{item.cust_name}</td>
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

export default Customer;
