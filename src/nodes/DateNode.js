import React, { useState } from 'react'
import BaseNode from './BaseNode'

export const DateNode = ({id}) => {
    const [date,setDate]=useState("")
  return (
    <BaseNode id={id} handles={[
        {type:'source',position:"right",id:`${id}-output`}
    ]}>
    <div>
      <input
      type="date"
      value={date}
      onChange={(e)=>{setDate(e.target.value)}}
      />
    </div>
    </BaseNode>
  )
}

