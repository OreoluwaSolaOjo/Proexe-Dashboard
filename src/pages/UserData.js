import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserList from "./Users.module.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    console.log("id", id);
    if (window.confirm("Are you sure wanted to delete the user ?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div>
      <Container >
        <h1 className={UserList.dashboard}>Dashboard</h1>
        <Container className={UserList.Containerr}>

          <Row className={UserList.RowTitle}>
            <Col>
              <h2 className={UserList.userlist}>User List</h2>
            </Col>
            <Col >
              <Link to="/adduser"><Button variant="primary" className={UserList.UserListButton} >Add </Button></Link>

            </Col>
          </Row >
          <Container fluid className={UserList.BigMainContainer}>
            <Container fluid className={UserList.MainContainer}>
              <Row className={UserList.RowTitle1}>
                <Col>
                  <h4>Id</h4>
                </Col>
                <Col >
                  <h4>Name</h4>
                </Col>
                <Col >
                  <h4>Username</h4>
                </Col>
                <Col>
                  <h4>Email</h4>
                </Col>
                <Col >
                  <h4>Website</h4>
                </Col>
                <Col >
                  <h4>Edit</h4>
                </Col>
                <Col >
                  <h4>Delete</h4>
                </Col>
              </Row>

              {users &&
                users.map((user) => (
                  <Row className={UserList.RowTitle3}>
                    <Col className={UserList.column}>
                      <h4>{user.id}</h4>
                    </Col>
                    <Col className={UserList.column}>
                      <h4>{user.name}</h4>
                    </Col>
                    <Col className={UserList.column}>
                      <h4>{user.username}</h4>
                    </Col>
                    <Col className={UserList.column}>
                      <h4>{user.email}</h4>
                    </Col>
                    <Col className={UserList.column}>
                      <h4>{user.website}</h4>
                    </Col>
                    <Col >
                      <Button variant="warning" className={UserList.userbutton} onClick={() => history.push(`/editUser/${user.id}`)}>Edit</Button>
                    </Col>
                    <Col >
                      <Button variant="danger" className={UserList.userbutton} onClick={() => handleDelete(user.id)}>Delete</Button>
                    </Col>
                  </Row>
                ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </div >)
};

export default Home;
