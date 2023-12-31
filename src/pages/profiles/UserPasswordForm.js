import React, { useEffect, useState } from 'react'
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { axiosRes } from '../../api/axiosDefaults';


function UserPasswordForm({onCancel}) {
    const history = useHistory();
    const {id} = useParams();
    const currentUser = useCurrentUser();
    const [successMessage, setSuccessMessage] = useState("");

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });

    const {new_password1, new_password2} = userData;
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    }

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/");
          }
        }, [currentUser, history, id]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData)
            setSuccessMessage("Password updated Successfully");
            setErrors({});
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
          }
    }

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
            >
              save
            </Button>
            {successMessage && (
              <Alert variant="success">
                {successMessage}
              </Alert>
            )}
          </Form>
        </Container>
      </Col>
    </Row>
  );
};


export default UserPasswordForm