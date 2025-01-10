import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BooksWrapper from '../../components/BooksWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../store/actions/bookActions';
import BackBtn from '../../components/BackBtn';

function SearchLayout() {
    const { query } = useParams();
    const dispatch = useDispatch();
    const { books } = useSelector(store => store.bookSlice);

    useEffect(() => {
        console.log(books);
        dispatch(fetchAllBooks(query));
    }, [])
    return (
        <>
            <h1 className=' px-20 text-2xl mt-10'
            >
                Searched Keyword: <b><i>{query}</i></b>
            </h1>
            <BackBtn />
            <BooksWrapper books={books} />
        </>
    )
}

export default SearchLayout