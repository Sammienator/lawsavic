import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function    Navb () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" >
      <Container style={{fontWeight: "bolder"}} >
        <Navbar.Brand href="#home">Lawsavic <br/> Investments </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="#features">About US</Nav.Link>
            <Nav.Link href="#deets">Vacants</Nav.Link>
            
            <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          
      
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Separated link
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