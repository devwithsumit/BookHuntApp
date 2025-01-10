import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { fetchSingleBook } from '../../store/actions/bookActions';
import parse from 'html-react-parser';
import BackBtn from '../../components/BackBtn';

function DetailLayout() {

    const { id } = useLocation().state;
    const dispatch = useDispatch();
    const { book } = useSelector(store => store.bookSlice);
    const { imageLinks, previewLink, title, description, authors, publisher } = book?.volumeInfo || {};

    useEffect(() => {
        dispatch(fetchSingleBook(id));
        // console.log(book?.volumeInfo);
    }, [])

    return (
        <div className='px-20 py-10'>
            <BackBtn />
            {book?.volumeInfo ? (
                <div className='flex gap-10'>
                    <div className='w-[20rem] h-full rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover' src={imageLinks.medium ? imageLinks.medium : imageLinks.thumbnail} alt="arhi hai" />
                    </div>
                    <div className='space-y-2 w-full'>
                        <h1 className='text-3xl'><b>{title}</b></h1>
                        <h1 className='font-semibold'>Author : <i>{authors}</i></h1>
                        <h1 className='font-semibold'>Publisher : <i>{publisher}</i></h1>
                        <p>{description ? parse(description) : "No description available"}</p>
                        <div className='flex items-center gap-2'>
                            <a href={previewLink} className='px-8 py-2 mt-2 text-white text-lg bg-blue-500 rounded'>More Info.</a>
                            {book.accessInfo.pdf.isAvailable &&
                                <a href={book.accessInfo.pdf.acsTokenLink} download className='px-8 py-2 mt-2 text-white text-lg bg-blue-500 rounded cursor-pointer'>
                                    Download
                                    <i className='ri-download-line'></i>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>
            )}
        </div>
    )
}

export default DetailLayout