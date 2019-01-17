import React from 'react'
import './move.css'
const Move = (props) => {
    const { move } = props
    return (
        <li key={move.id} className="move-preview">
            <p>To: {move.to}</p>
            <p>At: {move.at}</p>
            <p>Amount: {move.amount}</p>
        </li>
    )

}

export default Move