import { useEffect, useState } from "react"

import { Container, Row } from "react-bootstrap"

import moviesService from "../../services/movies.services"
import FilmCard from '../../components/FilmCard/FilmCard'


const NowPlayingPage = () => {

    const [nowPlaying, setNowPlaying] = useState()

    const loadNowPlaying = () => {
        moviesService
            .getNowPlaying()
            .then(({ data }) => setNowPlaying(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadNowPlaying()
    }, [])

    return (
        <>
            {
                !nowPlaying ?
                    <h1>Loading...</h1>
                    :
                    <Container>
                        <h1 style={{ textAlign: 'center', borderBottom: '2px solid midnightblue', padding: '5px' }}>En Cartelera</h1>
                        <Row>
                            {
                                nowPlaying.results.map(elm => <FilmCard key={elm.id} {...elm} />)
                            }
                        </Row>
                    </Container >
            }
        </>
    )
}

export default NowPlayingPage
