import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import './spec.css';

function Product() {
    let[product_id, setProduct_id]=useState("");
    let[Height, setHeight]=useState("");
    let[Width, setWidth]=useState("");
    let[Size, setSize]=useState("");
    let[color, setColor]=useState("");
    let[price, setPrice]=useState("");
    let[Expiry_date, setExpiry_date]=useState("");
    let[manufautre_date, setManufautre_date]=useState("");
    let[Weight, setWeight]=useState("");
    let[Dimensions, setDimensions]=useState("");
    

   async function addSpecification(){

    let userdata={
        product_id,
        Height,
        Width,
        Size,
        color,
        price,
        Expiry_date,
        manufautre_date,
        Weight,
        Dimensions
    }
    console.log(userdata)
    
   let reqData={
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringfy(userdata)   
    }
    fetch("http://localhost:5050/prospe/prospe",reqData)
    .then(response=>console.log(`Data submited ${response.status}`))
   }
return(
  <>
   
    <div className="sss">
    <h1 className="spe">Add</h1>
     <Form className="for">
    
     <b><Form.Label>Poduct id</Form.Label>
    <Form.Control type="text" placeholder="eg. 1234" value={product_id} onChange={(e)=>setProduct_id(e.target.value)} />

    <Form.Label>Height</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Height}
    onChange={(e)=> setHeight(e.target.value)}/>

    <Form.Label>Width</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Width}
    onChange={(e)=> setWidth(e.target.value)}/>

    <Form.Label>Size</Form.Label>
    <Form.Control type="text" placeholder="Enter reg.no" value={Size}
    onChange={(e)=> setSize(e.target.value)}/>

    <Form.Label>Color</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={color}
    onChange={(e)=> setColor(e.target.value)}/>

    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={price}
    onChange={(e)=> setPrice(e.target.value)}/>

    <Form.Label>Mfd Date</Form.Label>
    <Form.Control type="date" placeholder="Enter email" value={Expiry_date}
    onChange={(e)=> setExpiry_date(e.target.value)}/>

    <Form.Label>Exp date</Form.Label>
    <Form.Control type="date" placeholder="Enter email" value={manufautre_date}
    onChange={(e)=> setManufautre_date(e.target.value)}/>

    <Form.Label>Weight</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Weight}
    onChange={(e)=> setWeight(e.target.value)}/>

    <Form.Label>Dimensions</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Dimensions}
    onChange={(e)=> setDimensions(e.target.value)}/>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

    <Button variant="primary" type="submit" onClick={addSpecification}>
      Submit
    </Button></b>
    
</Form>

 </div>
 </>
)

  }
export default Product