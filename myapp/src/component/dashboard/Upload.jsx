import React, { useState } from 'react';
import './css/Upload.css';

const Upload = () => {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Horror",
        "Comedy",
        "Mystery",
        "Sci-Fi",
    ];
    const [selectCategory, setSelectedCategory] = useState(bookCategories[0]);
    const [bookImage, setBookImage] = useState("");

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookName = form.bookName.value;
        const bookAuthor = form.bookAuthor.value;
        const bookDescription = form.bookDescription.value;
        const bookImage = form.bookImage.value;
        const category = form.category.value;

        const bookObj = {
            bookName,
            bookAuthor,
            bookDescription,
            bookImage,
            category,
        };

        fetch("http://localhost:5000/upload-book", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookObj),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Book Uploaded Successfully");
                form.reset();
            });

        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="container">
                <div className="box">
                    <h2>Upload Book</h2>

                    <label htmlFor="bookName"><b>Book Name</b></label>
                    <input
                        id="bookName"
                        type="text"
                        placeholder="Enter Book Name"
                        name="bookName"
                    />

                    <label htmlFor="bookAuthor"><b>Book Author</b></label>
                    <input
                        id="bookAuthor"
                        type="text"
                        placeholder="Enter Author Name"
                        name="AuthorName"
                    />

                    <label htmlFor="category"><b>Book Category</b></label>
                    <select
                        onChange={handleChange}
                        id="category"
                        name="bookCategory"
                        value={selectCategory}
                    >
                        {bookCategories.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <br />

                    <label htmlFor="bookDescription"><b>Book Description</b></label>
                    <input
                        id="bookDescription"
                        type="text"
                        placeholder="Enter Description"
                        name="bookDescription"
                    />

                    <label htmlFor="bookImage">Book Image URL:</label>
                    <input
                        id="bookImage"
                        type="text"
                        value={bookImage}
                        onChange={(e) => setBookImage(e.target.value)}
                        className="form-control"
                        placeholder="Enter image URL"
                    />

                    {bookImage && (
                        <div className="text-center">
                            <img
                                src={bookImage}
                                alt="Book"
                                className="img-fluid mt-3"
                                style={{ maxHeight: '40vh', objectFit: 'contain' }}
                            />
                        </div>
                    )}

                    <button type="submit">Upload Book</button>
                </div>
            </div>
        </form>
    );
};

export default Upload;
