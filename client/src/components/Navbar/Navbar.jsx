import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

function Navbar() {
  const [open,setOpen] = useState(false);
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
         <div className="item">
         <img src="../public/img/en.png" alt="" />
          <KeyboardArrowDownIcon/>
         </div>
         <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon/>
         </div>
         <div className="item">
          <Link className='link' to='/products/:id'>Women</Link>
         </div>
         <div className="item">
          <Link className='link' to='/products/:id'>Men</Link>
         </div>
         <div className="item">
          <Link className='link' to='/products/:id'>Children</Link>
         </div>
        </div>
        <div className="center">
          <div className="item">
            <Link className='link' to="/">My Store</Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to='/'>Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>About</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
           {currentUser ? <div className="item">{currentUser.name}</div> : 
            <Link to='/signin'>
            <PersonOutlineIcon/>
            </Link> }
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && 
      <Cart/>
      }
    </div>
  )
}

export default Navbar;