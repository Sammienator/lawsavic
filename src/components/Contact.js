import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

function Contact () {
  return (

   <div id='contactt'> 
    
     <Container >    

     <h1 className='heading' style={{fontWeight: "bolder" , fontSize: "40px", marginTop: "100px", textAlign: "center"}}> Reach out to me below for a quote, questions or clarifications.</h1>

    <Form action="https://formspree.io/f/xnqyqlyb" method="POST" >

     <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="Names" name='bothNames' placeholder="Enter Your Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text >
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control type="Number" name='mobile' placeholder="Telephone Number" />
        <Form.Text >
          We will never share your Mobile Number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Peronal Message</Form.Label>
        <Form.Control as="textarea" type='Message' name='message' placeholder='Write Your Message Here....' rows={3} />
      </Form.Group>


      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </Container>

      </div>



  );
}

export default Contact;