import React ,{ useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setUploadVideoServerResponse}) {

  const [video,setVideo] = useState({
    id:"",caption:"",url:"",embbedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractLink = (e) =>{
    const {value} = e.target
    console.log(value);
    if (value) {
      const embbedlink = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embbedLink:embbedlink})
    }else{
      setVideo({...video,embbedLink:"embbedlink"})
    }
  }

  const handleUpload = async() =>{
    const{id,caption,url,embbedLink} = video
    console.log(video);
    if (!id || !caption || !url || !embbedLink) {
      toast.warning("Please Fill")
    } else {
      // make api call
    const response = await uploadVideo(video)

    if (response.status>=200 && response.status<300) {
      // reset state
      setVideo({
        id:"",caption:"",url:"",embbedLink:""
      })
      // set server response
      setUploadVideoServerResponse(response.data)
      // modal close
      handleClose()
      // toast
      toast.success(`${response.data.caption} is uploaded successfully`)
    }else {
      toast.error("Network error !!!")
    }
  }
  }
  

  // console.log(video);

  return (
    <>

      <div className='d-flex  align-items-center'>
        <h5>Upload New Video</h5>
        <button className='btn'  onClick={handleShow}><i className="fa-solid fa-circle-plus fs-3"></i></button>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={extractLink}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />


    </>
   
  )
}

export default Add