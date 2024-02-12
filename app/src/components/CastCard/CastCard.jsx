import { Card, Col } from 'react-bootstrap'

import defaultImage from './../../assets/defaultProfile.jpg'

import './CastCard.css'

const CastCard = ({ name, profile_path }) => {

    const image = `http://image.tmdb.org/t/p/w500/${profile_path}`

    return (
        <Col md={{ span: 2 }} className="mb-3">
            <Card className='castCard'>
                <Card.Img className='castCardImage' variant="top" src={!profile_path ? defaultImage : image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CastCard