import React from 'react'
import css from './footer.module.css'
import logo from '../../assets/logo.png';

import {
    PhoneIcon,
    LocationMarkerIcon,
    UserIcon 
} from '@heroicons/react/outline';
const Footer = () => {
  return (
      <div className={css.cfooterwrapper}>
          <hr />
          <div className={css.cfooter}>
              <div className={css.logo}>
              <img src={logo} alt="" />
                  <span>amzon</span>
              </div>

              <div className={css.block}>
                  <div className={css.details}>
                      <span>Contact Us</span>
                      <div className={css.pngLine}>
                          
                          <PhoneIcon className={css.icons} />
                          <span>111 th streat bhopal</span>
                      </div>

                      
                  </div>
              </div>

              <div className={css.block}>
                  <div className={css.details}>
                      <span>Contact Us</span>
                      <div className={css.pngLine}>
                          
                          <LocationMarkerIcon className={css.icons} />
                          
                          <span>111 th streat bhopal</span>
                      </div>

                      
                  </div>
              </div>
              <div className={css.block}>
                  <div className={css.details}>
                      <span>Contact Us</span>
                      <div className={css.pngLine}>
                          <UserIcon  className={css.icons}/>
                          <span>111 th streat bhopal</span>
                      </div>

                      
                  </div>
              </div>

          </div>

          


    </div>
  )
}

export default Footer