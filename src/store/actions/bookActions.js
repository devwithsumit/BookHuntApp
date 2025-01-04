import { Instance } from "../../utils/booksInstance";
import { loadBook, loadAllBooks } from '../reducers/bookSlice';

export const fetchAllBooks = (query) => async (dispatch, getState) => {
    try {
        const { data } = await Instance.get(`volumes?q=${query ? query : 'fav' }&maxResults=20`);
        dispatch(loadAllBooks(data.items));
    } catch (error) {
        console.log(error);
    }
};

export const fetchSingleBook = (id) => async (dispatch, getState) => {
    try {
        const { data } = await Instance.get(`volumes/${id}`);
        dispatch(loadBook(data));
    } catch (error) {
        console.log(error);
    }
};