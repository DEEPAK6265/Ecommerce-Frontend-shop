import React from 'react'
import {Form ,Button} from 'react-bootstrap'
import {useState} from 'react'
import './inventry.css'


function ProductAdd() {
  let  [p_id, setP_id]=useState("");
  let  [c_id, setC_id]   =useState("");
  let   [cc_id, setCc_id]  =useState("");
  let [Product_name, setProduct_name]      =useState("");
  let  [product_company, setProduct_company]  =useState("");
  let  [product_price, setProduct_price]  =useState("");
  let  [product_mfd, setProduct_mfd]   =useState("");
  let   [product_expirydate, setProduct_expirydate]  =useState("");
  let [product_quantity, setProduct_quantity]      =useState("");
  let  [description, setDescription]  =useState("");
  
async function addInventry(){
  let userdata={
  p_id,
  c_id,
  cc_id,
  Product_name,
  product_company,
  product_price,
  product_mfd,
  product_expirydate,
  product_quantity,
  description

}
console.log(userdata)
let output = await fetch("http://localhost:5050/proinv/proinv",
    {
    method:"POST",
    headers:{
   'Content-Type': 'application/json',
    "Accept":"application/json"
  },
    body:JSON.stringify(userdata),
    })
    
    output = await output.JSON();
      console.log(output)}
 return(
  <>
  <h1 className="shop">Inventry Add</h1> 
    <div className="shopform">
<Form >
    
    <b><Form.Label>p_id</Form.Label>
    <Form.Control type="text" placeholder="eg. 1234" value={p_id} onChange={(e)=>setP_id(e.target.value)} /><br/>

    <Form.Label>c_id</Form.Label>
    <Form.Control type="text" placeholder="eg. 1"  value={c_id} onChange={(e)=>setC_id(e.target.value)} required message= "Compulsory" /><br/>


    <Form.Label>CC_id</Form.Label>
    <Form.Control type="text" placeholder="eg. "  value={cc_id} onChange={(e)=>setCc_id(e.target.value)} /><br/>


    <Form.Label>Product_name</Form.Label>
    <Form.Control type="text" placeholder="eg. kolar" value={Product_name} onChange={(e)=>setProduct_name(e.target.value)} /><br/>

    <Form.Label>Product_company</Form.Label>
    <Form.Control type="text" placeholder="eg. "  value={product_company} onChange={(e)=>setProduct_company(e.target.value)} /><br/>


    <Form.Label>Product price</Form.Label>
    <Form.Control type="text" placeholder="eg. kolar" value={product_price} onChange={(e)=>setProduct_price(e.target.value)} /><br/>

    <Form.Label>Product_mfd</Form.Label>
    <Form.Control type="text" placeholder="eg. "  value={product_mfd} onChange={(e)=>setProduct_mfd(e.target.value)} /><br/>


    <Form.Label>Product exp</Form.Label>
    <Form.Control type="date" placeholder="eg. kolar" value={product_expirydate} onChange={(e)=>setProduct_expirydate(e.target.value)} /><br/>

    <Form.Label>Product quantity</Form.Label>
    <Form.Control type="date" placeholder="eg. kolar" value={product_quantity} onChange={(e)=>setProduct_quantity(e.target.value)} /><br/>

    <Form.Label>Product description</Form.Label>
    <Form.Control type="text" placeholder="eg. "  value={description} onChange={(e)=>setDescription(e.target.value)} />
    <Button variant="primary" type="submit" onClick={addInventry}>
    Submit
  </Button></b>
    </Form>

</div>
  
  </>
 )
}


export default ProductAdd