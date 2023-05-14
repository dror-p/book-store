import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { ReactComponent as Search } from "../assets/search-filled.svg";

interface Props {
    setQuery: (query: string) => void;
}
  
const SearchBar = ({ setQuery }: Props) => {
    const [searchTerm, setSearchTerm] = useState("react");

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    const handleSearch = debounce(() => {
        setQuery(searchTerm);
    }, 1000);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='search-bar'>
            <input 
                id="header-search"
                type="text"
                placeholder="Looking for a book?"
                value={searchTerm}
                onChange={handleChange}                
            />
            <Search id="search-icon" />
        </div>        
    );
};

export default SearchBar;
