import React from 'react';
import './Cart.css'; //import css file

const Card = (props) => {

    const { image, name } = props.author; //destructuring onject


    return ( // details on card {img,name}

        <div>

            <div className="card mb-3 shadow" style={{ maxWidth: "300px", height: "82px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className=" author-image " alt="" />
                    </div>

                    <div className="col-md-8" style={{ backgroundColor: "#00203FFF", color: "#fff" }}>
                        <div style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}>
                            <h5 className="card-title ms-2">{name}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Card;