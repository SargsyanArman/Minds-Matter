import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchBooks, setSearchBooks] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=25`);
      const fetchedBooks = response.data.items || [];
      const booksWithImages = fetchedBooks.filter(
        (book) => book.volumeInfo.imageLinks,
      );
      setBooks(booksWithImages);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks("Aghata+Christie");
  }, []);



  const location = useRef(useLocation());
  const navigate = useRef(useNavigate());

  const id = useRef(null);
  useEffect(() => {
    clearTimeout(id.current);
    if (searchBooks) {
      if (location.current.pathname !== '/') {
        navigate.current('/');
      }
      id.current = setTimeout(() => {
        fetchBooks(searchBooks);
      }, 1000);
    }
  }, [searchBooks]);

  const handleChange = (e) => {
    setSearchBooks(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        searchBooks,
        books,
        loading,
        handleChange,
        setSearchBooks,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
