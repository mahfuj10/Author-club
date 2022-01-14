import React from 'react';
import './Author.css';

const Author = (props) => {

    const { name, nationality, cost, toalBookPublish, image, birth, Email } = props.author;

    return (

        <div className="col-md-4">



            <div className="card shadow" style={{ width: "350px" }}>

                <div className="d-flex">

                    <img src={image} className="authorImage img-fluid " alt="" />

                    <span className="icon-container">
                        <a href="https://www.facebook.com/"><i class="fab fa-facebook-square social-icon mb-4"></i></a><br />
                        <a href="https://twitter.com/home"><i class="fab fa-twitter-square social-icon"></i></a>
                    </span>

                </div>

                <div className="card-body">
                    <p><b>Name:</b> <span style={{ fontWeight: "0" }}>{name}</span></p>
                    <p><b>Nationality:</b> {nationality}</p>
                    <p><b>Hiring Cost:</b> ${cost}</p>
                    <p><b>Email:</b> {Email}</p>
                    <p><b>Date of brith:</b> {birth}</p>
                    <p><b>Total write of book:</b> {toalBookPublish}</p>
                    <button onClick={() => props.handaleIncreas(props.author)} className="btn btn-danger w-50 mb-4"><i className="fas fa-shopping-cart"></i> Add To Cart</button>
                </div>


            </div>


        </div>
    );
};

export default Author;