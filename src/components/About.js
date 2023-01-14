import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets/pic1.jpg'
import law from '../assets/law.png'
import pic10 from '../assets/pic10.jpg'
import pic6 from '../assets/pic6.jpeg'
import pic12 from '../assets/pic12.jpg'
import pic444 from '../assets/pic444.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function DarkVariantExample() {
  return (

    <> 

<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }} >
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>Welcome home! The home of quality!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={law}
          alt="Second slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic10}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic6}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic12}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic444}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>







<Row> 

<div>
      <h1>
        Allow us to introduce ourself
      </h1>
      <p> Lorem ipsum"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
    </div>

</Row>


<Row>

<Col className='col'>
  <h1> LOREM IPSUM SHEY YOU GO TELL ME</h1>
<p> Lorem ipsum"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>

</Col>



<Col className='col'>
<h1> LOREM IPSUM SHEY YOU GO TELL ME</h1>
<p> Lorem ipsum"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>

  
</Col>


</Row>
    
    
    </>
    
    


    
  );
}

export default DarkVariantExample;