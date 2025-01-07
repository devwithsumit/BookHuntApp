import React from 'react'
import BookCard from './BookCard';

function BooksLayout({ books }) {
    return (
        <div className='flex gap-5 flex-wrap px-20 py-10'>
            {books && books.map((book) => (
                <BookCard
                    id={book.id}
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    image={book.volumeInfo?.imageLinks?.thumbnail}
                    description={book.volumeInfo.description}
                />
            ))}
        </div>
    )
}

export default BooksLayout;