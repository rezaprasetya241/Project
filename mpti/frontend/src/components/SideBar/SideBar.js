import React from 'react'
import { Link } from 'react-router-dom'
// import adminPic from '../../images/adminPic.png'
import adminPic from '../../images/adminPic.png'
import {BiStore} from 'react-icons/bi'
import {AiFillShopping} from 'react-icons/ai'
import { RiCustomerService2Line } from 'react-icons/ri'
import './SideBar.style.css'

export default function SideBar() {
  return (
        <div className='sidebar'>
            <div className='sidebar_profile text-center'>
                <img src={adminPic} alt=""/>
                <h6>Syifa Karina</h6>
                <p>Merchant Account</p>
            </div>
            <div className='sidebar__menu'>
                    <p><a to="/"><BiStore style={{marginRight: '8px'}}/>Dashboard</a></p>
                    
                    <p><a to="/"><AiFillShopping style={{marginRight: '8px'}}/>Shopping Cart</a></p>
                    
                    <p><a to="/"><RiCustomerService2Line style={{marginRight: '8px'}}/>Customer Support</a></p>
            </div>
        </div>
  )
}
