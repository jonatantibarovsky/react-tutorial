import React from 'react'
import { useParams } from 'react-router-dom'

import ViewContact from '../../ViewContact/index'

const GetID = () => {

    const { id } = useParams()
    console.log(id)

    return(
        <div>
            <ViewContact id = {id} />
        </div>
    )
}

export default GetID