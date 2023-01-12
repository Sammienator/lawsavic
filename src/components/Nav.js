import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function    Navb () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" >
      <Container style={{fontWeight: "bolder"}} >
        <Navbar.Brand href="#home">Lawsavic Investment Limited.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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