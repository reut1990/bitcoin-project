import React from 'react'
import { withRouter} from 'react-router-dom'

const ContactPreview = (props) => {

/// we can use regular link to
// we will use this props.history.push when we submit from and want to pass to next page
    return (
        <li key={props.contact._id} className="contact-preview" onClick={() => { props.history.push(`/contact/${props.contact._id}`) }}>
            <img src={`https://robohash.org/${props.contact.name}.png`} alt="contactImg"></img>
            {props.contact.name}
        </li> 

    )

}

export default withRouter (ContactPreview)