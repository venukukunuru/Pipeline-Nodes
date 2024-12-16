import React, { useState } from "react";
import BaseNode from "./BaseNode";

export const DateNode = ({ id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <BaseNode
      id={id}
      handles={[{ type: "source", position: "right", id: `${id}-output` }]}
    >
      <label>
        <input
          type="checkbox"
          value={toggle}
          onChange={(e) => {
            setToggle(e.target.value);
          }}
        />
        Toggle
      </label>
    </BaseNode>
  );
};
