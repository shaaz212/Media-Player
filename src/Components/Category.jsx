import React,{ useEffect, useState } from 'react'
import { Modal,Button,Form, Row, Col } from 'react-bootstrap';
import { addCategory, deleteCategory, getALLCategory, getAVideos, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {

  const[CategoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);
  const[categories,setCategories] = useState([])



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // insert category
  const insertCategory = async ()=>{
    if (CategoryName) {
      const body = {
        CategoryName,allVideos:[]
      }
      // make api call
      const response = await addCategory(body)
      console.log(response);
      if (response.status>=200 && response.status<300) {
        // reset state
        setCategoryName("")
        // modal hide
        handleClose()
        // call getcategories
        getCategories()
        // toast
        toast.success('Created Succesfully !!!')
        }else{
          toast.error('Network error')
        }
    }else{
      toast.info('fill the form !!!')
    }
  }

  // get category
  const getCategories = async ()=>{
    const {data} = await getALLCategory()
    setCategories(data)
  }

  // delete Category
  const removeCategory = async (id)=>{
    // make api call
    await deleteCategory(id)

    // get getCategories
    getCategories()
  }

  useEffect(()=>{
    getCategories()
  },[])

  // drag over
  const dragOverCategory = (e)=>{
    console.log("Drag overing");
    e.preventDefault()
  }

  // drag drop
  const videoDrop = async(e,categoryId)=>{
    console.log("Inside drop function");
    console.log(`Category Id : ${categoryId}`);
    const videoCardId = e.dataTransfer.getData("cardId")
    console.log(`Video Card Id : ${videoCardId}`);
    // get video details
    const {data} = await getAVideos(videoCardId)
    console.log(data);
    // data entering
    const selectedCategory = categories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }



  return (
    <>
      <div className="d-grid">
        <button className="btn" onClick={handleShow} style={{backgroundColor:'#AF005F'}}>Add New Category</button>
      </div>
      {
          categories?categories.map(items=>(
            <div className="border p-3 mt-3 mb-3" droppable onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDrop(e,items?.id)}>
              <div className="d-flex justify-content-between">
                <h5>{items.CategoryName}</h5>
                <button onClick={()=>removeCategory(items?.id)} className='btn'>
                  <i className='fa-solid fa-trash text-danger'></i>
                </button>
              </div>
              <hr />
              <Row>
                {
                  items?.allVideos&&items.allVideos.map(card=>(
                    <Col sm={12}>
                      <VideoCard displayData={card} insideCategory={true}/>
                    </Col>
                  ))
                }
              </Row>
            </div>
          )):""
      }
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">Add</Button>
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

export default Category