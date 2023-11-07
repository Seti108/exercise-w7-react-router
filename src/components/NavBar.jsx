import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css";

export default function NavBar({ setSearchQuery }) {
  return (
    <nav>
      <ul className="app-ul">
        <li className="app-li">
          <Link to="/">Home</Link>
        </li>
        <li>
          <SearchBar setSearchQuery={setSearchQuery} />
        </li>
      </ul>
    </nav>
  );
}
