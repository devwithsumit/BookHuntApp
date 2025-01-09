// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks, fetchSingleBook } from '../../store/actions/bookActions';
import BookCard from '../../components/BookCard';
import BooksWrapper from '../../components/BooksWrapper';
import Search from '../../components/Search';

const Home = () => {

    //bookSlice from store which contains { book, books } in it
    const { books } = useSelector((store) => store.bookSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBooks(""));
        // console.log(books);
    }, [])
    return (
        <>
            <h1 className='text-3xl w-fit mx-20 mt-10'>Hunt down your favourite books📚!</h1>
            {books.length > 0 ? (
                <BooksWrapper books={books} />
            ) : (
                <h1 className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>
            )}
        </>
    )
};

export default Home;
