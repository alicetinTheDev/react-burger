import React, { Component } from 'react';

import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log("Update from OrderSummary!")
    };

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
                .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li> );
                });
        return(
            <Wrapper>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue or Checkout?</p>
                <Button btnType="Danger" clicked={this.props.puchaseCanceledEvent}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.puchaseContinueEvent}>Continue</Button>
            </Wrapper>

        );
    }
};

export default OrderSummary;