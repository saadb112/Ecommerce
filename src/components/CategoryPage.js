import React from 'react'
import { useParams } from 'react-router-dom';
import Products from './product';

const CategoryPage = (props) => {

const {category} = useParams()
console.log(category)
let Arr = props.arr.filter((x) => x.category == category);
console.log(Arr)
  return (
    <> 
    <div className=" contain">
      <div className="head">
      <h2>{category}</h2>
      </div>
      
   {
    (Arr == undefined) ? "" : Arr.map((e) => [<Products arr={e} />])
    }  
    </div>


  </>
  )
}

export default CategoryPage