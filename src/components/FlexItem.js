/**
 * Flex Item
 */
import React from 'react';
export default (props)=>{ 
	let defaultStyle = {
	 	 flex : '1'
	 }
	 let {style} = props;
	 style = Object.assign({},defaultStyle,style || {});
	return <div style={style} className="flex-box__flex-item">{props.children}</div>; }