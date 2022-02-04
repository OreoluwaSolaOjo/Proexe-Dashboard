import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";
import forms from './EditForm.module.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  let history = useHistory();
  let dispatch = useDispatch();
  const { name, email } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please input all input Field");
    } else {
      dispatch(updateUser(state, id));
      console.log(id)
      history.push("/");
      setError("");
    }
  };
  return (
    <div>
      <Container>
        <h1 className={forms.dashboard}>Dashboard</h1>

        <Container className={forms.Containerr}>

          <Container fluid className={forms.Containerr2}>
            <h3>Form</h3>
          </Container>
          <Container className={forms.BigMainContainer}>
            <div className={forms.create}>
              <form onSubmit={handleSubmit}>
                <Row className={forms.formrow}>
                  <Col>
                    <label className={forms.label}>Name:</label>

                  </Col>
                  <Col sm="8">

                    <input name="name"

                      label="Name"
                      value={name || ""}

                      type="text"
                      onChange={handleInputChange}
                    />
                  </Col>
                  {error && <h3 className={forms.errorstyles}>{error}</h3>}
                </Row>
                <Row className={forms.formrow}>
                  <Col>
                    <label className={forms.label} >Email:</label>

                  </Col>
                  <Col sm="8">

                    <input
                      id="standard-basic" name="email"
                      label="Email"
                      value={email || ""}
                      type="email"
                      onChange={handleInputChange} />
                  </Col>
                </Row>

                <Button type="submit" className={forms.submitButton1} type="submit"
                  onChange={handleInputChange}>
                  Submit
                </Button>
                <Link to="/"> <Button variant="outline-danger" className={forms.submitButton}>Cancel</Button></Link>
              </form>

            </div>

          </Container>
        </Container>
      </Container>
    </div >
  );
};

export default EditUser;
