import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-8" md={10}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          
        <Form>
        <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
            className={styles.Input}
            type="text" 
            placeholder="Username" 
            name ="username"/>
        </Form.Group>

        <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
            className={styles.Input}
            type="password" 
            placeholder="Password" 
            name="password1"/>
        </Form.Group>

        <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm password</Form.Label>
            <Form.Control
            className={styles.Input} 
            type="password" 
            placeholder="Confirm password" 
            name="password2"/>
        </Form.Group>


        <Button 
         className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
         type="submit">
            Sign Up
        </Button>
        </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/login">
            Already have an account? <span>Login</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;