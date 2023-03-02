import Carousel from 'react-bootstrap/Carousel';
import replace1 from '../assets/replace1.jpg'
import law from '../assets/law.png'
import replace2 from '../assets/replace2.jpg'
import replace3 from '../assets/replace3.jpg'
import replace4 from '../assets/replace4.jpg'
import replace5 from '../assets/replace5.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




function DarkVariantExample() {
  return (

    <> 

<Carousel id='home' variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={replace1}
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
          <p>Be all you can be, Be Home!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={replace2}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
          Home is the starting place of love, hope and dreams!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={replace3}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
          There is no place like home!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={replace4}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
            Ensuring you have your dream home, Your Way!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={replace5}
          alt="Third slide"
          style={{height: "70vh"}}
        />
        <Carousel.Caption style={{ "textShadow" : "2px 2px white", fontWeight: "bolder" }}>
          <h5>LAWSAVIC INVESTMENT LIMITED</h5>
          <p>
            Money cant buy you happiness, let it buy you a Home!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>







<Row> 

<div id='about' style={{ textAlign: "center"}}>
      <h1>
        ALLOW US TO INTRODUCE OURSELVES...
      </h1>
      <p > No matter who you are or where you are, instinct tells you to go home! </p>
    </div>

</Row>


<Container>
<Row>

<Col className='col'>
  <h1> Who Are We?</h1>
<p> Lawsavic Investments Limited is a locally recognised, leading and independent, real estate Company, It is also the countys  fastest growing real estate company. We Offer a full spectrum of property services.We also fulfill a wide range of real estate needs, including: property management, agency, valuation, project management as well as General, feasibility and research-led consultancy.  </p>



</Col>



<Col className='col'>
<h1> What Exactly Do We Do?</h1>
<p> We mostly have partnered with local property managers, agents and landlords in various neighborhoods to ensure vacancies are verified before being listed.Get motivated for your next home search with the assuarance that what is advertised is exactly what is on offer.  </p>
<p> We help you avoid treacherous deals by confirming and approving all the listings in this website. Our real time listings provide you with properties that are are actually available when you need them. Lawsavic Investments Limited is available anywhere, anytime and on any device.  </p>

  
</Col>


</Row>

</Container>

    
    
    </>
    
    


    
  );
}

export default DarkVariantExample;