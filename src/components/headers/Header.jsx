import React from 'react'
import css from './header.module.css';
import logo from '../../assets/logo.png';
// import { GoThreeBars } from 'react-icons/cg';
// import { FaBeer } from 'react-icons/fa';
// import { FaCalendar } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
const Header = () => {
  return (
    <div>
      
      <div className={css.container}>
        
        <div className={css.logo}>
          
          <img src={logo} alt="" />
          <span>Amzon mini</span>
        
        </div>


        <div className={css.right}>
          
          <div className={css.bars}>
            <FaCalendar/>
          </div>

          <div className={css.menu}>
           
           
            <ul className={css.menu}>

              <li>Collections</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sales</li>
              <li>Eng</li>

            </ul>



          </div>

          <input type="text" name="" id="" className={css.search} placeholder="search now" />
        
         


        </div>

      </div>


    </div>
  )
}

export default Header
