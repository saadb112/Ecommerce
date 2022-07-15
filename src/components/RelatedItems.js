import React from "react";

const RelatedItems = (props) => {
  const {arr} = props
  console.log(arr)
  return (
<>

    {(arr == undefined) ? "" :   <div className="card">
    <a className="product" href={`/product${arr.id}`}>
     
        <img src={arr.imgaddress} alt="" />
        <div className="text">
          <p className="title">{arr.title}</p>
          <p>Rs.{arr.price}</p>
        </div>
        </a>
        <button className="buy">Buy Now</button>
      </div>
       
    
}
     </>
  );
};

export default RelatedItems;
