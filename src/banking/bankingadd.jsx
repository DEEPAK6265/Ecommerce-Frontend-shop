import React from 'react'
import {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import './banking.css'

function Banking() {
  let  [bank_name, setBank_name]=useState("");
  let  [account_number, setAccount_number]   =useState("");
  let   [ifsc_code, setIfsc_code]  =useState("");
  let [cisf_number, setCisf_number]=useState("");

  async function addBank(){


   let userdata={ 
    bank_name,
    account_number,
    ifsc_code,
    cisf_number
  }
  console.log(userdata)
  
  let reqData = {
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(userdata)
  }

  fetch("http://localhost:5050/banking/banking", reqData)
  .then(response => console.log(`datasubmitted ${response.status}`))
}
  return (
    <>
     <h1 className="shop">Bank Add</h1> 
    <div className="add">
<Form>
 <b>
    <Form.Label>Bank Name</Form.Label>
    <Form.Control type="text" placeholder="eg.SBI" value={bank_name}
    onChange={(e)=> setBank_name(e.target.value)} />

    <Form.Label>Accountnumber</Form.Label>
    <Form.Control type="text" placeholder="eg.00000000" value={account_number}
    onChange={(e)=> setAccount_number(e.target.value)} />

<Form.Label>Ifsc code</Form.Label>
    <Form.Control type="text" placeholder="eg.SBI00" value={ifsc_code}
    onChange={(e)=> setIfsc_code(e.target.value)} />
    

    <Form.Label>Cisf number</Form.Label>
    <Form.Control type="text" placeholder="eg.00000000" value={cisf_number}
    onChange={(e)=> setCisf_number(e.target.value)} />
    
    <Button variant="primary" type="submit" onClick={addBank}>
      Submit
    </Button>
    </b>
    
</Form>

        
    </div></>
  )
}
export default Banking