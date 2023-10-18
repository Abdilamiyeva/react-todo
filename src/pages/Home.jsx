import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
function Home() {
  const [data, setData ] = useState([])
  const navigate = useNavigate()
  useEffect(() =>{
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch( (err => console.log(err)) )
  },[])
  const handleDelete = (id) =>{

    const confirm = window.confirm( "Delete")
    if(confirm){
      axios.delete('http://localhost:3000/users/' + id)
      .then(res => {
        location.reload()
      }).catch( err => console.log(err))
      
    }
  }
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center  vh-100">
  
      <div className="w-75 rounded bg-white border shadow p-4 ">
      <div className="d-flex justify-content-end ">
          <NavLink to="/create" className="btn btn-success">Add +</NavLink>
          </div>
        <table className="table table-stripend ">
          
          <thead>
              <tr>
                <th>ID </th>
                <th>Name </th>
                <th>Email </th>
                <th>Phone </th>
                <th>Action </th>
              </tr>
          </thead>
          <tbody>
            {
              data.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <NavLink to={`/read/${user.id}`} className="btn btn-sm btn-info me-2">Read</NavLink>
                    <NavLink to={`/update/${user.id}`} className="btn btn-sm btn-primary me-2">Edit</NavLink>
                    <button onClick={ (e)=> handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
  
}

export default Home