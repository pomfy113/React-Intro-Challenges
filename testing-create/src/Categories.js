import React, { Component } from 'react';

function Category(props) {
    return(
        <button className={props.isOn} onClick={props.onClick}>{props.value}</button>
    )
}

class Categories extends Component {
    renderCategory(item, index) {
        return <Category
            key={index}
            value={item}
            isOn={this.props.current[index] ? "on" : "off"}
            onClick={() => this.props.onClick(index)}
        />
    }


    render() {
        const buttons = this.props.categories.map((item, index) => {
            return this.renderCategory(item, index)
        })

        return(
            <div className="categoryButtons">
                {buttons}
            </div>
        )
    }
}

export default Categories;
