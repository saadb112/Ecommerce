import React, { useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import Product from "./product";
// import { useParams } from "react-router-dom";
const Products = (props) => {
  const { arr, category } = props;
  // const { category } = useParams();
const breakPoints = [
  {width : 300, itemsToShow : 1},
  {width : 420 , itemsToShow : 2},
  {width : 571, itemsToShow : 3},
  {width : 801, itemsToShow : 4},
  {width : 1440, itemsToShow : 5},
]
console.log(arr)
let Arr = props.arr.filter((x) => x.category == category);


  console.log(Arr);
  return (
    <> 
      <div className=" contain">
        <div className="head">
        <h2>{props.Cheading}</h2>
        </div>
        <Carousel breakPoints={breakPoints}>
     {
      (category == undefined) ? arr.map((e) => <Product arr={e} />) : Arr.map((e) => [<Product arr={e} />])
      }
</Carousel>     
      </div>


    </>
  );
};

export default Products;
