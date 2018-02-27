import React, { Component } from 'react';
import './List.css';
import Item from './Item.js'

class CompList extends Component {
    constructor(props){
        super(props)
        console.log(Item)
    }

    render() {
        const invList  = this.props.items.map((item) =>{
            return <Item id={item.id} name={item.name} price={item.price} category={item.category}/>
        })

        return(
            <div className="inventory">{invList}</div>
        )
    }
}

export default CompList;
