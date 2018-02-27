import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <p><strong>{this.props.name}</strong></p>
                <p>{this.props.price}</p>
                <p>{this.props.category}</p>
            </div>
        );
    }
}

export default Item
