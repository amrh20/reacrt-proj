import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
                <nav className="navbar navbar-light bg-light">
                 <span> More than zero: </span>
                
                <span className="badge m-2 badge-primary"> {this.props.totalCounters}</span>
                <span> element</span>
            </nav>
         );
    }
}
 
export default Navbar;