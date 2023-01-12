import Carousel from 'react-bootstrap/Carousel';
import pic2 from '../assets/pic2.jpg'
import law from '../assets/law.png'
import pic10 from '../assets/pic10.jpg'

function DarkVariantExample() {
  return (

    
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
          style={{height: "70vh", width: "auto"}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={law}
          alt="Second slide"
          style={{height: "60vh", width: "auto"}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic10}
          alt="Third slide"
          style={{height: "70vh", width: "auto"}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;