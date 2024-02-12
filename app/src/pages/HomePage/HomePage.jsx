import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import LoginForm from "../../components/LoginForm/LoginForm"
import SignupForm from '../../components/SignupForm/SignupForm'

const HomePage = () => {

    return (
        <Container>

            <Row className="justify-content-md-center">
                <Col md={{ span: 12 }} style={{ textAlign: 'center' }}>
                    <h1>Bienvenido/a a Armadillo Cines</h1>
                </Col>
                <Col md={{ span: 4 }} style={{ border: 'solid midnightblue', borderRadius: '25px', backgroundColor: 'lightblue', padding: '50px', margin: '20px' }}>
                    <h2>Log in</h2>
                    <LoginForm />
                </Col>
                <Col md={{ span: 4 }} style={{ border: 'solid midnightblue', borderRadius: '25px', backgroundColor: 'lightblue', padding: '50px', margin: '20px' }}>
                    <h2>Sign up </h2>
                    <SignupForm />
                </Col>
            </Row>
        </Container >
    )
}

export default HomePage