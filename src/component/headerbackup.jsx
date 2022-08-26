import { Link } from "react-router-dom";


function Header() {
    
    return ( <nav className="navbar navbar-expand-sm bg-dark navbar-dark stiky-top">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/register" className="nav-link" >register</Link>
        </li>
      </ul>
    </div>
  </nav> );
}

export default Header;