import "../components/Navbar.css";
import mail from '../assets/mail.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <p>Dev.Deepan</p>
      <div className="nav-list">
        <a href="mailto: deepanganth@gmail.com">
          <img src={mail} alt="" />
        </a>
        <div className="list-nav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/work">
            <p>Project</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
