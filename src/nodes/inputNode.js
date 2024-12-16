

import { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode id={id} label="input" style={{width:200}}>
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Input</span>
      </div>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange} style={{marginLeft:"5px"}}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
     
    </div>
    </BaseNode>
  );
}
