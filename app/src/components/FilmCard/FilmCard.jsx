import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './FilmCard.css'

const TaskCard = ({ id, title, poster_path }) => {

    const poster = `http://image.tmdb.org/t/p/w500/${poster_path}`

    return (
        <Col md={{ span: 2 }} className="mb-3">
            <Link style={{ textDecoration: 'none' }} to={`/details/${id}`}>
                <Card className='movieCard'>
                    <Card.Img className='movieCardImage' variant="top" src={poster} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default TaskCard