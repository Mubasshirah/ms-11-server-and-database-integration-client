
import './App.css'

function App() {
  const handleOnSubmit=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(user);
  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(user),
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      alert('user has been added');
      form.reset();
    }
  })
  }

  return (
    <>
     
      <h1>Simple CRUD</h1>
      <form onSubmit={handleOnSubmit}>
     <div> <input type="text" name="name" id="" /></div>
      <div><input type="email" name="email" id="" /></div>
      <div><input type="submit" value="submit" /></div>
      </form>
    </>
  )
}

export default App
