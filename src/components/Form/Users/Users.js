import React from "react";
import { useState, useEffect } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [getData, setGetData] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://ahmadkabiri-be918-default-rtdb.firebaseio.com/users.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(Object.entries(data));
      });

    // setUsers([
    //     [1,{firstName : "Ahmad" , lastName:'Kabiri' , email:'Ahmadkabiriw@gmail.com'}],
    //     [2,{firstName : "Ali" , lastName:'mafi' , email:'alimafi.12@gmail.com'}],
    //     [3,{firstName : "Amir" , lastName:'asadnia' , email:'aasadnia76@gmail.com'}],
    //     [4,{firstName : "akbar" , lastName:'Kabiri' , email:'kabiriAkbar@gmail.com'}],
    //     [4,{firstName : "alireza" , lastName:'bastan' , email:'alirezabastan81@gmail.com'}],

    // ])
  }, [getData]);

  useEffect(() => {

    let mainUserInfo = users.find(user => user[0]===userID)

    if(mainUserInfo) {
      setFirstName(mainUserInfo[1].firstName)
      setLastName(mainUserInfo[1].lastName)
      setEmail(mainUserInfo[1].email)

    }

  }, [userID]);

  const removeHandler = async () => {
    console.log("user remove");
    await fetch(
      `https://ahmadkabiri-be918-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => console.log(response));

    setShowDeleteModal(false);
    setGetData((prev) => !prev);
  };

  const editHandler = async () => {
    let userNewInfos = {
      firstName,
      lastName,
      email,
    };

    await fetch(
      `https://ahmadkabiri-be918-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "PUT",
        body: JSON.stringify(userNewInfos),
      }
    ).then((resopnse) => console.log(resopnse));

    setShowEditModal(false);
    setGetData((prev) => !prev);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{user[1].firstName}</td>
              <td>{user[1].lastName}</td>
              <td>{user[1].email}</td>
              <td style={{ display: "felx", justifyContent: "space-evenly" }}>
                <AiFillDelete
                  onClick={() => {
                    setShowDeleteModal(true);
                    setUserID(user[0]);
                    console.log(userID);
                  }}
                  style={{ cursor: "pointer" }}
                ></AiFillDelete>
                <AiFillEdit
                  onClick={() => {
                    setShowEditModal(true);
                    setUserID(user[0]);
                  }}
                  style={{ cursor: "pointer" }}
                ></AiFillEdit>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Delete Modal */}
      <Modal
        show={showDeleteModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Confirm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>Are You sure to delete this user ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowDeleteModal(false)}>Close</Button>
          <Button onClick={() => removeHandler()}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal
        show={showEditModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>FirstName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FirstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>LastName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowEditModal(false)}>Close</Button>
          <Button onClick={() => editHandler()}>Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
