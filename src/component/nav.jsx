import { Link } from "react-router-dom";



function Nav(props) {
  const { logon, setLogon } = props;
  const logoutHandle = () => {
    localStorage.removeItem("token");
    setLogon(null);
  }

  return (<nav className="navbar navbar-expand-sm bg-dark navbar-dark stiky-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">𝓂ℴ𝓃ℯ𝓎𝒷ℴℴ𝓀</Link>
      {logon && <span className="navbar-text">{logon}</span>}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            {
              !logon && <Link to="/login" className="btn btn-outline-dark nav-link " >Login</Link>
            }
          </li>
          <li className="nav-item">
            {
              !logon && <Link to="/register" className="btn btn-outline-dark nav-link">register</Link>
            }
          </li>
          <li className="nav-item">
            {
              logon && <Link to="#" className="btn btn-outline-dark nav-link" onClick={logoutHandle}>LogOut</Link>
            }
          </li>

        </ul>
      </div>
  </nav>);
}

export default Nav;