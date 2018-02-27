import React, { Component } from 'react';
import './List.css';

import Item from './Item.js'
import Categories from './Categories';


class CompList extends Component {
    constructor(props){
        super(props)
        this.available = this.props.categories  // All categories
        this.state = {
            current: this.props.categories      // Categories we're showing
        }
    }

    filterChange(i){
        const current = this.state.current.slice();  // Slice to make a copy
        // If it's in, nullify; otherwise, put it in as available again
        current[i] = current[i] ? null : this.available[i];

        this.setState({
            current: current
        })
    }

    render() {
        const invList = this.props.items.map((item) =>{
            return <Item key={item.id} name={item.name} price={item.price} category={item.category}/>
        })

        const filtered = invList.filter((item) => {
            return this.state.current.includes(item.props.category);
        })

        return(
            <div className="inventory">
                <Categories
                    categories={this.available}
                    current={this.state.current}
                    onClick={(i) => this.filterChange(i)}
                />

                {filtered}
            </div>
        )
    }
}

export default CompList;
