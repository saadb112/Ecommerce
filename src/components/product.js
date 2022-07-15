import React from "react";
const Procduct = (props) => {
  return ( 
   
  <div className="card">
    <a className="products" href={`/product${props.arr.id}`}>
     
        <img src={props.arr.imgaddress} alt="" />
        <div className="text">
          <p className="title">{props.arr.title}</p>
          <p>Rs.{props.arr.price}</p>
        </div>
        </a>
        <a href="/buy" className="btn" style={{margin : "auto"}} ><button className="buy">Buy Now</button></a>
      </div>

  );
};

export default Procduct;
