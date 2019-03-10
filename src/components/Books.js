import React from 'react'
import Book from './Book'

const Books = ({ books = []}) =>{
return (
    <ul>
        { 
            books.map(book => (
                <Book key={book.id} {...book}></Book>
            )) 
        }
    </ul>
)
};
 

export default Books