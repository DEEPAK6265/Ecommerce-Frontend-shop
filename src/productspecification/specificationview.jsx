import React from 'react'
import {useEffect, useState} from 'react';
import{Modal,Button,Form,Row,Col} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function SpecView() {
  let[data, setData]=useState([]);
  let[search,setSearch]=useState('');
  let[filteredspeci,setFilterSpeci]=useState([]);
  let[product_id, setproduct_id]=useState("");
  let[Height, setHeight]=useState("");
  let[Width, setWidth]=useState("");
  let[Size, setSize]=useState("");
  let[color, setColor]=useState("");
  let[price, setPrice]=useState("");
  let[Expiry_date, setExpiry_date]=useState("");
  let[manufautre_date, setManufautre_date]=useState("");
  let[Weight, setWeight]=useState("");
  let[Dimensions, setDimensions]=useState("");

  const[show, setShow] =useState(false);
  const handleShow=()=>setShow(true);
  const handleClose = () => setShow(false);

function submitSpecification(
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
  )
{
  setproduct_id(product_id);
  setHeight(Height);
  setWidth(Width);
  setSize(Size);
  setColor(color);
  setPrice(price);
  setExpiry_date(Expiry_date);
  setManufautre_date(manufautre_date);
  setWeight(Weight);  
  setDimensions(Dimensions);
  setShow(true);
  handleShow()
}
const fetchData = async () => {
  const res = await fetch( "http://localhost:5050/prospe/prospe", {method: "GET"});
  const Udata = await res.json();
  setData(Udata.response);
  console.log(Udata.response)
  setFilterSpeci(Udata.response);
};

// const fetchData = async () => {
//   const response = await fetch("http://localhost:5050/prospe/prospe")
//   const Udata = await response.json()
//   setData(Udata.response)
// }

// useEffect(() => {
//   fetchData()
// }, [])


function deleteSpec(product_id){
  fetch(`http://localhost:5050/prospe/prospe/${product_id}`,
  {
    method:"DELETE"
  })

  .then((res) => {
    if(res.status===200){
      alert("userdeleted");
    }
  })
  fetchData();
}

function updateShop(){
  let data1={product_id,Height,Width,Size,color,price,Expiry_date,manufautre_date,Weight,Dimensions}
  let reqData={
    method:"PUT",
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify(data1)
  }

  fetch(`http://localhost:5050/prospe/prospe/${product_id}`,reqData)
        .then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp)
          }) 
          fetchData();
        })
       
        handleClose();
      }

      const columns=[
        {
          name:"Product id",
          selector:row=>row.product_id,
          sortable:true,
        },
        {
          name:"Height",
          selector:row=>row.Height
        },
        {
          name:"Width",
          selector:row=>row.Width
        },
        {
          name:"Size",
          selector:row=>row.Size
        },
        {
          name:"Color",
          selector:row=>row.color
        },
        {
          name:"Price",
          selector:row=>row.price
        },
        {
          name:"Exp date",
          selector:row=>row.Expiry_date
        },
        {
          name:"Manufacture date",
          selector:row=>row.manufautre_date
        },
        {
          name:"Weight",
          selector:row=>row.Weight
        },
        {
          name:"Dimensions",
          selector:row=>row.Dimensions
        },
        {
          name:"Edit",
          cell: row=>{return(<Button variant="success" onClick={() => submitSpecification(row.product_id,row.Height,row.Width,row.Size,row.color,row.price,row.Expiry_date,row.manufautre_date,row.Weight,row.Dimensions)}><ModeEditIcon/></Button>)}
        },
        {
        name:"Delete",
        cell: row=>{return(<Button onClick={() => deleteSpec(row.product_id)} variant="danger"><DeleteIcon/></Button>)
      }
      }
      ]
      useEffect(()=>{
        fetchData();
      },[])
      useEffect(()=>{
        const result=data.filter(value=>{
          return value.product_id.toLowerCase().match
          (search.toLowerCase());
        })
        setFilterSpeci(result);
      },[search])
      return(
        <>
        <div style={{marginLeft:"200px"}}>
        <Row style={{marginTop:"20px"}}>
             <Col xs={12} md={9}>
              {/* Add specificatio */}
             </Col>
             <Col xs={6} md={3}>
            <Button variant="success" style={{width:"180px",height:"40px",marginLeft:"30px"}}><a href="/specificationadd" style={{color:"blue",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i><b>Add specification</b></a></Button>
             </Col>
        </Row>
        <DataTable 
         columns={columns}
         data={filteredspeci}
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
          <Modal.Title>Update Specification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Reg no.</Form.Label>
<Form.Label>Product id</Form.Label>
    <Form.Control type="text" placeholder="Enter reg.no" value={product_id}
    onChange={(e)=> setproduct_id(e.target.value)}/>

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

    <Form.Label>Expiry Date</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Expiry_date}
    onChange={(e)=> setExpiry_date(e.target.value)}/>

    <Form.Label>manufautre_date</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={manufautre_date}
    onChange={(e)=> setManufautre_date(e.target.value)}/>

    <Form.Label>Weight</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Weight}
    onChange={(e)=> setWeight(e.target.value)}/>

    <Form.Label>Dimensions</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={Dimensions}
    onChange={(e)=> setDimensions(e.target.value)}/>
 </Modal.Body>
         <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateShop}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}
export default SpecView