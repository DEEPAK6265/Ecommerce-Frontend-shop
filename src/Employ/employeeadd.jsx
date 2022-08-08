import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import './employadd.css'

function Employ() {
  let[employ_id, setEmploy_id]=useState("");
  let[shop_id, setShop_id]=useState("");
  let[employ_full_name, setEmploy_full_name]=useState("")
  let[role, setRole]=useState("");
 
  async function AddEmploy(){
    let userdata={
      employ_id,
      shop_id,
      employ_full_name,
      role
    }

    let reqData={
      method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(userdata)
      }
     fetch("http://localhost:5050/employ/employ",reqData)

     .then(response=> console.log(`Data Submitted ${response.status}`))
    }
    return(
       <div className="Employ">

         <Form>
    
    <Form.Label>Employ id</Form.Label>
    <Form.Control type="text" placeholder="Enter emp id" value={employ_id}
    onChange={(e)=> setEmploy_id(e.target.value)}/><br/><br/>

    <Form.Label>Shop_id</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={shop_id}
    onChange={(e)=> setShop_id(e.target.value)}/><br/><br/>

    <Form.Label>Employ full name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={employ_full_name}
    onChange={(e)=> setEmploy_full_name(e.target.value)}/><br/><br/>

    <Form.Label>Role</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={role}
    onChange={(e)=> setRole(e.target.value)}/><br/><br/>

    <Button variant="primary" type="submit" onClick={AddEmploy}>
      Submit
    </Button>
    
</Form>  
       </div>
    )
  }
export default Employ