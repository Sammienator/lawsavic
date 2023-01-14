import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (

    <>
        <div id='footer' style={{textAlign: "center"}}>
        Lawsavic Investment Limited  2023 &copy;Copyright
    </div>



    <div style={{float:"right" , display:"flex", margin:"10px"}}>
    <FontAwesomeIcon icon={faFacebook} /> 
             <FontAwesomeIcon icon={faGithub} /> 
           <FontAwesomeIcon icon={faInstagram} />  
             <FontAwesomeIcon icon={faTwitter} /> 
    </div>

    </>

 
  )
}

export default Footer