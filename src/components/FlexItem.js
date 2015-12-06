/**
 * Flex Item
 */
import React from 'react';
export default class FlexItem extends React.Component{ 
	render(){

	 let {style,flexVal} = this.props;
	 let defaultStyle = {
	 	 flex : flexVal || '1'
	 }
	 style = Object.assign({},defaultStyle,style || {});
	return <div style={style} className="flex-box__flex-item">{this.props.children}</div>; }
};