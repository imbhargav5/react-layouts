/**
 * Flex Container
 */
import React from 'react';
export default (props)=>{ 
	 let defaultStyle = {
	 	 display : 'flex'
	 }
	 let {style} = props;
	 style = Object.assign({},defaultStyle,style || {});
	 return <div style={style} className="flex-box">{props.children}</div>; 
}