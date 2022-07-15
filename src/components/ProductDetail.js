import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedItems from "./RelatedItems";

const ProductDetail = (props) => {
  // const params = useParams();
  let { id } = useParams();
  const { Products } = props;
  // console.log(Products)

  const Arr = Products.filter((x) => x.id == id);
  const [Quantity, setQuantity] = useState(1);
  const Add = () => {
    setQuantity(Quantity + 1);
  };
  const subt = () => {
    setQuantity(Quantity - 1);
  };
const rarr = [
  Products[Math.ceil(Math.random() * Products.length) + 1],
  Products[Math.ceil(Math.random() * Products.length) + 1],
  Products[Math.ceil(Math.random() * Products.length) + 1],
  Products[Math.ceil(Math.random() * Products.length) + 1],

  
]
  return (
    <>
      {Arr[0] == undefined ? (
        ""
      ) : (
        <div className="Main">
          <div className="row">
            <div className="R1 R12">
              <img src={Arr[0].imgaddress} alt="" />
            </div>
            <div className="R1 R2">
              <div className="text">
                <h2>{Arr[0].title}</h2>
                <h3>QUICK INFO</h3>
                <p className="blue">
                  CATEGORIES<span> NOT SPECIFIED</span>
                </p>
                <p className="blue">
                  DESCRIPTION<span> {Arr[0].desc}</span>
                </p>
                <p className="blue price">
                  RS.<span> {Arr[0].price}</span>
                </p>
              </div>
              <div className="btns">
                <div className="quantity">
                  <div className="btn2">
                   <button onClick={subt} disabled={Quantity <= 1}>-</button>
                    <input type="text" value={Quantity} />
                     <button onClick={Add}>+</button>
                  </div>
                </div>
                <a href="/buy" ><button className="buy">Buy Now</button></a>
              </div>
             
            </div>
          </div>
        </div>
      )}

      <div className="related">
        <h1>RELATED PRODUCTS</h1>
        <div className=" container">
          {console.log(rarr)}

        {
          rarr.map((e)=>{
            
            return(
              <RelatedItems arr={e} />

            )

          })
        }
        </div>

      </div>
    </>
  );
};

export default ProductDetail;
