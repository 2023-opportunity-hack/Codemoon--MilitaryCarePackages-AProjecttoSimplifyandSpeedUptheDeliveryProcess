import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MilitaryCarePackageRequests = () => {

    const [userInfos, setUserInfos] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        receiverFirstName: '',
        // receiverMiddleName: String,
        receiverLastName:'',
        // receiverCompanyName: String,
        receiverAddressLine1:'',
        receiverAddressLine2:'',
        // receiverAddressLine3: String,
        // receiverAddressCity: String,
        receiverState:'',
        receiverCountry:'',
        receiverZipCode:'',
        // receiverPhone,
        receiverEmail:'',
        receiverGender:'',
        receiverBranch:'',
        receiverCarePackageType:'',

        shippingDate: '10-8-2001',
        itemDescription: '',
        itemQuantity: '',
        itemWeight: '',
        itemValue: '',
        countryOfOrigin: 'USA',
        senderFirstName: 'Blue Star Mothers',
        senderLastName: 'Blue Star Mothers',
        senderAddressLine1: 'Blue Star Mothers of Maricopa, AZ AZ7',
        senderAddressLine2: '-',
        senderState: 'Arizona',
        senderCountry: 'USA',
        senderZipCode: '85139',
        senderEmail: 'maricopaaz7@gmail.com',
    })

    useEffect(() => {
        axios.get('http://localhost:8000/userInfo/getUserInfo')
            .then(res => {
                setUserInfos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }

    const handleCreateLabel = () =>{

        axios.post('https://api.shipengine.com/v1/labels',{
            headers:{
                    'Content-Type': 'application/json',
                    'API-Key': 'TEST_GznuMV1irDf1Hg+8Ofypc7Oqqky5kJB5tHklxPBXm9A'
            }
        },
        {
            "shipment": {
              "service_code": "ups_ground",
              "ship_to": {
                "name": "Jane Doe",
                "address_line1": "525 S Winchester Blvd",
                "city_locality": "San Jose",
                "state_province": "CA",
                "postal_code": "95128",
                "country_code": "US",
                "address_residential_indicator": "yes"
              },
              "ship_from": {
                "name": "John Doe",
                "company_name": "Example Corp",
                "phone": "555-555-5555",
                "address_line1": "4009 Marathon Blvd",
                "city_locality": "Austin",
                "state_province": "TX",
                "postal_code": "78756",
                "country_code": "US",
                "address_residential_indicator": "no"
              },
              "packages": [
                {
                  "weight": {
                    "value": 20,
                    "unit": "ounce"
                  },
                  "dimensions": {
                    "height": 6,
                    "width": 12,
                    "length": 24,
                    "unit": "inch"
                  }
                }
              ]
            }
          }
          )
          .then(res=>console.log(res))
          .catch(err=>console.log(err))


        handleClose()
    }

    return (
        <>
        <Modal show={show} onHide={handleClose} size={'lg'}>
        <Modal.Header>
          <Modal.Title>Military Package Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <div style={{display:"flex"}}>
                            <div style={{width:"50%"}}>
                            <div>
                        <label htmlFor="firstName">
                                First Name: 
                            </label>
                            <input type="text" id="firstName" name="receiverFirstName"  value={user.receiverFirstName} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="lastName">
                                Last Name: 
                            </label>
                            <input type="text" id="lastName" name="receiverLastName" value={user.receiverLastName} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="addressLine1">
                                Address Line 1:  
                            </label>
                            <input type="text" id="addressLine1" name="receiverAddressLine1" value={user.receiverAddressLine1} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="addressLine2">
                                Address Line 2:  
                            </label>
                            <input type="text" id="addressLine2" name="receiverAddressLine2" value={user.receiverAddressLine2} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="state">
                                State: 
                            </label>
                            <input type="text" id="state" name="receiverState" value={user.receiverState} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="country">
                                Country: 
                            </label>
                            <input type="text" id="country" name="receiverCountry" value={user.receiverCountry} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="zipCode">
                                Zip Code: 
                            </label>
                            <input type="text" id="zipCode" name="receiverZipCode" value={user.receiverZipCode} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="email">
                                Email: 
                            </label>
                            <input type="text" id="email" name="receiverEmail" value={user.receiverEmail} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="gender">
                                Gender: 
                            </label>
                            <input type="text" id="gender" name="receiverGender" value={user.receiverGender} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="branch">
                                Branch: 
                            </label>
                            <input type="text" id="branch" name="receiverBranch" value={user.receiverBranch} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="carePackageType">
                        Care Package Type: 
                            </label>
                            <input type="text" id="carePackageType" name="receiverCarePackageType" value={user.receiverCarePackageType} onChange={(e)=>handleChange(e)}/>
                        </div>
                        </div>



{/* ////////////////////////////////////////// */}
                        <div style={{width:"50%"}}>
                        <div>
                        <label htmlFor="shippingDate">
                        shipping Date: 
                            </label>
                            <input type="text" id="shippingDate" name="shippingDate" value={user.shippingDate} onChange={(e)=>handleChange(e)}/>
                        </div>

                        <div>
                        <label htmlFor="itemDescription">
                        Care Package Type: 
                            </label>
                            <input type="text" id="itemDescription" name="itemDescription" value={user.itemDescription} onChange={(e)=>handleChange(e)}/>
                            </div>
                        <div>
                        <label htmlFor="itemQuantity">
                        itemQuantity: 
                            </label>
                            <input type="text" id="itemQuantity" name="itemQuantity" value={user.itemQuantity} onChange={(e)=>handleChange(e)}/>
                            </div>
                        <div>
                        <label htmlFor="itemWeight">
                        itemWeight: 
                            </label>
                            <input type="text" id="itemWeight" name="itemWeight" value={user.itemWeight} onChange={(e)=>handleChange(e)}/>
                            </div>
                        <div>
                        <label htmlFor="itemValue">
                        itemValue: 
                            </label>
                            <input type="text" id="itemValue" name="itemValue" value={user.itemValue} onChange={(e)=>handleChange(e)}/>
                            </div>
                        <div>
                        <label htmlFor="countryOfOrigin">
                        countryOfOrigin </label>
                            <input type="text" id="countryOfOrigin" name="countryOfOrigin" value={user.countryOfOrigin} onChange={(e)=>handleChange(e)}/>
                            </div>
                        <div>
                        <label htmlFor="senderFirstName">
                        senderFirstName: 
                            </label>
                            <input type="text" id="senderFirstName" name="senderFirstName" value={user.senderFirstName} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderLastName">
                        senderLastName: 
                            </label>
                            <input type="text" id="senderLastName" name="senderLastName" value={user.senderLastName} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderAddressLine1">
                        senderAddressLine1: 
                            </label>
                            <input type="text" id="senderAddressLine1" name="senderAddressLine1" value={user.senderAddressLine1} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderAddressLine2">
                        senderAddressLine2: 
                            </label>
                            <input type="text" id="senderAddressLine2" name="senderAddressLine2" value={user.senderAddressLine2} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderState">
                        senderState: 
                            </label>
                            <input type="text" id="senderState" name="senderState" value={user.senderState} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderCountry">
                        senderCountry: 
                            </label>
                            <input type="text" id="senderCountry" name="senderCountry" value={user.senderCountry} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderZipCode">
                        senderZipCode: 
                            </label>
                            <input type="text" id="senderZipCode" name="senderZipCode" value={user.senderZipCode} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                        <label htmlFor="senderEmail">
                        senderEmail: 
                            </label>
                            <input type="text" id="senderEmail" name="senderEmail" value={user.senderEmail} onChange={(e)=>handleChange(e)}/>
                        </div>
                            </div>
                </div>
                          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateLabel}>
            Create Label
          </Button>
        </Modal.Footer>
      </Modal>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent:'flex-start' }}>
            {
                userInfos && userInfos.map((userInfo, id) => {

                    const {
                        receiverFirstName,
                        // receiverMiddleName: String,
                        receiverLastName,
                        // receiverCompanyName: String,
                        receiverAddressLine1,
                        receiverAddressLine2,
                        // receiverAddressLine3: String,
                        // receiverAddressCity: String,
                        receiverState,
                        receiverCountry,
                        receiverZipCode,
                        // receiverPhone,
                        receiverEmail,
                        receiverGender,
                        receiverBranch,
                        receiverCarePackageType,
                    } = userInfo


                    return (<div style={{ margin: "1rem 2rem", padding:"1rem 1rem", border: "2px solid black", borderRadius: "20px", width: "400px" , display:"flex", flexDirection:"column", alignItems: "flex-start", cursor:"pointer"}} key={id} onClick={()=>{
                        handleShow()
                        setUser({...user, ...userInfo})
                    }}>
                        <div style={{ display: 'flex'}}>
                            <span style={{marginRight:"1rem"}}>
                                First Name: {receiverFirstName}
                            </span>
                            <span>
                                Last Name:  {receiverLastName}
                            </span>
                        </div>
                        <div>
                            Address Line 1: {receiverAddressLine1}
                        </div>
                        <div>
                            Address Line 2: {receiverAddressLine2}
                        </div>
                        <div style={{ display: 'flex'}}>
                        <span style={{marginRight:"1rem"}}>
                            State: {receiverState}
                        </span>
                        <span style={{marginRight:"1rem"}}>
                            Country:  {receiverCountry}
                        </span>
                        <span style={{marginRight:"1rem"}}>
                            Zip Code:{receiverZipCode}
                        </span>
                        </div>
                        <div>
                            Email: {receiverEmail}
                        </div>
                        <div>
                            Gender: {receiverGender}
                        </div>
                        <div>
                            Branch: {receiverBranch}
                        </div>
                        <div>
                            Care Package Type: {receiverCarePackageType}
                        </div>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default MilitaryCarePackageRequests