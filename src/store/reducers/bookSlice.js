import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books: [],
    book : null
}

const bookSlice = createSlice({
    name : 'book',
    initialState,
    reducers : {
        loadBook : (state, action)=>{
            state.book = action.payload;
        },
        loadAllBooks: (state, action)=>{
            state.books = action.payload;
        }
    }
})

export const {loadBook, loadAllBooks} = bookSlice.actions;

export default bookSlice.reducer;
