
import React, {useEffect ,useState} from 'react';
import {Modal,Button,Form,Row, Col} from
 'react-bootstrap'
 import DataTable from 'react-data-table-component';
import './bankingview.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function BankingView() {
  
  let[data1, setData1]=useState([]);
  let[search,setSearch]=useState('');
  let[filteredcategories, setFilteredcategories]=useState([]);
  let[bank_name, setBank_name]= useState("");
  let [Account_number, setAccount_number]=useState("");
  let[ifsc_code, setIfsc_code]= useState("");
  let [Cisf_number, setCisf_number]=useState("");
  const[show,setShow] =useState(false);

  const handleShow=()=>setShow(true);
 
 const handleClose=()=> setShow(false);


 function submitBank(
  bank_name,
  Account_number,
  ifsc_code,
  Cisf_number
 )
 {
  setShow(true);
  setBank_name(bank_name);
  setAccount_number(Account_number);
  setIfsc_code(ifsc_code);
  setCisf_number(Cisf_number);
  handleShow()
 }

 //get api
 async function displayBank(){
  const response = await fetch("http://localhost:5050/banking/banking",{method:"GET"})
  const Udata= await response.json()
  setData1(Udata.response);
  setFilteredcategories(Udata.response);
}

function deleteCtegory(Account_number){
  fetch(`http://localhost:5050/banking/banking/${Account_number}`,
  {
    method:"DELETE"
  })
  
  .then((res)=>{
    if(res.status===200){
      alert("userdeleted")
    }
  })
  displayBank();
}
//PUT API
function updateBank(){
  let data={Account_number,bank_name,ifsc_code,Cisf_number}
  let reqData={
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify(data)
  }
    fetch(`http://localhost:5050/banking/banking/${Account_number}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
      })
    })
    displayBank();
    handleClose();
  }
  const columns=[
    {
      name:"Bank name",
      selector:row=> row.bank_name,
      sortable:true,
    },
    {
      name:"*Account Number",
      selector:row=>row.Account_number,
      
    },
    {
      name:"Ifsc Code",
      selector:row=> row.ifsc_code,
    },
    {
      name:"Cisf number",
      selector:row=>row.Cisf_number,
      
    },
    {
      name:"Edit",
      cell: (row)=><Button variant="success" onClick={() =>submitBank(row.Account_number,row.bank_name,row.ifsc_code,row.Cisf_number)}><ModeEditIcon/></Button>
    },
    {
    name:"Delete",
    cell: row=>{return(<Button onClick={() => deleteCtegory(row.Acount_number)} variant="danger"><DeleteIcon/></Button>)
  }
  }
  ]
  useEffect(()=>{
    displayBank();
  },[])

  useEffect(()=>{
    const result=data1.filter(value=>{
      return value.bank_name.toLowerCase().match
      (search.toLowerCase());
    })
    setFilteredcategories(result);
  },[search])
return(
  <>
 <div style={{marginLeft:"200px"}}>
     <Row style={{marginTop:"20px"}}>
         <Col xs={12} md={9}>
           {/* Category List */}
         </Col>
         <Col xs={6} md={3}>
        <Button variant="success" style={{width:"180px",height:"40px"}}><a href="/bankingadd" style={{color:"blue",textDecoration:"none"}}><b>Addbank</b></a></Button>
         </Col>
    </Row>



    <DataTable 

// title="categorylist"
columns={columns}
data={filteredcategories}
pagination
fixedHeader
fixedHeaderScrollHeight="450"
selectableRows
selectableRowsHighlight
highlightOnHover
subHeader
subHeaderComponent={
  <input
   type ="search"
  placeholder="search here"
  // className="w-25 from-control"
  value={search}
  onChange={(e)=>setSearch(e.target.value)}

/>
}
/>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Update bank</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form.Label>bank name</Form.Label>
  <Form.Control type="text" placeholder="eg.SBI" value={bank_name} onChange={(e) => setBank_name(e.target.value)} />
  
  <Form.Label>Account number</Form.Label>
  <Form.Control type="text" placeholder="eg. Electronics" value={Account_number} onChange={(e) => setAccount_number(e.target.value)} />

  <Form.Label>Ifsc code</Form.Label>
  <Form.Control type="text" placeholder="eg.SBI" value={ifsc_code} onChange={(e) => setIfsc_code(e.target.value)} />

  <Form.Label>Cisf_number</Form.Label>
  <Form.Control type="text" placeholder="eg.SBI" value={Cisf_number} onChange={(e) => setCisf_number(e.target.value)} />

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={updateBank}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
</div>
</>
)

}

export default BankingView