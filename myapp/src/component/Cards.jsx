import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./dashboard/css/bgtxt.css"


const Cards = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-book")
            .then((Response) => Response.json())
            .then((data) => {
                setBooks(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className='row'>

                {books.map((book, index) => (



                    <div className='col-md-3 '>

                        <div className="card box">
                            <img src={book.bookImage}className="card-img-top img-setting" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{book.bookName}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/Singlecard/${book._id}`}>Sea details</Link>
                            </div>
                        </div>

                    </div>
                ))}

            </div>



        </div>
    )
}

export default Cards