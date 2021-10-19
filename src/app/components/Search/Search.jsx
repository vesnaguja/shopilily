import "./Search.css";

const Search = ({onTypingHandler}) => {
  return <input type="search" placeholder="Search" className="search border-0 border-bottom border-2 px-2" onChange={onTypingHandler} />;
};

export default Search;
