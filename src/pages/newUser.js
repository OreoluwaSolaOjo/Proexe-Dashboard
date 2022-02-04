import { addUser } from "../redux/actions";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import forms from './EditForm.module.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddUser = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        username: "",
        website: "",
    });
    const [error, setError] = useState("");

    let history = useHistory();
    let dispatch = useDispatch();
    const { name, email, username, website } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !username || !email || !website) {
            setError("Please input all input Field");
        } else {
            dispatch(addUser(state));
            history.push("/");
            setError("");
        }
    };
    return (
        <div>


            <h2>Add New User</h2>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
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
                                    <label className={forms.label} >Username:</label>

                                </Col>
                                <Col sm="8">

                                    <input
                                        id="standard-basic" name="username"
                                        label="username"
                                        value={username || ""}
                                        type="text"
                                        onChange={handleInputChange} />
                                </Col>
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
                            <Row className={forms.formrow}>
                                <Col>
                                    <label className={forms.label} >Website:</label>

                                </Col>
                                <Col sm="8">

                                    <input
                                        id="standard-basic" name="website"
                                        label="website"
                                        value={website || ""}
                                        type="text"
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>

                            <Button variant="primary" type="submit" className={forms.submitButton} type="submit"
                                onChange={handleInputChange}>
                                Submit
                            </Button>
                            <Link to="/"> <Button variant="outline-danger" className={forms.submitButton}>Cancel</Button></Link>
                        </form>

                    </div>

                </Container>
            </Container>

        </div>
    );
};

export default AddUser;
