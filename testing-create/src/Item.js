import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div key={props.id} className="item">
                <p><strong>{props.name}</strong></p>
                <p>{props.price}</p>
                <p>{props.category}</p>
            </div>
        );
    }
}

export default Item
