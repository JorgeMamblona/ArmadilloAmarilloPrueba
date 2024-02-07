import { Link } from 'react-router-dom'

import { Container, Nav, Navbar } from 'react-bootstrap'

const NavegationHor = () => {

    return (
        <>
            <Navbar className='custom-nav-hor  ' data-bs-theme="dark">
                <Container>
                    <div className='d-flex'>
                        <Nav className="me-auto">
                            <Link to={'/log-in'} >Login</Link>
                            <Link to={'/sign-up'} >Sign up</Link>
                            <Link to={'/nowPlaying'} >Now Playing</Link>
                            <Link to={'/Popular'} >Popular</Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavegationHor