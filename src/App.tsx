import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import WishList from './components/WishList';
import NavBar from './components/NavBar';
import { Book } from './types/book';

function App() {

  const [query, setQuery] = useState("react");
  const [wishList, setWishList] = useState<Book[]>([]);

  const handleAddToWishList = (book: Book) => {
    console.log(book);
    setWishList([...wishList, book]);
    console.log(wishList);
  };
  
  const handleRemoveFromWishList = (book: Book) => {
    const updatedWishList = wishList.filter((wishListBook) => wishListBook.id !== book.id);
    setWishList(updatedWishList);
    console.log(book);
    console.log(wishList);
  };

  return (
    <div className="App">
      <NavBar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<BookList query={query} wishList={wishList} handleAddToWishList={handleAddToWishList} handleRemoveFromWishList={handleRemoveFromWishList} />} />
        <Route path="/WishList" element={<WishList wishList={wishList} handleRemoveFromWishList={handleRemoveFromWishList} />} />
      </Routes>         
    </div>
  );
}

export default App;
