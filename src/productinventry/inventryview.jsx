// import React from 'react'
// import { useEffect ,useState} from 'react';
// import Table from 'react-bootstrap/Table';
// import {Modal,Button,Form,Row,Col} from 'react-bootstrap';
// import DataTable from 'react-data-table-component';

// function InventryView() {
//   let [data, setData]=useState([])
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
//   let  [description, setDescription]  =useState("");
//   const[show, setShow]=useState(false);
//   const handleShow=()=>setShow(true);

//   const handleClose = () => setShow(false);
   
//     function submitInventry(
//       p_id,
//       c_id,
//       cc_id,
//       Product_name,
//       product_company,
//       product_price,
//       product_mfd,
//       product_expirydate,
//       product_quantity,
//       description
//     )
// {
//   setP_id(p_id);
//   setC_id(c_id);
//   setCc_id(cc_id);
//   setProduct_name(Product_name);
//   setProduct_company(product_company);
//   setProduct_price(product_price);
//   setProduct_mfd(product_mfd);
//   setProduct_expirydate(product_expirydate);
//   setProduct_quantity(product_quantity);
//   setDescription(description);
//   handleShow()

// }

// async function displayShop(){
//   let responses = await fetch("http://localhost:5050/proinv/proinv", {method:"GET"})
//   let Udata= await responses.json()
//   setData(Udata.response);
//   // console.log(Udata.response)
//   setFilteredinventry(Udata.response)

// }


// function deleteShop(c_id){
//   fetch(`http://localhost:5050/proinv/proinv/${c_id}`,
//   {
//     method:"DELETE"
//   })
//   .then((res) => {
//     if(res.status===200){
//       alert("userdeleted");
//     }    displayShop();
//     })

//   }

//   function updateShop(){
//     let data1={p_id,c_id,cc_id,Product_name,product_company,product_price,product_mfd,product_expirydate,product_quantity,description,description}
//     let reqData={
//       method:"PUT",
//       headers:{
//         'Content-Type':'application/json',
//         'Accept':'application/json'
//       },
//       body:JSON.stringify(data1)
//     }
//     fetch(`http://localhost:5050/proinv/proinv/${c_id}`,reqData)
//     .then((result)=>{
//       result.json().then((resp)=>{
//         console.warn(resp)
//       })
//     })
//     displayShop();
//     handleClose();
// }

// const columns=[

//   {
//     name:"p_id",
//     selector:row=>row.p_id
//   },

//   {
//     name:"c_id",
//     selector:row=>row.c_id
//   },

//   {
//     name:"Customer category id",
//     selector:row=>row.cc_id
//   },
  
//   {
//     name:"Product_name",
//     selector:row=>row.Product_name
//   },
//   {
//     name:"Product company",
//     selector:row=>row.product_company
//   },

//   {
//     name:"Product price",
//     selector:row=>row.product_price
//   },
//   {
//     name:"Product mfd",
//     selector:row=>row.product_mfd
//   },
//   {
//     name:"Product expirydate",
//     selector:row=>row.product_expirydate
//   },
//   {
//     name:"Description",
//     selector:row=>row.description,
//     sortable:true,
//   },
//   {
//     name:"Edit",
//     cell: row=>{return(<Button variant="success" onClick={() =>submitInventry(row.p_id,row.c_id,row.cc_id,row.Product_name,row.product_company,row.product_price,row.product_mfd,row.product_expirydate,row.description)}>Update</Button>)}
//   },

//   {
//     name:"Delete",
//     cell: row=>{return(<Button onClick={() => deleteShop(row.c_id)} variant="danger">Delete</Button>)}
//     }
// ]
// useEffect(()=>{
//   displayShop();
// },[])

// useEffect(()=>{
//   const result=data.filter(value=>{
//     return value.c_id.toLowerCase().match
//     (search.toLowerCase());
//   })
//   setFilteredinventry(result);
// },[search])
// return(
//   <>
// <div className="container">
//     <Row style={{marginTop:"20px"}}>
//          <Col xs={12} md={9}>
//           Shop List
//          </Col>
//          <Col xs={6} md={3}>
//         <Button variant="success" style={{width:"180px",height:"40px"}}><a href="/inventryadd" style={{color:"red",textDecoration:"none"}}><i class="bi bi-plus" style={{fontSize:"20px"}}></i>Addshop</a></Button>
//          </Col>
//          </Row>
//          <DataTable 
//          columns={columns}
//          data={filteredinventry}
//          pagination
//          fixedHeader
//          fixedHeaderScrollHeight="450"
//          selectableRows
//          selectableRowsHighlight
//          highlightOnHover
//          subHeader
//          subHeaderComponent={
//            <input type ="search"
//            palceholder="search here"
//            className="w-25 from-control"
//            value={search}
//            onChange={(e)=>setSearch(e.target.value)}
//     />
//          }
//          />
//           <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Shop</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>


