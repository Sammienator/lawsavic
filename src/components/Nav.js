import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function    Navb () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" color='white'>
      <Container style={{ fontWeight: "bolder" }} >
        <Navbar.Brand style={{color: "white" , fontSize: "24px", letterSpacing: "3px" }} href="#home">Lawsavic <br/> Investments </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{fontSize: "20px"}} id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="#about">About US</Nav.Link>
            <Nav.Link href="#vacant">Vacants</Nav.Link>
            
            <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
          
      
              <NavDropdown.Divider />
              <NavDropdown.Item href="#social">
                Social Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navb ;