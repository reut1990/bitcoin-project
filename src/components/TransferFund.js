import React, { Component } from 'react'

class TransferFund extends Component {

    state = {
        amount: '',
    }

    handleChange(e) {
        this.setState({ amount: e.target.value })
    }

    handleTransfer(e) {
        e.preventDefault();
        if (this.props.maxCoins > +(this.state.amount)) {
            this.props.onTransferCoins(+this.state.amount)
            this.setState({ amount: " " })

        }
    }

    render() {
        // const { contact, maxCoins, onTransferCoins } = this.props
        return (
            <form className="transfer-container">
                Transfer coins to {this.props.contact.name} :
            <input className="transfer-input" type="number" placeholder="Amount"
                    value={this.state.amount} onChange={this.handleChange.bind(this)} />
                <button className="transfer-btn"onClick={this.handleTransfer.bind(this)}>Transfer</button>
            </form>
        )

    }

}

export default TransferFund