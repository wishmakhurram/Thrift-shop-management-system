import React from "react";
import {AiFillCaretDown,AiOutlineHeart} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BsFillBagCheckFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>free shipping for order above $200. shop now!</p>
          </div>
          <div>
            <a href="#">coolmate</a>
          </div>
          <div>
            <a href="#">home</a>
            <a href="#">collections</a>
            <a href="#">products</a>
            <a href="#">other pages</a>
          </div>
          <div>
            <a href="#">english <AiFillCaretDown /></a>
            <a href="#">usd <AiFillCaretDown /></a>
          </div>
          <div>
          <a href="#"><FiUser /></a>
          <a href="#"><AiOutlineHeart /></a>
          <a href="#"><BsFillBagCheckFill /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
