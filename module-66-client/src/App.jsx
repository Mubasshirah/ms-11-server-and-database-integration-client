import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users,setUsers]=useState([]);
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[]);
const handleSubmit=event=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const user={name,email};
  console.log(user);
  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)

  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  const newUser=[...users,data];
  setUsers(newUser);
  form.reset();
  })
}
  return (
    
      <div>
      <h1>Users management</h1>
      <p>number of users: {users.length}</p>
    {
      users.map(user=><p key={user.id}>name:{user.name}  email:{user.email}</p>)
    }
    <form onSubmit={handleSubmit}>
     <div><input type="text" name="name" id="" /></div> 
     <div> <input type="email" name="email" id="" /></div>
     <div> <input type="submit" value="submit" /></div>
    </form>
      </div>
      
    
  )
}

export default App
