import React from 'react'
import { useParams } from 'react-router-dom'

import ViewContact from '../../ViewContact/'
import EditContact from '../../EditContact'

const GetID = (props) => {

    const { id } = useParams()
    console.log(id)

    let toReturn = null

    if (props.value == 'edit') {
        toReturn =  <EditContact id = {id} />
    } else if (props.value == 'id') {
        toReturn = <ViewContact id = {id} />
    }
    return (
        toReturn
    )

}

export default GetID