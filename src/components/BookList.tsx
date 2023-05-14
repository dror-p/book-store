import { useState, useEffect } from "react";
import { searchBooks } from "../API";
import '../App';
import { Book } from '../types/book';
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as OutlinedHeart } from "../assets/outlined-heart.svg";

type Props = {
  query: string;
  wishList: Book[];
  handleRemoveFromWishList: (book: Book) => void;
  handleAddToWishList: (book: Book) => void;
};

const BookList = ({ query, wishList, handleAddToWishList, handleRemoveFromWishList }: Props) => {

  const [books,setBooks] = useState<Book[]>([]);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  useEffect(() => {
    if(query) {
      searchBooks(query, perPage, page)
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => console.log(err));
    }
  }, [query, perPage, page]);

  const handleBookAddToWishList = (book: Book) => {
    handleAddToWishList(book);
  };

  return (
    <>
      <div className='book-list'>
          {books.map((book) => (
            <div key={book.id} className='book'>
              <div><h2>{book.title}</h2></div>
              <div style={{ position: 'relative' }}>
                <img src={book.thumbnail} />
                {wishList.find((wishListBook) => wishListBook.id === book.id) ? (
                <Heart onClick={() => handleRemoveFromWishList(book)} style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'thistle', opacity: 0.8, width: '40px', height: '40px' }} />
                ) : (
                <OutlinedHeart onClick={() => handleBookAddToWishList(book)} style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'thistle', opacity: 0.8, width: '40px', height: '40px' }} />
                )}
              </div>
              <div><p>By {book.authors[0]}</p></div>
            </div>
          ))}
      </div>

      <div className='pagination'>
        <button className='pagination-button' onClick={() => setPage(page - 1)} disabled={page === 1}>{'<'}</button>
        <span>{page}</span>
        <button className='pagination-button' onClick={() => setPage(page + 1)}>{'>'}</button>
        <select className='select-pagination' value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
          <option value={6}>6 per page</option>
          <option value={9}>9 per page</option>
          <option value={12}>12 per page</option>
        </select>
      </div>
    </>
  )
};

export default BookList;
