import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser=useLoaderData()
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const user={name,email};
        console.log(user);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            <h1>information of {loadedUser.name}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <input type="email" name="email" id="" defaultValue={loadedUser ?.email}/>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;