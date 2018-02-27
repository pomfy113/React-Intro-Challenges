import React, { Component } from 'react';
import Category from './Category'

class Categories extends Component {
    render() {
        const buttons = this.props.categories.map((item, index) =>{
            return <Category key={index} value={item}/>
        })

        return(
            <div className="categoryButtons">{buttons}</div>
        )
    }
}

export default Categories;
