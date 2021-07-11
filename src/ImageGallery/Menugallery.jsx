import React, { useState } from 'react'
import Menu from './Menu'
import './menugallery.css'
import Menuitems from './Menuitems'
import Tabmenu from './Tabmenu'

const AllCateVal = [...new Set(Menu.map((elem) =>  elem.category )),"all"];


const Menugallery = () => {
    const [items, setItems] = useState(Menu)
    const [catItem,setcatItem] = useState(AllCateVal)

    const filterItem = (catItem)=>{
        if(catItem==="all"){
            setItems(Menu)
            return;
        }
       const updateditem = Menu.filter((curElem)=>{
           return curElem.category === catItem;
       })
       setItems(updateditem)
    }
    console.log(AllCateVal)
    return (
        <>
            <div className="mainheading mt-5 text-center">
                <h1 className="topheading">Our Delicious Menu</h1>
            </div>
            <hr />
            {/* menu tabs start here */}
            
                
                {/* menu tabs end here */}
                <Tabmenu filterItem={filterItem} catItem = {catItem}/>
                {/* My main item section */}
                <Menuitems items={items}/>
                
        </>
               
    )
}

export default Menugallery;
