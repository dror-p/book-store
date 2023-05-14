import { Book } from '../types/book';

type Props = {
  wishList: Book[];
  handleRemoveFromWishList: (book: Book) => void;
};

const WishList = ({ wishList, handleRemoveFromWishList }: Props) => {
  return (
    <>
        <h1>My Wish List</h1>
        <div className='wish-list'>      
        {wishList.length > 0 ? (
            wishList.map((book) => (
            <div key={book.id} className='book'>
                <div><h2>{book.title}</h2></div>
                <div><img src={book.thumbnail} /></div>
                <div><p>By {book.authors[0]}</p></div>
                <div><button onClick={() => handleRemoveFromWishList(book)}>Remove from WishList</button></div>
            </div>
            ))
        ) : (
            <p>No books in your wish list yet.</p>
        )}
        </div>
    </>
  )
};

export default WishList;
