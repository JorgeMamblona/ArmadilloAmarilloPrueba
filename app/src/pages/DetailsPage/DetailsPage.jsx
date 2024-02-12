import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Container, Row } from "react-bootstrap"

import moviesService from "../../services/movies.services"

import CastCard from "../../components/CastCard/CastCard"

const DetailsPage = () => {

    const [film, setFilm] = useState()
    const { id } = useParams()

    const loadFilm = () => {
        moviesService
            .getDetails(id)
            .then(({ data }) => setFilm(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadFilm()
    }, [])

    return (
        <>
            {
                !film ?
                    <h1>Loading...</h1>
                    :
                    <Container>
                        <h1 style={{ textAlign: 'center', borderBottom: '2px solid midnightblue', padding: '5px' }}>Reparto</h1>
                        <Row>
                            {
                                film.cast.map(elm => <CastCard key={elm.id} {...elm} />)
                            }
                        </Row>
                    </Container >
            }
        </>
    )
}

export default DetailsPage
