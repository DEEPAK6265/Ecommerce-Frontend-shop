import React from 'react'
// import Sidebar from '../src/sidebar/sidebar'
import Header from './header/header';
import Sidebar1 from './sidebar/sidebar1';
import { Route,Routes } from 'react-router-dom';
import Bankingadd from './banking/bankingadd'
import Bankingview from './banking/bankingview'
import Employeeadd from './Employ/employeeadd'
import Employeeview from './Employ/employeeview'
import  Specificationadd from './productspecification/specificationadd'
import View from './productspecification/specificationview';
import Inventryadd from './productinventry/inventryadd'
import Inventryview from './productinventry/inventryview'




function App() {
  return (
    <div className="Owner">
      <Header/>
      <Sidebar1 />
<Routes>
<Route path= "/inventryadd" element={<Inventryadd/>}/>
    <Route path= "/inventryview" element={<Inventryview/>}/>
    <Route path= "/specificationadd" element={<Specificationadd/>}/>
    <Route path= "/specificationview" element={<View/>}/>
    <Route path= "/employeeadd" element={<Employeeadd/>}/>
    <Route path= "/employeeview" element={<Employeeview/>}/>
    <Route path= "/bankingadd" element={<Bankingadd/>}/>
    <Route path= "/bankingview" element={<Bankingview/>}/>

</Routes>

    
    </div>
  )
}

export default App