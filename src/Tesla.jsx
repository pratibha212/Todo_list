import React from 'react'
import Heading from './Heading'
import Section from './Section'
import './Tesla.css'
import Model3 from './images/model-3.jpg'
import Models from './images/model-s.jpg'
import Modelx from './images/model-x.jpg'
import Modely from './images/model-y.jpg'
import SolarPanel from './images/solar-panel.jpg'
import SolarRoof from './images/solar-roof.jpg'
import Accessories from './images/accessories.jpg'

function Tesla(props) {
  return (
    <>
<Heading/>
      <Section
    name="Model-3"
    text="Online Delivery"
    leftbtn="Customer Order"
    rightbtn="Existing Inventory"
    bgphoto={Model3}
    arrow={true}
    />
    <Section
    name="Model-S"
    text="Online Delivery"
    leftbtn="Customer Order"
    rightbtn="Existing Inventory"
    bgphoto={Models}
    />
    <Section
    name="Model-x"
    text="Online Delivery"
    leftbtn="Customer Order"
    rightbtn="Existing Inventory"
    bgphoto={Modelx}
    />
    <Section
    name="Model-y"
    text="Online Delivery"
    leftbtn="Customer Order"
    rightbtn="Existing Inventory"
    bgphoto={Modely}
    />
   
    <Section
    name="Solar panels"
    text="Online Delivery"
    leftbtn="Customer Order"
    rightbtn="Existing Inventory"
    bgphoto={SolarPanel}
    />
    
     <Section
    name="Solar roof"
    text="Online Delivery"
    leftbtn="Customer Order"
    rightbtn="Existing Inventory"
    bgphoto={SolarRoof}
    />
     <Section
    name="Accessories"
    text="Online Delivery"
    leftbtn="Customer Order"
    bgphoto={Accessories}
    />
  
    </>
  )
}

export default Tesla
