import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/` + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:3000/users/' + id, values)
      .then((res) => navigate('/'))
      .catch((err) => console.log(err));
  }
  

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2> Update User</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              name='name'
              className='form-control'
              placeholder='Enter Name'
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              name='email'
              className='form-control'
              placeholder='Enter Email'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number">Phone:</label>
            <input
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              type="number"
              name='number'
              className='form-control'
              placeholder='Enter Phone'
            />
          </div>
          <button className='btn btn-success'>Update</button>
          <NavLink to="/" className="btn btn-primary ms-3">Back</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Update;
