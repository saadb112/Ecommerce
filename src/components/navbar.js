import React, { useState, useEffect } from 'react'
import "../navbar"

const Navbar = () => {
    const [Width, setWidth] = useState(601)
    const width= ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(() => {
     window.addEventListener("resize", width)
    }, [])
    
    
  return (
    <>
{
(Width >= 600) ? "" : <button onClick={()=>{
    const h2 = document.getElementById("h2")
    h2.style.top = "0"
}} className='ham' id='ham'>
    <div className='line'></div>
    <div className='line'></div>
    <div className='line'></div>
</button> }
    {
    <header className={(Width >= 600) ? `h1` : `h2`} id="h2">
        <button onClick={()=>{
            const h2 = document.getElementById("h2")
            h2.style.top = "-800px"
        }} className={(Width <= 600) ? `close` : `f`} id="close"><i className={`fa-solid fa-2x fa-xmark `}></i></button>
        <nav>
            <img src="https://goalysports.com/wp-content/uploads/2020/11/GolaSports.png" alt="" />
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/mobile">MOBILE</a>
                </li>
                <li>
                    <a href="/fashion">FASHION</a>
                </li>
                <li>
                    <a href="/game">GAME</a>
                </li>
                <li>
                    <a href="">GET IN TOUCH</a>
                </li>
            </ul>
        </nav>
    </header>
}
   
    </>
  )


}

export default Navbar