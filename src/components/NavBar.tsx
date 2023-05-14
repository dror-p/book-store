import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import SearchBar from "./SearchBar";

interface Props {
  setQuery: (query: string) => void;
}

const NavBar = ({ setQuery }: Props) => {

  return (
    <nav className='navbar' style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to='/'>
          <Logo />
        </Link>
        <Link to='/WishList' style={{textDecoration: 'none'}}>
          <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
            <Heart style={{ marginRight: "5px", height: "15px" }} />
            <span style={{ fontWeight: "bold" }}>My Wishlist</span>
          </span>
        </Link>        
      </div>
      <SearchBar setQuery={setQuery} />
    </nav>
  );
};

export default NavBar;
