import React, { Component } from 'react';
import PaypalButton from '../PaypalButton/PayPalButton';

export default class Checkout extends Component {
    state = {
        showPaypal: false
    };

    showPaypalButtons = () => {
        this.setState({ showPaypal: true});
    };

    render() {
        const { showPaypal } = this.state;
        if (showPaypal) {
            return <PaypalButton/>;
        } else {
            return (
                <div className="main">
                    <h2> Enter your promo code </h2>
                    <h3>
                        <b> Checkout </b>
                        </h3>
                        <button onClick={this.showPaypalButtons} > Pay </button>
                    </div>
            );
        }
    }
}