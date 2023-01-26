import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (

    <>


<div id='footer' style={{textAlign: "center" , marginTop: "40px"}}>
        Lawsavic Investment Limited  2023 &copy;Copyright
    </div>



     <div style={{textAlign: "center" , padding: "20px"}}> 
      <p> The Sammienator INC 2023 &copy; </p> 
     </div>
  

    



    <div id='social' style={{textAlign:"center" , display:"inline-flex", alignItems:"center",   marginLeft:"45%"}}>
       <p href="https://www.facebook.com/home.php" style={{padding: "10px"}}> <FontAwesomeIcon icon={faFacebook} />  </p>  
  
    <p style={{padding: "10px"}}><FontAwesomeIcon icon={faGithub} />  </p>         
    <p style={{padding: "10px"}}><FontAwesomeIcon icon={faInstagram} />  </p>        
      <p style={{padding: "10px"}}> <FontAwesomeIcon icon={faTwitter} /> </p>       
    </div>





    </>

 
  )
}

export default Footer