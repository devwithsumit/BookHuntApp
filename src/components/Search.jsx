import React from 'react'
import { useNavigate } from 'react-router-dom';

function Search({ query, setQuery }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`)    
        // setQuery("");
    }
    return (
        <>
            <div className='flex bg-white items-center pl-2 overflow-hidden justify-center rounded-lg mx-auto w-1/3'>
                <i className="ri-search-eye-line text-2xl mr-2"></i>
                <form action="" onSubmit={handleSubmit} className='flex items-center pl-2 w-full'>
                    <input
                        placeholder='Search your books...'
                        required
                        type="text"
                        className='text-lg py-1 pr-5 outline-none w-full bg-transparent placeholder:text-[1rem]'
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                    <button type='submit' className='px-8 py-1 text-white text-lg bg-blue-500 hover:bg-blue-600'>
                        Search
                    </button>
                </form>
            </div>
        </>
    )
}

export default Search