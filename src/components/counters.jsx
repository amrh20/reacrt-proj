import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
    render() { 
        return ( 
            <div>
              {/* <button className="btn btn-primary btn-sm" onClick={this.resetHandle}>Reset</button> */}
              {this.props.counters.map(counter  => 
                <Counter 
                key={counter.id} 
                value={counter.value}
                id={counter.id}
                onDelete={this.props.onDelete} />)
                }
            </div>
         );
    }
}
 
export default Counters;