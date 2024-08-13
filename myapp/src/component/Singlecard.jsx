import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singlecard = () => {

    const [book,setBooks]= useState(null)
    const {id}=useParams()
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        fetch(`http://localhost:5000/find-book/${id}`)
        .then((Response)=> Response.json())
        .then((data)=>{
            setBooks(data)
            console.log(data)
            setLoading(false)
        })
    },[id])

    if(loading){
        return <div>.....Loading</div>
    }
  return (
    <div>
        <div className='row'>
            <div className='col-md-6'> <img src={book.bookImage}className="card-img-top" alt="..." /></div>
            <div className='col-md-6'>{book.bookdiscription}</div>

        </div>
    </div>
  )
}

export default Singlecard
