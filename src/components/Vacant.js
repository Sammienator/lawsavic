import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic8 from '../assets/pic8.jpg'
import pic111 from '../assets/pic111.jpg'
import Container from 'react-bootstrap/esm/Container';
import pic15 from '../assets/pic15.jpg'
import pic13 from '../assets/pic13.jpeg'
import pic9 from '../assets/pic9.jpg'
import pic333 from '../assets/pic333.jpg'

function BasicExample() {
  return (


<>

<Container>



  <Row>
    <h1> Find Our Open Listings Below. </h1>
    <p> Are you looking for the perfect property to rent in Nairobi and its environs? Whether it is an apartment for short term or a long term mansionette, Lawsavic Investment Limited offers a diversity of options to suit your every need.</p>
  </Row>

<Row> 






        <Col className='p-3' >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic8} />
      <Card.Body>
        <Card.Title> <h2>5 Bedroom Mansionette all Ensuite. </h2></Card.Title>
        <Card.Text>
          Located in the serene suburbs of Kitengela, 37 Kms from the capital city
        </Card.Text>
        <Button variant='transparent'  style={{backgroundColor:"aqua"}}> <p> Asking price: 49,500,000/=</p></Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>


        <Col className='p-3' >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic111} />
      <Card.Body>
        <Card.Title> <h2> 2 Bedroom Bungalow with Dsq. </h2></Card.Title>
        <Card.Text>
         Located in a residential development estate in the urban environs of kileleshwa. Ideal for a working-city home combination
        </Card.Text>
        <Button variant='transparent'  style={{backgroundColor:"aqua"}}><p> Asking price: 9,500,000/=</p></Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>


        <Col  className='p-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic15} />
      <Card.Body>
        <Card.Title> <h2> Bedsitter Rental Apartment Complex </h2></Card.Title>
        <Card.Text>
         Located in the busy environs of Rongai Kajiado County, all 46 units are up for sale.
        </Card.Text>
        <Button variant='transparent'  style={{backgroundColor:"aqua"}}><p> Asking price: 30,000,000/=</p></Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>



    </Row>

    <Row> 






<Col className='p-3' >
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={pic8} />
<Card.Body>
<Card.Title> <h2>5 BedroomMansionette all Ensuite.  </h2></Card.Title>
<Card.Text>
  Located in the serene suburbs of Kitengela, 37 Kms from the capital city
</Card.Text>
<Button variant='transparent'  style={{backgroundColor:"aqua"}}> <p> Asking price: 49,500,000/=</p></Button>
</Card.Body>
</Card>






</Col>


<Col className='p-3' >
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={pic9} />
<Card.Body>
<Card.Title> <h2>2 Bedroom Bungalow with Dsq.  </h2></Card.Title>
<Card.Text>
 Located in a residential development estate in the urban environs of kileleshwa. Ideal for a working-city home combination
</Card.Text>
<Button variant='transparent'  style={{backgroundColor:"aqua"}}><p> Asking price: 9,500,000/=</p></Button>
</Card.Body>
</Card>






</Col>


<Col  className='p-3'>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={pic13} />
<Card.Body>
<Card.Title> <h2>Bedsitter Rental Apartment Complex.  </h2></Card.Title>
<Card.Text>
 Located in the busy environs of Rongai Kajiado County, all 46 units are up for sale.
</Card.Text>
<Button variant='transparent'  style={{backgroundColor:"aqua"}}><p> Asking price: 30,000,000/=</p></Button>
</Card.Body>
</Card>






</Col>



</Row>


<Row> 






        <Col className='p-3' >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic8} />
      <Card.Body>
        <Card.Title> <h2>5 BedroomMansionette all Ensuite.  </h2></Card.Title>
        <Card.Text>
          Located in the serene suburbs of Kitengela, 37 Kms from the capital city
        </Card.Text>
        <Button variant='transparent'  style={{backgroundColor:"aqua"}}> <p> Asking price: 49,500,000/=</p></Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>


        <Col className='p-3' >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic333} />
      <Card.Body>
        <Card.Title> <h2>2 Bedroom Bungalow with Dsq.  </h2></Card.Title>
        <Card.Text>
         Located in a residential development estate in the urban environs of kileleshwa. Ideal for a working-city home combination
        </Card.Text>
        <Button variant='transparent'  style={{backgroundColor:"aqua"}}><p> Asking price: 9,500,000/=</p></Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>


        <Col  className='p-3'>
<Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={pic15} />
      <Card.Body>
        <Card.Title> <h2> Bedsitter Rental Apartment Complex  </h2></Card.Title>
        <Card.Text>
         Located in the busy environs of Rongai Kajiado County, all 46 units are up for sale.
        </Card.Text>
        <Button variant='transparent'  style={{backgroundColor:"aqua"}}><p> Asking price: 30,000,000/=</p></Button>
      </Card.Body>
    </Card>


    
        
    
        
        </Col>



    </Row>
  
</Container>




</>
    










    
  );
}

export default BasicExample;