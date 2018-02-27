import React, { Component } from 'react';

class Category extends Component {
    render() {
        return(
            <button>{this.props.value}</button>
        )
    }
}

export default Category;
