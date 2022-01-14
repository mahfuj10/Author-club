import React, { useEffect, useState } from 'react';
import Author from '../Author/Author'; //import js file 
import Cart from '../Cart/Cart'; //import js file

const Authors = () => {

    const [authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => { //fetch the json data

        fetch(`./Authors.json`)
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, []);

    const handaleIncrease = (author) => { //onclick function

        const newPerson = [ ...cart, author ];
        setCart(newPerson);
        console.log(newPerson);
    }

    return ( // container of all item

        <div>
            <div className="row">

                <div className="col-md-9">

                    <div className="row ms-5">
                        {
                            authors.map(author => <Author key={author.id} handaleIncreas={handaleIncrease} author={author}></Author>)
                        }
                    </div>

                </div>

                <div className="col-md-3">

                    <Cart cart={cart}> </Cart>

                </div>

            </div>

        </div >
    );
};

export default Authors;