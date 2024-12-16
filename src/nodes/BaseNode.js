import React from 'react'
import { Handle } from 'reactflow'

const BaseNode = ({children,handles=[],style}) => {
  return (
    <div
    style={{padding:"10px",
        border:"1px solid #ccc",
        borderRadius:"8px",
        backgroundColor:"#fff",
        minWidth:"150px",
        ...style,
    }}
    >
        {children}
        {handles.map((handle,index)=>(
      <Handle
      key={index}
      type={handle.type}
      position={handle.position}
      id={handle.id}
      style={{background:"#555"}}
      />
    ))}
    </div>
  )
}

export default BaseNode
