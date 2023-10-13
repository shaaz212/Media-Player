import { BASE_URL } from './baseURL';
import { commonAPI } from './commonAPI';

// uploading video
export const uploadVideo = async(video)=>{
    //  post request to http://localhost:4000/videos for adding video in json server and return response to Add component
    return await commonAPI("POST",`${BASE_URL}/videos`,video)
}


// get all videos from json server
export const getAllVideos =  async()=>{
//  post request to http://localhost:4000/videos for getting video in json server and return response to View component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}


//get a single from json server 
export const getAVideos =  async(id)=>{
//  post request to http://localhost:4000/videos for getting video in json server and return response to VideoCAed component
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
}


//delete a single from json server 
export const deleteAVideos =  async(id)=>{
//  post request to http://localhost:4000/videos for delete video in json server and return response to VideoCAed component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}


// Insert video in watch history
export const addToHistory = async(videoHistory)=>{
// Post request to http://localhost:4000/history for adding video from json server and response to videocard compnent
    return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}


// get video from watch history
export const getHistory = async()=>{
// Get request from http://localhost:4000/history to get video from json server and response to watchhistory compnent
    return await commonAPI("GET",`${BASE_URL}/history`,"")
}


// delete a history from watch history
export const deleteHistory = async(id)=>{
//  post request to http://localhost:4000/history for delete history in json server and return response to watch-history component
    return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}


//Adding Category
export const addCategory = async(body)=>{
    //  post request to http://localhost:4000/categories for adding category in json server and return response to Category component
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}


//Get all Category
export const getALLCategory = async()=>{
    //  post request to http://localhost:4000/categories for getting videos category in json server and return response to Category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// delete a Category from Category component
export const deleteCategory = async(id)=>{
    //  post request to http://localhost:4000/categories for delete category in json server and return response to category component
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// upddate a Category from Category component
export const updateCategory = async(id,updatedCategory)=>{
    //  hhtp put request to http://localhost:4000/categories/id for updating existing category in json server and return response to watch-history component
    return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,updatedCategory)
}

