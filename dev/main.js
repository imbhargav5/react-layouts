import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Layouts from '../src/index';
import babel_polyfill from 'babel-polyfill';
import reactElementToJSXString from 'react-element-to-jsx-string';

require('./style.scss');

let { FlexBox, FlexItem} = Layouts;

const colors = {
   		blue : '#5677fc',
   		lightBlue : '#03a9f4',
   		red  :  '#e51c23',
   		indigo: '#3f51b5',
   		pink : '#e91e63',
   		greyLight : '#ECEFF1',
   		yellow : '#ffeb3b',
   		teal : '#009688',
   		green : '#259b24',
   		amber : '#ff9800',
   		orange: '#ff9800',
   		purple :'#9c27b0',
   		black : '#000',
   		deepPurple : '#673ab7'
}

class MainSection extends React.Component{
	render(){
			let {heading} = this.props;
    		 return <div className='main-section'> 
		     			<h3 className='main-section__title'>{heading || ''}</h3> 
		     			<div className='main-section__body'> {this.props.children}</div>
		     			<pre className='main-section__src'>
		     				{reactElementToJSXString(this.props.children)}
		     			</pre>
		     		</div>;
	}	
}



/**
 * Root Component
 * Holds the page
 */
class Main extends React.Component{
   render(){
     
     let section1 =  <FlexBox  flexDirection='row' flexWrap='nowrap' style={{
				     	height:'100px',
				     	backgroundColor:colors.greyLight,
				     	padding: '50px'
				     }} >
					     	<FlexItem flexVal='5' style={{ background :  colors.blue }}/>
					     	<FlexItem flexVal='6' style={{ background :  colors.indigo }}/>
					     	<FlexItem  style={{ background :  colors.teal }}/>
				     </FlexBox>;

    let section2 = 	<FlexBox style={{
				     	marginTop:'10px',
				     	height:400
				     }} flexDirection='column' >
				     	<FlexItem style={{ background :  colors.orange}}/>
				     	<FlexItem style={{ background :  colors.pink }}/>
				     	<FlexItem style={{ background :  colors.yellow }}/>
				     </FlexBox>;

	const section3  = 	  <FlexBox style={{
				     	marginTop:'10px',
				     	height:400
				     }} flexDirection='row'>
				     	<FlexItem >

							    <FlexBox style={{
							     	height:400
							     }}  flexDirection ='column' >
							     	<FlexItem style={{ background :  colors.indigo}}/>
							     	<FlexItem style={{ background :  colors.greyLight }}/>
							     	<FlexItem style={{ background :  colors.lightBlue }}/>
							     </FlexBox>

				     	</FlexItem>
				     	<FlexItem style={{ background :  colors.orange}}/>
				     	<FlexItem style={{ background :  colors.yellow }}/>
				     </FlexBox>;	     			     

     return <div className="main">
     			 <section className="how-to-use">
				    	<h1 className="how-to-use__h1"> How To Use </h1>
				    	<pre className="how-to-use__pre">
				    		import Layouts from 'react-layouts/lib/index';<br/>
     			 	        let FlexBox = Layouts.FlexBox, FlexItem = Layouts.FlexItem;
				    	</pre>
			     </section>
			     <section>
					<h1> Examples </h1>
					 <MainSection heading="Flex Row">
					    	{section1}
					 </MainSection>
					<MainSection heading="Flex Column" >
					     {section2}
					 </MainSection>

					  <MainSection heading="Flex Nested">
					   	{section3}
					 </MainSection>
			     </section>
			     
			     
		    </div>;
   }
};
ReactDOM.render(<Main/>,document.getElementById("app"));
