import React from 'react'
import Move from '../move/Move'
import UserService from '../../services/UserService';
import './MovesList.css'

const MovesList = (props) => {
    const moves = props.movesList ? (
        props.movesList.map(move => {
            return (
                <Move move={move} key={move.id} />
            )
        })
    ) : (
            <p> No Moves To show</p>
        )

    const movesToRender = () => {
        if (props.inCmp === 'homePage') {
            return (
                <React.Fragment>
                    {moves[moves.length - 1]}
                    {moves[moves.length - 2]}
                    {moves[moves.length - 3]}
                </React.Fragment>
            )
        } else if (props.inCmp === 'contactDetails') {
            const movesWithContact = UserService.getMoves(props.contactId);
            const moves = movesWithContact.map(move => {
                return (
                    <Move move={move} key={move.id} />
                )
            })
            return (<React.Fragment>
                {moves[moves.length - 1]}
            </React.Fragment>
            )
        }

    }


    // think how to improve, above the last three below the ul rendering///////////////////////////////////////////////////
    return (
        <div className="moves-container">
            <h6 className="moves-home-title">{props.title}</h6>
            <ul className="moves-list">
                {movesToRender()}

            </ul>
        </div>

    )
}

export default MovesList