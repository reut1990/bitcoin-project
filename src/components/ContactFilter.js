import React from 'react'

const ContactFilter = (props) => {
    return (
        <div className="filter">
            <label>
                <input type="text"
                    value={props.value}
                    onChange={props.onFilterNameChange}
                    placeholder="Search..."
                    />
            </label>
        </div>
    )
}



export default ContactFilter