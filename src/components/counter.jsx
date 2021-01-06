import React, { Component } from "react";
import '../counter.css'

class Counter extends Component {
  
  render() 
  {
   
    const {onIncrement, onDelete, onDecrement} = this.props
    
    return (
      <div className="row">
        <div className="col-1"> 
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
        <button
          onClick={() => onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >-</button>

        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button onClick={() => onDelete(this.props.counter.id)
        } className="btn btn-danger btn-sm">x</button>
        </div>
        {/* <h2>counter # {this.props.counter.id}</h2> */}
        
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
