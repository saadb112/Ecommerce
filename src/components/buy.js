import React, { useState } from 'react'

const Buy = () => {
    
  const [email, setemail] = useState("")
const [phone, setphone] = useState("")
const [fname, setfname] = useState("")
const [lname, setlname] = useState("")
const [address, setaddress] = useState("")
const [city, setcity] = useState("")
const [postal, setpostal] = useState("")
    const emailf = (e) => {
        setemail(e.target.value);
      };
      const phonef = (e) => {
        setphone(e.target.value);
      };
      const fnamef = (e) => {
        setfname(e.target.value);
      };
      const lnamef = (e) => {
        setlname(e.target.value);
      };
      const addressf = (e) => {
        setaddress(e.target.value);
      };
      const cityf = (e) => {
        setcity(e.target.value);
      };
      const postalf = (e) => {
        setpostal(e.target.value);
      };
      const add = async (e) => {
        e.preventDefault();
    
        const data = await fetch("http://localhost:8000/buy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            phone,
            fname,
            lname,
            address,
            city,
            postal
          }),
        });
    
        const json = await data.json();
        console.log(json);
       
      };
  return (
    <div>
 <form method="POST" className="buyp">
      <h1>ENTER DETAILS</h1>
      <h3>Delivery Charges : 250rs all over Pakistan</h3>
      <div className="r">

      <input type="text" placeholder="Email" name="email" onChange={emailf} />
      <input type="text" placeholder="Phone Number" name="phone" onChange={phonef} />
      </div>
<div className="r">
      <input type="text" placeholder="First Name" name="fname" onChange={fnamef} />
      <input type="text" placeholder="Last Name" name="lname" onChange={lnamef} />
      </div>
<div className="r">
      <input type="text" placeholder="Address" className='address' name="address" onChange={addressf} />
      </div>
<div className="r">
      <input type="text" placeholder="City" name="city" onChange={cityf} />
      <input type="text" placeholder="Postal Code" name="postal" onChange={postalf} />
      </div>
<div className="r">
    
      <a href="/buy" type="submit" onClick={add}>
      <button className='buy' >Place Order</button>
      </a>
      </div>

</form>
    </div>
  )
}

export default Buy