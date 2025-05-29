import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import digitalNestLogo from '../../styles/digitalNestLogo.png';
import '../../styles/index.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
            <Navbar.Brand>
                <img src={digitalNestLogo} alt="Digital Nest Logo" className="navbar-logo" />
                {" "}
                DigitalNest Store
            </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;