import React from 'react'
import Product from "./products";
import Category from './Category';
import TopCarousel from './TopCarousel';

const home = (props) => {
  return (
    <>
    <div className='top'>
<Category />
<TopCarousel />
    </div>
{/* ALL PRODUCTS */}
 <Product arr={props.arr} Cheading="All Products" category={undefined}/>

{/* Tech  */}
<Product arr={props.arr} Cheading="Electronics" category="electronics"/>

{/* MOBILE  */}
<Product arr={props.arr} Cheading="Mobile & Accessories" category="mobile"/>

{/* FASHION  */}
<Product arr={props.arr} Cheading="Fashion" category="fashion"/>

</>

  )
}

export default home