import React from 'react'
import {Modal,Button,Form,Row,Col} from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import{useEffect,useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import './employeeview.css'

function EmployView() {
  let[data, setData] =useState([])
  let[search, setSearch]=useState('');
  let[filteredsubcategory, setFilteredsubcategory]=useState([]);
  let[employ_id, setEmploy_id]=useState("");
  let[shop_id, setShop_id]=useState("");
  let[employ_full_name, setEmploy_full_name]=useState("")
  let[role, setRole]=useState("");
  const[show,setShow] =useState(false);
  const handleShow=()=>setShow(true);

  const handleClose=()=> setShow(false);


  function submitEmploy(
    employ_id,
    shop_id,
    employ_full_name,
    role
  )
  {
    setEmploy_id(employ_id);
    setShop_id(shop_id);
    setEmploy_full_name(employ_full_name);
    setRole(role);
    handleShow()
  }
  async function displayEmploy(){
    let response=await fetch("http://localhost:5050/employ/employ",{method:"GET"})
    let Udata= await response.json()
    setData(Udata.response);
    setFilteredsubcategory(Udata.response)
  }
  function deleteSubcategory(employ_id){
    fetch(`http://localhost:5050/employ/employ/${employ_id}`,
    {
      method:"DELETE"
    })
    .then((res)=>{
      if(res.status===200){
        alert("userdeleted")
      }  displayEmploy(); 
    })
    
}
function updateSubctegory(){
  let data={employ_id,shop_id, employ_full_name,role}
  let reqData={
    method:'PUT',
    headers:{
      'Content-Type': 'application/json',
      'Accept':'application/json'
      
  },
  body:JSON.stringify(data)
}
fetch(`http://localhost:5050/employ/employ/${employ_id}`,reqData)
.then((result)=>{
  result.json().then((resp)=>{
    console.warn(resp)
  })
})
displayEmploy();
handleClose();
}


const columns=[
  {
    name:"Employ_id",
    selector:row=>row.employ_id,
    sortable:true,
},
{
    name:"Shop_id",
    selector:row=>row.shop_id
},
{
    name:"Emp full name",
    selector:row=>row.employ_full_name
},
{
  name:"Role",
  selector:row=>row.role
},
{
  name:"Edit",
  cell: row=>{return(<Button variant="success" onClick={() => submitEmploy(row.employ_id,row.shop_id,row.employ_full_name,row.role)}><ModeEditIcon/></Button>)}
},
{
name:"Delete",
cell: row=>{return(<Button onClick={() => deleteSubcategory(row.employ_id)} variant="danger"><DeleteIcon/></Button>)}
}
] 
useEffect(()=>{
 displayEmploy();
},[])

useEffect(()=>{
 const result=data.filter(value=>{
   return value.employ_id.toLowerCase().match
   (search.toLowerCase());
 })
 setFilteredsubcategory(result);
},[search])
return (
  <>
  <div style={{marginLeft:"200px"}}>
   <Row style={{marginTop:"20px", marginLeft:"2px"}}>
       <Col xs={12} md={9}>
        
       </Col>
       <Col xs={6} md={3}>
       
      <Button variant="success" style={{width:"180px",height:"40px"}}><a href="/employeeadd" style={{color:"blue",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i><b>AddEmployee</b></a></Button>
     </Col>
  </Row>
  <DataTable
    columns={columns}
      data={filteredsubcategory}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input type ="search"
        placeholder="search here"
        className="w-25 from-control"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      
      />
      }
      />

<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Update category</Modal.Title>
    </Modal.Header>
    <Modal.Body>


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
</Modal.Body>
<Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={updateSubctegory}>
        Save Changes
      </Button>
    </Modal.Footer> 
    </Modal> 
  </div>
  </>
  )

}

 export default EmployView
// let [data, setData]=useState([])
//   let[search,setSearch]=useState('');
//   let[filteredinventry, setFilteredinventry]=useState([]);
//   let  [p_id, setP_id]=useState("");
//   let  [c_id, setC_id]   =useState("");
//   let   [cc_id, setCc_id]  =useState("");
//   let [Product_name, setProduct_name]      =useState("");
//   let  [product_company, setProduct_company]  =useState("");
//   let  [product_price, setProduct_price]  =useState("");
//   let  [product_mfd, setProduct_mfd]   =useState("");
//   let   [product_expirydate, setProduct_expirydate]  =useState("");
//   let [product_quantity, setProduct_quantity]      =useState("");
//   let  [description, setDescription]  