# react-layouts
React UI Layout Library

Docs - http://bhargav175.github.io/react-layouts/


Create Flexboxes easily using Flexbox and FlexItem elements which bring inline styles into play and expose a style prop to customize.



##Installation
    npm install react-layouts

## Usage
    import Layouts from 'react-layouts/lib/index';
    let {FlexBox, FlexItem} from Layouts;

## Props

###FlexBox
   1. flexDirection
   2. flexWrap
   3. style
   
###FlexItem
   1. style

## Examples
### Flex type = Row
    <FlexBox  flexDirection='row' flexWrap='nowrap' style={{
				     	height:'100px',
				     	backgroundColor:colors.greyLight,
				     	padding: '50px'
				     }} >
				<FlexItem flexVal='5' style={{ background :  colors.blue }}/>
				<FlexItem flexVal='6' style={{ background :  colors.indigo }}/>
				<FlexItem  style={{ background :  colors.teal }}/>
		 </FlexBox>;
		 
### Flex type = Column
    <FlexBox style={{
				     	marginTop:'10px',
				     	height:400
				     }} flexDirection='column' >
				<FlexItem style={{ background :  colors.orange}}/>
				<FlexItem style={{ background :  colors.pink }}/>
				<FlexItem style={{ background :  colors.yellow }}/>
		</FlexBox>;
		
### Flex type = nested
    <FlexBox style={{
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
