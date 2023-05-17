import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers)
    const handleDelete= _id =>{
         console.log('deleted',_id);
         fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE',
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining=users.filter(user=>user._id!==_id);
                setUsers(remaining);
            }
         })
    }
   
    return (
        <div>
            <h1>{users.length}</h1>
            {
                users.map(user=><p key={user._id}>{user.name} {user.email}
                <button onClick={()=>handleDelete(user._id)}>x</button>
               <Link to={`/update/${user._id}`}> <button >Update</button></Link>
                </p>)
            }
        </div>
    );
};

export default Users;