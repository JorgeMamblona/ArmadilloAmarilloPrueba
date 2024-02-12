import { Link, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import { AuthContext } from '../../contexts/auth.context'


import { Container, Nav, Navbar } from 'react-bootstrap'

const Navegation = () => {

    const { loggedUser, logout } = useContext(AuthContext)

    const doLogout = () => {
        logout()
        Navigate("/log-in")
    }

    return (

        <Navbar style={{ backgroundColor: 'midnightblue', marginBottom: '15px' }} >
            <Container>
                <Navbar.Brand style={{ color: 'NavajoWhite' }}>Armadillo Cines</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        loggedUser ?
                            <Link style={{ color: 'white', margin: '10px', textDecoration: 'none' }} onClick={doLogout} >Log out</Link>
                            :
                            <>
                                <Link style={{ color: 'white', margin: '10px', textDecoration: 'none' }} to={'/log-in'} >Log in</Link>
                                <Link style={{ color: 'white', margin: '10px', textDecoration: 'none' }} to={'/sign-up'} >Registro</Link>
                            </>
                    }
                    <Link style={{ color: 'white', margin: '10px', textDecoration: 'none' }} to={'/nowPlaying'} >Now Playing</Link>
                    <Link style={{ color: 'white', margin: '10px', textDecoration: 'none' }} to={'/Popular'} >Populares</Link>
                </Nav>
            </Container>
        </Navbar >

    )
}

export default Navegation