import React, { Component } from 'react';
import Counter from './counter'
import '../counters.css'

class Counters extends Component {
    state = { 
         counters: [
             {id: 1, value: 0},
             {id: 2, value: 0},
             {id: 3, value: 0},
             {id: 4, value: 0}
         ]
     }
    render() { 
        return ( 
            <div className="counterDiv">
                {this.state.counters.map(counter =>
                    <Counter val={counter.value} key={counter.id}/>
                        )}
            </div>
         );
    }
}
 
export default Counters;