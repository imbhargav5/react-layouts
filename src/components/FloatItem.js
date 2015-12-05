/**
 * Float Item
 */
import React from 'react';
export default (props)=>{  const {style} = props; return <div style={style} className="float-grid__float-item">{props.children}</div>; }