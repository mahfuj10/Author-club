import React from 'react';
import Card from './Card'; //import js file

const Cart = (props) => {

    const { cart } = props; //destructuring object

    let hiringCost = 0;

    for (const price of cart) {
        hiringCost = parseInt(hiringCost) + parseInt(price.cost);
    }

    return (

        <div className="ms-lg-5">
            <h4 className="ms-5">Author Added: {cart.length}</h4>
            <h5 className="ms-5 mb-4">Total Hiring Cost: ${hiringCost}</h5>

            {
                cart.map(author => <Card key={author.key} author={author}></Card>)
            }
        </div>
    );
};

export default Cart;