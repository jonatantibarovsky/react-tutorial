import React from 'react'
import { useParams } from 'react-router-dom'

import ViewContact from '../index'

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