import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic5 from '../assets/pic5.jpeg'
import pic13 from '../assets/pic13.jpeg'

function BasicExample() {
  return (



    <Row> 

<Col sm={6}  >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic13} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Asking price 45,000,000/=</Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>




        <Col sm={6}  >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Asking price: 16,500,000/=</Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>



    </Row>
    
  );
}

export default BasicExample;