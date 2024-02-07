import authService from "../../services/auth.services"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Form, Button } from "react-bootstrap"

const SignupForm = () => {

    const navigate = useNavigate()

    const [formData, setformData] = useState({

        email: '',
        password: '',
        name: '',
        surname: '',
        birthDate: '',
    })

    const [errors, setErrors] = useState([])

    const handleInputChange = e => {

        const { value, name } = e.target

        setformData({ ...formData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .signup(formData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={formData.email} onChange={handleInputChange} name='email' placeholder="Email" />

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>name</Form.Label>
                <Form.Control type="text" value={formData.name} onChange={handleInputChange} name='name' placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>surname</Form.Label>
                <Form.Control type="text" value={formData.surname} onChange={handleInputChange} name='surname' placeholder="Surname" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formData.password} onChange={handleInputChange} name='password' placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type="text" value={formData.birthDate} onChange={handleInputChange} name='birthDate' placeholder="dd/mm/aaaa" />
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form >
    )
}

export default SignupForm