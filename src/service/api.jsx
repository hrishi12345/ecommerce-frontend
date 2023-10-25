import axios from 'axios'

const url='http://localhost:3004'
export const addUser=async(data)=>{
    try{
       const response=await axios.post(`${url}/user/addUser`,data)
       return response
    }catch(error){
        console.log(error.message)
    }
}