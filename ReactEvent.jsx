import React from 'react';

class ReactEvent extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...',
         childdata: 'Initial Child data...'
      }

      this.updateState = this.updateState.bind(this);
      this.updateChildState = this.updateChildState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }
   updateChildState() {
      this.setState({childdata: 'Data updated from the child component...'})
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button> {this.state.data}

            <Content myDataProp = {this.state.childdata} 
               updateStateProp = {this.updateChildState}></Content>
         </div>
      );
   }
}
class Content extends React.Component {

   render() {
      return (
         <div>
            <button onClick = {this.props.updateStateProp}>CLICK CHILD</button> {this.props.myDataProp}
         </div>
      );
   }
}
export default ReactEvent;