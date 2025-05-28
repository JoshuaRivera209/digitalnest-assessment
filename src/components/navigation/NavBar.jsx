import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import digitalNestLogo from '../../styles/digitalNestLogo.png';
import '../../styles/index.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img src={digitalNestLogo} alt="Digital Nest Logo" className="navbar-logo" />
            {" "}
            DigitalNest Store
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;