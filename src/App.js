import React from 'react';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, deleteStudent, updateStudent } from './features/Student';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const emailState = {
  email: '',
  error: ''
}

function App() {

  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.student.value)

  const [first_name, setFirst_name] = useState("");
  const [new_first_name, setNew_First_name] = useState("");

  const [last_name, setLast_name] = useState("");
  const [father_name, setFather_name] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [country, setCountry] = useState("");

  return (

    <div className="App">
      {""}
      <div className='addStudent'>
        <h1>Student Registration Form</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstName" onChange={(event) => { setFirst_name(event.target.value); }}>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName" onChange={(event) => { setLast_name(event.target.value); }}>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFatherName" onChange={(event) => { setFather_name(event.target.value); }}>
            <Form.Control type="text" placeholder="Father Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFEmail"
            onChange={(event) => { setEmail(event.target.value); }}>
            <Form.Control type="email" placeholder="Email ID"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Address" onChange={(event) => { setAddress(event.target.value); }}>
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMobile" onChange={(event) => { setMobile_no(event.target.value); }}>
            <Form.Control type="text" placeholder="Mobile Number" />
          </Form.Group>
          {['radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3" onChange={(event) => { setGender(event.target.value); }}>
              <p>Gender</p>
              <Form.Check
                type={type}
                id={`male-${type}`}
                label={`Male`}
              />
              <Form.Check
                type={type}
                id={`female-${type}`}
                label={`Female`}
              />
            </div>
          ))}
          <Form.Group className="mb-3" controlId="dob" onChange={(event) => { setDOB(event.target.value); }}>
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
          </Form.Group>
          <Form.Select className="mb-3" aria-label="Country" onChange={(event) => { setCountry(event.target.value); }} >
            <option>Country</option>
            <option value="India">India</option>
            <option value="UnitedState">UnitedState</option>
            <option value="South AfricaSouth Africa">South Africa</option>
            <option value="Russia">Russia</option>
          </Form.Select>
          <Button variant="primary" onClick={() => {
            dispatch(addStudent({
              id: studentList[studentList.length - 1].id + 1, first_name, last_name,
              father_name, email, mobile_no, dob, gender, address, country
            }));
          }
          }>
            Add Student
          </Button>
        </Form>

      </div>
      <div className='displayStudent'>
        {studentList.map((student) => {
          return (
            <Table className="mt-3" striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Father Name</th>
                  <th>Email ID</th>
                  <th>Address</th>
                  <th>Mobile No</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{student.id}</td>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.father_name}</td>
                  <td>{student.email}</td>
                  <td>{student.address}</td>
                  <td>{student.mobile_no}</td>
                  <td>{student.gender}</td>
                  <td>{student.dob}</td>
                  <td>{student.country}</td>
                </tr>
              </tbody>
              <div>
                <h3>Update Table Values</h3>
                <input type="text" placeholder='New First Name' onChange={(event) => { setNew_First_name(event.target.value); }} />
                {/* <input type="text" placeholder='New Last Name' onChange={(event) => { setNew_First_name(event.target.value); }} /> */}
                {/* <input type="text" placeholder='New Father Name' onChange={(event) => { setNew_First_name(event.target.value); }} /> */}

              </div>
              <Button variant="danger" onClick={() => {
                dispatch(deleteStudent({ id: student.id }));
              }
              }>
                Delete Student
              </Button>
              <Button variant="primary" onClick={() => {
                dispatch(updateStudent({ id: student.id, first_name: new_first_name }));
              }
              }>
                Update Student
              </Button>
            </Table>


          );
        })}
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div >
  );
}



export default App;
