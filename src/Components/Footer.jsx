import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',height:'300px'}}>
      <div className="footer d-flex  justify-content-evenly w-100">
        <div style={{width:'400px'}} className="website">
        <h4>
          <i className="fa-solid fa-cloud-arrow-up fa-flip" style={{color:'#1167b1'}}></i>{' '}
          <span style={{color:'#E75480'}}>Media Player</span>
        </h4>
        <h6>Designed and built with all the love in the world by the Media Player team with the help of our contributors</h6>
        <h6>Code licensed MIT,docs CC BY 3.0</h6>
        <p>Currently v5.3.2</p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Contact Us</h4>
          <div>
            <Form className='d-flex justify-content-evenly'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Email Id" />
              </Form.Group>
              <Button className='ms-2' variant="primary" type="submit" style={{backgroundColor:"#1167b1",height:"2.2rem"}}>
                <i className="fa-solid fa-arrow-right" style={{color:'white'}}></i>
              </Button>
            </Form>
          </div>
          <div className='fs-5'>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></Link>
            <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></Link>
          </div>
        </div>

      </div>
      <p>Copyright @ 2023 <i className="fa-solid fa-cloud-arrow-up fa-flip"></i> Media Player , Built with React</p>
    </div>
  )
}

export default Footer