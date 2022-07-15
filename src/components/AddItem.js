import React, { useState } from "react";

const AddItem = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [imgaddress, setimgaddress] = useState("");
  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("")
  const [category, setcategory] = useState("")
  const titlef = (e) => {
    settitle(e.target.value);
  };
  const descf = (e) => {
    setdesc(e.target.value);
  };
  const imgf = (e) => {
    setimgaddress(e.target.value);
  };
  const idf = (e) => {
    setid(e.target.value);
  };
  const pricef = (e) => {
    setprice(e.target.value);
  };
  const quantityf = (e) => {
    setquantity(e.target.value);
  };
  const categoryf = (e) => {
    setcategory(e.target.value);
  };
  const add = async (e) => {
    e.preventDefault();

    const data = await fetch("http://localhost:8000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        imgaddress,
        id,
        price,
        quantity,
        category
      }),
    });

    const json = await data.json();
    console.log(json);
   
  };
  return (
    <form method="POST" className="additem">
      <h1>ADD NEW ITEM</h1>
      <div className="r">

      <input type="text" placeholder="Title" name="title" onChange={titlef} />
      <input type="text" placeholder="Description" name="desc" onChange={descf} />
      </div>
<div className="r">
      <input type="text" placeholder="Img URL" name="imgaddress" onChange={imgf} />
      <input type="text" placeholder="ID" name="id" onChange={idf} />
      </div>
<div className="r">
      <input type="text" placeholder="Price" name="price" onChange={pricef} />
      <select placeholder="Category" name="category" onChange={categoryf} >
        <option value="">Select Category </option>
        <option value="game">Game</option>
        <option value="mobile">Mobile</option>
        <option value="tech">technology</option>
        <option value="fashion">Fashion</option>
        <option value="health">Health</option>
        <option value="electronics">Electronics</option>
        <option value="fitness">Fitness</option>
        </select>
      </div>
<div className="r">
      <input type="text" placeholder="Quantity" name="quantity" onChange={quantityf} />
      <a href="/"type="submit" onClick={add}>
        submit
      </a>
      </div>

</form>
  );
};

export default AddItem;
