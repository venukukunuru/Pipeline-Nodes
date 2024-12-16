import React, { useState } from "react";
import BaseNode from "./BaseNode";

export const DateNode = ({ id }) => {
  const [value, setValue] = useState(0);
  return (
    <BaseNode
      id={id}
      handles={[{ type: "source", position: "right", id: `${id}-output` }]}
    >
      <label>Number:</label>
        <input
          type="checkbox"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        
    </BaseNode>
  );
};
