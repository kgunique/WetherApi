import React from 'react'

const Tabmenu = ({filterItem,catItem}) => {
    return (
        <>
            <div className="menutabs container">
                <div className="menutab d-flex justify-content-around">
                    {
                        catItem.map((curelem,index)=>{
                            return(
                                <button className="btn btn-warning" key={index} onClick= {()=>filterItem(curelem)}>{curelem}</button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Tabmenu;
