import React, { useState } from 'react';
import { FiUser, FiLogIn, FiUserPlus } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const AccountComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" className='nav-functions nav-account' onClick={handleShow}>
        <FiUser className="nav-body-functions-icons" />
        <span>Account</span>
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title">Welcome!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="account-body">
          <div className="user-actions">
            <a href="/login">
              <FiLogIn className="action-icon" />
              <span>Login</span>
            </a>
            <a href="/signup">
              <FiUserPlus className="action-icon" />
              <span>Signup</span>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AccountComponent;
