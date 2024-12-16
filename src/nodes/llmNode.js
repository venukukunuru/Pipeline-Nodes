
import React from "react";
import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode id={id} label="LLM" style={{ width: 200 }}>
      <div>
        <span>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
