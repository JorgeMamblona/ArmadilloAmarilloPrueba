import { useState } from "react"

import { Container } from "react-bootstrap"

const PopularPage = () => {

    const [popular, setPopular] = useState()

    return (

        <Container>
            <ul>
                {
                    !popular ? <h1>loading</h1> : popular.map(elm => <FilmCard key={elm._id} {...elm} />)
                }
            </ul>
        </Container >
    )
}

export default PopularPage