//         <Form.Label>Product id</Form.Label>
// <Form.Control type="text" placeholder="Enter reg.no" value={p_id} onChange={(e)=>setP_id(e.target.value)} />

// <Form.Label>Customer id</Form.Label>
// <Form.Control type="text" placeholder="Enter email"  value={c_id} onChange={(e)=>setC_id(e.target.value)} />


// <Form.Label>Customer category id</Form.Label>
// <Form.Control type="text" placeholder="Enter email"  value={cc_id} onChange={(e)=>setCc_id(e.target.value)} />


// <Form.Label>product name</Form.Label>
// <Form.Control type="text" placeholder="Enter email" value={Product_name} onChange={(e)=>setProduct_name(e.target.value)} />



// <Form.Label>Product company</Form.Label>
// <Form.Control type="text" placeholder="Enter email"  value={product_company} onChange={(e)=>setProduct_company(e.target.value)} />


// <Form.Label>product name</Form.Label>
// <Form.Control type="text" placeholder="Enter email" value={Product_name} onChange={(e)=>setProduct_name(e.target.value)} />


// <Form.Label>Product Price</Form.Label>
// <Form.Control type="text" placeholder="Enter email"  value={product_price} onChange={(e)=>setProduct_price(e.target.value)} />


// <Form.Label>Product mfd</Form.Label>
// <Form.Control type="text" placeholder="Enter email" value={product_mfd} onChange={(e)=>setProduct_mfd(e.target.value)} />

// <Form.Label>Product Exp</Form.Label>
// <Form.Control type="text" placeholder="Enter email"  value={product_expirydate} onChange={(e)=>setProduct_expirydate(e.target.value)} />


// <Form.Label>Product quantity</Form.Label>
// <Form.Control type="text" placeholder="Enter email" value={product_quantity} onChange={(e)=>setDescription(e.target.value)} />



// <Form.Label>Product description</Form.Label>
// <Form.Control type="text" placeholder="Enter email" value={description} onChange={(e)=>setDescription(e.target.value)} />
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={updateShop}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>






//          </div>
//     </>
// )
// }

// export default InventryView


import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import { FaPen, FaTrash, FaEye } from "react-icons/fa";
// import { BsPlusLg } from "react-icons/bs";
// import swal from 'sweetalert';

