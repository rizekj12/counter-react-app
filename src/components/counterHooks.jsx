import React, { useState } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  const handleIncremnet = () => {
    setCount(count + 1);
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };
  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  return (
    <>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={handleIncremnet}
        className="btn btn-secondary btn-sm"
      >
        increment
      </button>
    </>
  );
};

export default CounterHooks;
