import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Landingpage() {
  return (
    <>
      <div className="landingPage d-flex w-100 align-items-center justify-content-center " style={{marginTop:'10rem'}}>
        <div className="content" style={{width:'510px',marginRight:'10rem'}}>
          <h3>Welcome to <span style={{color:'#E75480'}}>Media Player</span></h3>
          <p className='mt-3'><b>Where user can manage their favourite videos</b>.User can upload any youtube videos by copy and paste their URL.MediaPlayer.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop.it's free,try it now!</p>
          <Link to={'/home'}><button className='btn btn-success fw-bold mt-4'>Click  to Explore </button></Link>
        </div>
        <div className="img">
          <img style={{width:'350px',height:'350px',marginLeft:'3rem'}} src="https://th.bing.com/th/id/R.dea520e4e989290a7af9ed33916cb6f9?rik=PyKMgqF9gpBrkQ&riu=http%3a%2f%2fcdn.lowgif.com%2fmedium%2ffdb4fa15c04011dd-.gif&ehk=%2b4wII5EojW7UmUX%2ffkh9XxwXE2voW7RRzudwWNMWy4Q%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
      </div>
      <div className='container  mb-5 d-flex flex-column justify-content-center align-items-center' style={{marginTop:'14rem'}} >
        <h3>Features</h3>
        <div className="features mt-5 mb-5 d-flex justify-content-between w-100">
          {/* card 1 */}
        <Card className='p-4 shadow' style={{ width: '18rem' }}>
          <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://33.media.tumblr.com/4d0d5dfc49425373a79d0b6c2e27e73a/tumblr_nfhphmChc11skvzlmo1_500.gif" />
          <Card.Body className='mt-4'>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text className='mt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* card 2 */}
        <Card className='p-4 shadow' style={{ width: '18rem' }}>
          <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://i.pinimg.com/originals/60/a6/37/60a6370c7eb20418d83e930fd3dc19d7.gif" />
          <Card.Body className='mt-4'>
            <Card.Title style={{width:'14rem'}}>Categories Videos</Card.Title>
            <Card.Text className='mt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* card 3 */}
        <Card className='p-4 shadow' style={{ width: '18rem' }}>
          <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://cdn.dribbble.com/users/348324/screenshots/1755160/music.gif" />
          <Card.Body className='mt-4'>
            <Card.Title>Watch History</Card.Title>
            <Card.Text className='mt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
      <div className='container border rounded p-5 border-secondory shadow mt-5 mb-5 d-flex justify-content-between align-items-center'> 
        <div className="content">
          <h4 className='text-warning mb-5'>Simple, Fast and Powerful</h4>
          <h6><span className='fs-5 me-3' >Play Everything : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis tempora .</h6>
          <h6><span className='fs-5 me-3'>Categories Videos : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis tempora .</h6>
          <h6><span className='fs-5 me-3'>Managing History : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur omnis tempora .</h6>
        </div>
        <div className="video ms-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=tHo0eVxjfw0TWQ44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landingpage