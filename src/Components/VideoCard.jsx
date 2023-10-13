import React,{ useState } from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideos } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  // add video to wacth history
  const handleShow = async() => {
    setShow(true)
    // get timeStamp of playing video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',}).format(today)
    const {caption,embbedLink}= displayData
    // videoHistory
    const videoHistory = {
      caption,embbedLink,timeStamp
    }
    // make api call
    await addToHistory(videoHistory)
  }



  // deleting a video
  const removeVideo = async (id)=>{
    // make api call
    const response =await deleteAVideos(id)
    setDeleteVideoStatus(true)
  }

  // drag start
  const dragStarted = (e,id)=>{
    console.log("Drag Started");
    e.dataTransfer.setData("cardId",id)
  }

  

  return (
 <>
      {
        displayData &&
        <Card style={{width:'100%',height:"95%"}} className='mb-3' draggable onDragStart={(e)=>{dragStarted(e,displayData?.id)}}>
        <Card.Img onClick={handleShow}  variant="top" style={{width:'100%',height:"150px"}} src={displayData?.url} />
        <Card.Body>
          <Card.Title  className=' d-flex justify-content-between align-items-center'>
            <h5>{displayData?.caption}</h5>
            {
              insideCategory?"":
              <button onClick={()=>removeVideo(displayData?.id)}  className="btn text-danger"><i className='fa-solid fa-trash fs-6'></i></button>
            }
          </Card.Title>
        </Card.Body>
      </Card>
      }
      {/* Modal */}
      <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>{displayData?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width={"100%"} height={"400px"} src={`${displayData.embbedLink}?autoplay=1`} title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Modal.Body>

        </Modal>
 </>

  )
}

export default VideoCard