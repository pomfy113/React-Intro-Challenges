import React, { Component } from 'react';

function Category(props) {
    return(
        <button>{props.value}</button>
    )
}


class Categories extends Component {
    renderCategory(item, index) {
        console.log(item, index)
        return <Category
            key={index}
            value={item}
        />
    }

    render() {
        const buttons = this.props.categories.map((item, index) =>{
            return this.renderCategory(item, index)
        })

        return(
            <div className="categoryButtons">{buttons}</div>
        )
    }
}

export default Categories;
