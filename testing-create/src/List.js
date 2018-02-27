import React, { Component } from 'react';
import './List.css';

import Item from './Item.js'
import Categories from './Categories';


class CompList extends Component {
    constructor(props){
        super(props)
        console.log(this.props.categories)
    }

    test(){
        console.log("TESTING!")
    }

    render() {
        const invList  = this.props.items.map((item) =>{
            return <Item key={item.id} name={item.name} price={item.price} category={item.category}/>
        })

        const filtered = invList.filter((item) => {
            return item.props.category === "Baby";
        })

        console.log(filtered)

        return(
            <div className="inventory">
                <Categories categories={this.props.categories}/>
                {invList}
            </div>
        )
    }
}

export default CompList;
