import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar style={{backgroundColor:'#AF005F'}}>
    <Container>
      <Navbar.Brand  className=' fw-bolder fs-4'>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
      <i className="fa-solid fa-cloud-arrow-up fa-flip" style={{color:'#1167b1'}}></i>{' '}
          Media Player
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header