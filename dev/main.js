import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from '../lib/index';
import babel_polyfill from 'babel-polyfill';

let { FlexBox, FlexItem} = Layouts;

const colors = {
   		blue : '#5677fc',
   		lightBlue : '#03a9f4',
   		red  :  '#e51c23',
   		indigo: '#3f51b5',
   		pink : '#e91e63',
   		yellow : '#ffeb3b',
   		teal : '#009688',
   		green : '#259b24',
   		amber : '#ff9800',
   		orange: '#ff9800',
   		purple :'#9c27b0',
   		deepPurple : '#673ab7'
}


class Main extends React.Component{
   render(){
     return <div>
     			<h1> Flex Row </h1>
			     <FlexBox style={{
			     	height:'100px'
			     }}>
			     	<FlexItem style={{
			     		background :  colors.blue,
			     		flex : 1
			     	}}/>
			     	<FlexItem style={{
			     		background :  colors.indigo,
			     		flex : 2
			     	}}/>
			     	<FlexItem style={{
			     		background :  colors.teal,
			     		flex:3
			     	}}/>
			     </FlexBox>

			     <h1> Flex Column </h1>
			     <FlexBox style={{
			     	flexDirection:'column',
			     	marginTop:'10px',
			     	height:400
			     }}>
			     	<FlexItem style={{
			     		background :  colors.orange,
			     		flex : 1
			     	}}/>
			     	<FlexItem style={{
			     		background :  colors.pink,
			     		flex : 2
			     	}}/>
			     	<FlexItem style={{
			     		background :  colors.yellow,
			     		flex:3
			     	}}/>
			     </FlexBox>
		    </div>;
   }
};
ReactDOM.render(<Main/>,document.getElementById("app"));
