import React, { useEffect, useState } from 'react'


const Manage = () => {
    const [books , setbooks] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/all-book")
        .then((response)=>
            response.json()
        ).then((data)=>{
            setbooks(data)
            console.log(data)
        })
    },[]) // added [] so that it does not refresh infanitly

    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/delete-book/${id}`,{
            method:"DELETE"
        }).then((response)=>response.json())
        .then((data)=>{
            setbooks(books.filter(book=>book._id!=id))
        })
    }

  return (
    <div>
      <h2 className='font-bold'>Manage Book</h2>
      <table className='table table-striped'> 
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Book Name</th>
                <th>Auther Name</th>
                <th>Category</th>
                <th>Manage</th>
            </tr>
        </thead>
        <tbody>
        {books.map((book , index)=>(
                <tr key={book._id}>
                        <td> {index+1}</td>
                        <td> {book.bookName} </td>
                        <td> {book.bookAuthor} </td>
                        <td> {book.category} </td>
                        <td> <button className='btn btn-outline-danger' onClick={()=>handleDelete(book._id)}> Delete  </button></td>
                    </tr>
             ))}
                  
            
        </tbody>
      </table>
    </div>
  )
}

export default Manage
