import React from 'react'

const Menuitems = ({items}) => {
    return (
        <>
            <div className="menuitem container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {items.map((elem) => {
                                const { id, image, name, category, price, description } = elem;
                                return (
                                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                        <div className="row iteminside">
                                            {/* menudiv */}
                                            <div className="col-12 col-md-12 col-lg-4 imgdiv">
                                                <img src={image} alt="menupic" />
                                            </div>
                                            {/*  menu image desc */}
                                            <div className=" col-12 col-md-12 col-lg-8">
                                                <div className="maintitle pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description} </p>
                                                </div>
                                                <div className="menuprice">
                                                    <div className="pricebook d-flex justify-content-between">
                                                        <h4>Price : {price}</h4>
                                                        <a href="!#">
                                                            <button className="btn btn-sm btn-primary">Order Now</button>
                                                        </a>
                                                    </div>
                                                    <p>Price May Be vary accordingly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>  
    )
}

export default Menuitems
