import React, { Component } from 'react';

class Counter extends Component {
    state ={
        value : this.props.value
    }
    increment = () => {
        this.setState({value: this.state.value+1})
    }
  
    render() { 
        return (
             <div>
                  <span className={this.getBadgeColor()}>{this.formtCount()}</span>
                  <button className="btn btn-secondary btn-sm" onClick={this.increment}>Increment</button>
                  <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
             </div>
           
        );
    }

    getBadgeColor() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formtCount() {
        const {value}= this.state
        return value === 0 ?'zero' : value
    }
}
 
export default Counter;


