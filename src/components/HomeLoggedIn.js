import React from 'react'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import appStyles from "../App.module.css";
import styles from "../styles/HomeLoggedInOut.module.css"

const HomeLoggedIn = ({ userProfile, incompleteTaskCount, urgentTaskCount }) => {
  return (
<Row className={styles.Row}>
    <Col className="my-auto p-0 p-md-500" lg={6}>
        <Container className={`${appStyles.Content} p-4 `}>
            <div>
                <h1>Welcome back! {userProfile?.owner}</h1>
            </div>
        </Container>
    </Col>
    <Col className="my-auto p-0 p-md-2" lg={6}>
        <Container className={`${appStyles.Content} p-4 `}>
        <p>You have {incompleteTaskCount} tasks not completed.</p>
        <p>You have {urgentTaskCount} urgent tasks.</p>
        </Container>
    </Col>
</Row>
  )
}

export default HomeLoggedIn