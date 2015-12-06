/**
 * Flex Container
 */
import React from 'react';
export default class FlexBox extends React.Component{ 
	render(){
		let {style,flexDirection,flexWrap} = this.props;
		 let defaultStyle = {
		 	 display : 'flex',
		 	 flexDirection:flexDirection || 'initial',
		 	 flexWrap: flexWrap || 'initial',
		 	 justifyContent: 'initial',
		 	 alignItems : 'initial',
		 	 alignContent:'initial'
		 }
	 
	 style = Object.assign({},defaultStyle,style || {});
	 return <div style={style} className="flex-box">{this.props.children}</div>; 
	}
	
}