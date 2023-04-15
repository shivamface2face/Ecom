import { React, useState } from 'react'
import css from './products.module.css'
import plane from '../../assets/plane.png';
import {ProductsData} from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {

  const [parent] = useAutoAnimate();

  const [menuProducts, setmenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setmenuProducts(ProductsData.filter((product)=>product.type===type))
  }


  return (
      <div className={css.container}>
          <img src={plane} alt="" />
          <h1>Our Featured Products</h1>

          <div className={css.products}>
              <ul className={css.menu}>
          <li onClick={() =>setmenuProducts(ProductsData)}>All</li>
                  <li onClick={()=>filter("skin care")} >Skin Care</li>
                  <li onClick={()=>filter("conditioner")}>Conditiones</li>
                  <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
         
        <div className={css.list} ref={parent}>
          

          {
            menuProducts.map((product, i) => (

              <div className={css.product}>
                
                <div className="left-s">
                  
                  <div className="name">

                    <span>{product.name}</span>
                    <span>{ product.detail}</span>
                  </div>
                  <span>{product.price}</span>
                  <div>Shop Now</div>

                  
                </div>

                <img src={product.img} alt="" className='img-p' />

              </div>



            ))
              
            
          }
          

                  
              </div>
          </div>
          

    </div>
  )
}

export default Products