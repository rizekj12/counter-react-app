import React, { Component } from 'react';
import Counter from './counter'
import '../counters.css'

class Counters extends Component {
    

    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement } = this.props
        return ( 
            <div className="counterDiv">
                <button onClick={onReset} className="btn btn-primary btn-m m-2">Reset</button>
                {counters.map(counter =>
                    <Counter 
                        onDelete={onDelete} 
                        counter={counter} 
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        />
                )}
            </div>
         );
    }
}
 
export default Counters;