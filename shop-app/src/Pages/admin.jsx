import React from 'react'
import {FaBars} from 'react-icons/fa';
import {BiHome,BiSolidDashboard} from 'react-icons/bi';
import { MdContacts } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { GrUser } from "react-icons/gr";

const Admin = () => {
  return (
    <div>
      <div>
        <div className='admin-menu'>
          <div>
            <h4>Admin</h4>
            <FaBars/>
          </div>
          <div>
            <span><img src="" alt="" /></span>
            <p>M.Ahmad</p>
            <p>Smart Admin</p>
          </div>
          <div>
            <a href="#"><BiSolidDashboard/> Dashboard</a>
            <a href="#"><MdContacts/> Contact Information</a>
            <a href="#"><HiTemplate/> View Products</a>
            <a href="#"><MdOutlineProductionQuantityLimits/> Add Products</a>
            <a href="#"><TbReorder/> View Orders</a>
            <a href="#"><GrUser/> View Customers</a>
          </div>
        </div>
        <div className='admin-dash'>

        </div>
      </div>
    </div>
  )
}

export default Admin
