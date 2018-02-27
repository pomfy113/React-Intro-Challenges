import React, { Component } from 'react';

class MyComponent extends Component{
    constructor(props){
        super(props)
        console.log("Got mycomp")
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default MyComponent;
