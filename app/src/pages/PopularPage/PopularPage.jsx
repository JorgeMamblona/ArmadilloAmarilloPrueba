import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"

import moviesService from "../../services/movies.services"

import FilmCard from '../../components/FilmCard/FilmCard'

const PopularPage = () => {

    const [popular, setPopular] = useState()

    const loadPopular = () => {
        moviesService
            .getPopular()
            .then(({ data }) => setPopular(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadPopular()
    }, [])

    return (

        <Container>
            <h1 style={{ textAlign: 'center', borderBottom: '2px solid midnightblue', padding: '5px' }}>Populares</h1>
            <Row>
                {
                    !popular ? <h1>loading</h1> : popular.results.map(elm => <FilmCard key={elm.id} {...elm} />)
                }
            </Row>
        </Container >
    )
}

export default PopularPage
