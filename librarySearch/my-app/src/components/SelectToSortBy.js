import React from "react";

const SelectToSortBy = ({ setOption }) => {
  return (
    <div>
      <select
        className="options"
        // when onChange happens i want to save the the value to the state
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="relevant">Most Relevent</option>
        <option value="points">Most Points</option>
      </select>
    </div>
  );
};

export default SelectToSortBy;
