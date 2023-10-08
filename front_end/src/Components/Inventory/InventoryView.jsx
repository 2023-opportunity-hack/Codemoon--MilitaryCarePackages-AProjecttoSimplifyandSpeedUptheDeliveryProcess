import axios from 'axios';
import React from 'react'
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";


const InventoryView = () => {
    // Dummy inventory data
    const [inventoryData, setinventoryData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/itemInventory/getItemInventoryInfo')
          .then(res => {
              // console.log(res.data);
              setinventoryData(res.data);
    
          });
      }, []);
  
    return (
    <Container className='pt-5'>
      <table className="table table-bordered">
        <thead style={{backgroundColor: "#181868", color: "white"}}>
          <tr>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Item Type</th>
            <th>Item Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.itemQuantity}</td>
              <td>{item.itemType}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
    );
  };

export default InventoryView