function Inventryview() {
  let [data1, setData1] = useState([]);
  let [search, setSearch] = useState("");
  let [filteredproductinventory, setFilteredproductinventory] = useState([]);
  let [p_id, setP_id] = useState("");
  let [c_id, setC_id] = useState("");
  let [cc_id, setCc_id] = useState("");
  let [Product_name, setProduct_name] = useState("");
  let [product_company, setProduct_company] = useState("");
  let [product_price, setProduct_price] = useState("");
  let [product_mfd, setProduct_mfd] = useState("");
  let [product_expirydate, setProduct_expirydate] = useState("");
  let [product_quantity, setProduct_quantity] = useState("");
  let [description, setDescription] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function selectData(
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
  ) 
  {
    setP_id(p_id);
    setC_id(c_id);
    setCc_id(cc_id);
    setProduct_name(Product_name);
    setProduct_company(product_company);
    setProduct_price(product_price);
    setProduct_mfd(product_mfd);
    setProduct_expirydate(product_expirydate);
    setProduct_quantity(product_quantity);
    setDescription(description);
    handleShow();
  }

 

  // get api
  const fetchData = async () => {
    const res = await fetch( "http://localhost:5050/proinv/proinv", {method: "GET"});
    const Udata = await res.json();
    setData1(Udata.Response);
    console.log(Udata.Response)
    setFilteredproductinventory(Udata.Response);
  };

  //get api product
  //  let getData=async ()=>{
  //   const res =await fetch("http://localhost:5050/product/product", {method: "GET"});
  //   const Udata =await res.json();
  //   set Data1(Data.response);

  //  }

  // delete api
  function deleteProduct(p_id) {
    fetch(
      `http://localhost:5050/proinv/proinv/${p_id}`,
      { method: "DELETE" }
    ).then((res) => {
      if (res.status === 200) {
        alert("userdeleted");
        // alert("product deleted");
        // swal({
        //   title: "Good job!",
        //   text: "Your data is deleted!",
        //   icon: "deleted",
        //   button: "OK!",
        // });
      }
    });
    fetchData();
  }

  // update api (put)
  function updateproduct() {
    let data1 = {
      p_id,
      c_id,
      cc_id,
      Product_name,
      product_company,
      product_price,
      product_mfd,
      product_expirydate,
      product_quantity,
      description,
    };

    let reqData = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    };
    fetch(
      `http://localhost:5050/proinv/proinv/${p_id}`,
      reqData
    ).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        // swal({
        //   title: "Good job!",
        //   text: "Your data is updated",
        //   icon: "success",
        //   button: "OK!",
        // });
      });
      fetchData();
    });
    fetchData();
    handleClose();
  }

  

  const columns = [
    {
      name: "Product_Id",
      selector: (row) => row.p_id,
      sortable:true,
    },
    {
      name: "Category_Id",
      selector: (row) => row.c_id,
    
    },
    {
      name: "SubCategory_Id",
      selector: (row) => row.cc_id,
  
    },
    {
      name: "Product_Name",
      selector: (row) => row.Product_name,
      
    },
    {
      name: "Product_company",
      selector: (row) => row.product_company,
    
    },
    {
      name: "MF_Date",
      selector: (row) => row.product_price,
    },
    {
      name: "EX_Date",
      selector: (row) => row.product_mfd,
    },
    {
      name: "Shop_Id",
      selector: (row) => row.product_expirydate,
    },
    {
      name: "Quantity",
      selector: (row) => row.product_quantity,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Edit",
      cell: (row) => <Button variant="success"onClick={() => 
            selectData(
              row.p_id,
              row.c_id,
              row.cc_id,
              row.Product_name,
              row.product_company,
              row.product_price,
              row.product_mfd,
              row.product_expirydate,
              row.product_quantity,
              row.description
            )
          }
        >
        <ModeEditIcon/>
        </Button>
      
        },
    {
      name: "Delete",
      cell: (row) => {
        return (
          <Button
            onClick={() => deleteProduct(row.p_id)}
            variant="danger"
          >
          <DeleteIcon/>
          </Button>
        );
      },
    },
   {
    name:"View",
    cell:(row) => { return( 
      <Button variant="btn btn-outline-success"><Link to="/inventryview">Add</Link></Button>
    )}
   }
  ];

  useEffect(() => {
     fetchData();
  }, []);

  useEffect(() => {
    let result = data1.filter(value => {
      return value.p_id.toLowerCase().match(search.toLowerCase());
    });
    setFilteredproductinventory(result);
  }, [search]);

  return (
    <>
      <div style={{marginLeft:"200px"}}>
     <Row style={{marginTop:"20px"}}>
         <Col xs={12} md={9}>
           {/* Category List */}
         </Col>
          <Col xs={6} md ={3}>
            <Button variant="success"  style={{width:"180px",height:"40px"}}>
              <Link
                to="/inventryadd"
                style={{ color: "blue", textDecoration: "none" }}
              >
                {/* <BsPlusLg /> */}
               <b>AddInventory</b> 
              </Link>
            </Button>
          </Col>
        </Row>
        <DataTable
          columns={columns}
          data={filteredproductinventory}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="350px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              type="search"
              placeholder="search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ marginRight: "70px" }}
            />
          }
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product_Inventory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Product_Id</Form.Label>
            <Form.Control
              type="text"
              value={p_id}
              onChange={(e) => setP_id(e.target.value)}
            />
            <Form.Label>Category_Id</Form.Label>
            <Form.Control
              type="text"
              value={c_id}
              onChange={(e) => setC_id(e.target.value)}
            />
            <Form.Label>SubCategory_Id</Form.Label>
            <Form.Control
              type="text"
              value={cc_id}
              onChange={(e) => setCc_id(e.target.value)}
            />
            <Form.Label>Product_Name</Form.Label>
            <Form.Control
              type="text"
              value={Product_name}
              onChange={(e) => setProduct_name(e.target.value)}
            />
            <Form.Label>Product_Company</Form.Label>
            <Form.Control
              type="text"
              value={product_company}
              onChange={(e) => setProduct_company(e.target.value)}
            />
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="date"
              value={product_price}
              onChange={(e) => setProduct_price(e.target.value)}
            />
            <Form.Label>Mfd</Form.Label>
            <Form.Control
              type="date"
              value={product_mfd}
              onChange={(e) => setProduct_mfd(e.target.value)}
            />
            <Form.Label>Exp</Form.Label>
            <Form.Control
              type="text"
              value={product_expirydate}
              onChange={(e) => setProduct_expirydate(e.target.value)}
            />
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              value={product_quantity}
              onChange={(e) => setProduct_quantity(e.target.value)}
            />
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateproduct}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Inventryview;