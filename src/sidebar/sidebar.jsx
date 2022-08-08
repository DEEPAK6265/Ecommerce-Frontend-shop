// import React from 'react'

// function sidebar() {

//   const menuItem=[
//     {
//       path:"/pro_inventry",
//       name:"Product_Inventry",
//       icon:<></>
//     },
//     {
//       path:"/pro_specification",
//       name:"Product_Specififaction",
//       icon:<></>
//     },
//     {
//       path:"/banking",
//       name:"Banking_details",
//       icon:<></>
//     },
//     {
//       path:"/employ",
//       name:"Employee_list",
//       icon:<></>
//     },
//   ]
//   return (
//     <div className="container">
//       <div className="sidebar">
//         <div className="top_section">
//           <h1 className="logo">Logo</h1>
//           <div className="bars"></div>
//         </div>
//       </div>





//     </div>
//   )
// }

// export default sidebar





// import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import './sidebar1.css'
// import Bankingadd from '../banking/bankingadd'
// import Bankingview from '../banking/bankingview'
// import Employeeadd from '../Employ/employeeadd'
// import Employeeview from '../Employ/employeeview'
// import  Specificationadd from '../productspecification/specificationadd'
// import View from '../productspecification/specificationview';
// import Inventryadd from '../productinventry/inventryadd'
// import Inventryview from '../productinventry/inventryview'

// function sidebar() {
//   return (
//     <div className="sider">
//       <div className="sid">
//       <li>Product_Inventry</li>
//       <ul>
//       <li><Link to ="/inventryadd">Add</Link></li>
//     <li><Link to ="/inventryview">View</Link></li>
//     </ul>
//      <li>Product_specification</li>
//      <ul>
//     <li><Link to ="/specificationadd">Add</Link></li>
//     <li><Link to ="/specificationview">View</Link></li>
//     </ul>
//     <li>Employee</li>
//     <ul>
//       <li><Link to ="/employeeadd">Add</Link></li>
//     <li><Link to ="/employeeview">View</Link></li>
//     </ul>
//      <li>Banking</li>
//      <ul>
//     <li><Link to ="/bankingadd">Add</Link></li>
//     <li><Link to ="/bankingview">View</Link></li>
//     </ul>
//     </div>
//     <div className="rou">
//       <Routes>
//       <Route path= "/inventryadd" element={<Inventryadd/>}/>
//     <Route path= "/inventryview" element={<Inventryview/>}/>
//     <Route path= "/specificationadd" element={<Specificationadd/>}/>
//     <Route path= "/specificationview" element={<View/>}/>
//     <Route path= "/employeeadd" element={<Employeeadd/>}/>
//     <Route path= "/employeeview" element={<Employeeview/>}/>
//     <Route path= "/bankingadd" element={<Bankingadd/>}/>
//     <Route path= "/bankingview" element={<Bankingview/>}/>
//       </Routes>

//     </div>
//     </div>
//   )
// }

// export default sidebar