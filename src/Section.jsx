import React from 'react'
import './tesla.css'
import DownArrow from './images/down-arrow.svg'


function Section(props) {
 
  return (
    <>
    <section style={{ backgroundImage: "url(" +props.bgphoto + ")" }} >
      <div className="car">
    <h1>{props.name}</h1>
    <h4>{props.text} </h4>

    <button id='custom'>{props.leftbtn}</button>
    {props.rightbtn===undefined?"":<button id='Existing'>{props.rightbtn}</button>}
    {props.arrow ? <img id='arrow' src={DownArrow} alt="" />:""}
      </div>
    </section>
    
    
    </>
  )
}

export default Section