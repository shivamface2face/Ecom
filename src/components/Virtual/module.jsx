import React from 'react'
import css from './virtual.module.css'
import shade from '../../assets/shade.png';
import before from '../../assets/before.png';
import after  from '../../assets/after.png';
import ReactCompareImage from 'react-compare-image';
const Virtual = () => {
  return (
  

    <div className={css.virtual}>
      
      <div className={css.left}>

        <span>Virtual try-On</span>
        <span>Never Buy the wrong shade Again</span>
        <span>try now</span>
        <img src={shade} alt="" />

      </div>

      <div className={css.right}>
        <div className={css.wrapper}>
        <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
       
        
      </div>
        
     


    </div>
  )
}

export default Virtual