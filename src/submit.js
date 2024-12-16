// submit.js

// export const SubmitButton = () => {

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }

import React from "react";
import axios from "axios";

export const SubmitButton = ({ nodes, edges }) => {
    console.log(nodes,edges,"8989")
  const handleSubmit = async () => {
    const pipelineData = {
      nodes: nodes.map((node) => ({ id: node.id, type: node.type })),
      edges: edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        pipelineData
      );
      const { num_nodes, num_edges, is_dag } = response.data;
      alert(`pipeline Details:
                -Number of Nodes:${num_nodes}
                -Number of edges:${num_edges}
                -is Dag :${is_dag ? "yes" : "no"}
                `);
    } catch (error) {
      console.error("Error submitting pipeline",error);
      alert("Failed Submit pipeline");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
