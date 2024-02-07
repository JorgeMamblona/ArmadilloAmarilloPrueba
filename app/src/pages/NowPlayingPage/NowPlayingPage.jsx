import { useState } from "react"

import { Container } from "react-bootstrap"


const NowPlayingPage = () => {

    const [nowPlaying, setNowPlaying] = useState()

    return (

        <Container>
            <ul>
                {
                    !nowPlaying ? <h1>loading</h1> : nowPlaying.map(elm => <FilmCard key={elm._id} {...elm} />)
                }
            </ul>
        </Container>
    )
}

export default NowPlayingPage
