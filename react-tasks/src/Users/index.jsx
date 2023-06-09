import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'
const Users = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setUsers(data)
        })
    },[])//mount
    useEffect(()=>{
        console.log("user deyisdi");
    },[users])//update
  return (
   <>
    {
        users.map((user)=>{
            return(
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    <hr />
                </div>
            )
        })
    }
   </>
  )
}

export default Users