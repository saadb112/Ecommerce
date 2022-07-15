import React, { useState } from 'react'

const DeleteItem = ({arr}) => {
  // console.log(arr)
  const [items, setitems] = useState(arr)
  console.log(items)
    const Delete = async(id)=>{
        const data = await fetch(`http://localhost:8000/delete${id}`, {
            method: "delete",
            headers: {
              "Content-Type": "application/json",
            },
            
          });
          const json = await data.json()
          console.log(json)
          setitems(json)


    }
  return (
    
    <>
    <div className="contain">

    { (items == undefined) ? "" : items.map((e)=>{
{console.log(e)}
return(
    <>
      <div className="card delete">
        <img src={e.imgaddress} alt="" />
        <div className="text">
          <p className="title">{e.title}</p>
          <p>Rs.{e.price}</p>
        </div>
        <i onClick={()=>Delete(e._id)} class="fa-solid fa-2x fa-trash-can"></i>
      </div>
    </>
)
    })

}
</div>

</>
 
  )
}

export default DeleteItem