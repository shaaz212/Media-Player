import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'


function Watchhistory() {

  const [watchHistory,setwatchHistory] = useState([])
  

  const getwatchHistory = async ()=>{
    // make api call
    const {data} = await getHistory()
    setwatchHistory(data);
  }

  useEffect(()=>{
    getwatchHistory()
  },[])

  // delete a history
  const removeHistory = async (id)=>{
    await deleteHistory(id)
    // get get watch history
    getwatchHistory()
  }


  return (
    <>
      <div className="container d-flex justify-content-between  mt-5 mb-5  align-items-center  ">
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'18px'}}><i className='fa-solid fa-arrow-left me-2'></i> Back to Home</Link>
      </div>
      <div className="container  mt-5 mb-5">
        <table className='table rounded shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                watchHistory.length>0?
                watchHistory.map((items)=>(
                  <tr>  
                  <td>{items?.id}</td>
                  <td>{items?.caption}</td>
                  <td><a href={items?.embbedLink} target='_blank'>{items?.embbedLink}</a></td>
                  <td>{items?.timeStamp}</td>
                  <td><button onClick={()=>removeHistory(items?.id)} className="btn text-danger"><i className='fa-solid fa-trash fs-6'></i></button></td>
                </tr>
                ))
                :<p>"Nothing to display"</p>
                
              }
          </tbody>
        </table>
      </div>    
    </>
  )
}

export default Watchhistory