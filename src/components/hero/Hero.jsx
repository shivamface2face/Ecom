import React from 'react'
import css from './hero.module.css';
import HeroImg  from '../../assets/hero.png';




const Hero = () => {
  return (
    <div className={css.container}>
      
      {/* left side */}

      <div className={css.h_side}>
        
        <span className={css.text1}>skin protection cream</span>
        
        <div className={css.text2}>
          
          <span>Treandy collection</span>
          {" "}
          <span>speadly effective to your skin</span>
         
        </div>
        
     </div>      


          

          {/* Mid section */}

          <div className={css.wrapper}>
              <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" srcset="" />
        <div className={css.cart2}>
          <span className={css.signup}>Best SingUp Offer</span>
        </div>

      </div>
      

      {/* right side */}

      <div className={css.hside}>

        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customer}>
          <span>100k</span>
          <span>Happy coustmer</span>
        </div>

      </div>
          
          
    </div>
  )
}

export default Hero