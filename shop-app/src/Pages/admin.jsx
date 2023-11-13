import React from 'react'
import {FaBars} from 'react-icons/fa';
import {BiHome} from 'react-icons/bi';

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
            <a href="#"><BiHome/> Dashboard</a>
            <p>Data</p>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
        <div className='admin-dash'>

        </div>
      </div>
    </div>
  )
}

export default Admin
