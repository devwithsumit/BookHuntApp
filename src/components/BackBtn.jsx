import React from 'react'
import { Link } from 'react-router-dom'

function BackBtn() {
    return (
        <Link to={'/'} className='fixed left-1 top-1/2 -translate-y-1/2 shadow'>
            <button className='px-5 py-1 text-white bg-blue-500 rounded'>
                <i className="ri-arrow-left-line text-3xl"></i>
            </button>
        </Link>
    )
}

export default BackBtn