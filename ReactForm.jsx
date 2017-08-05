import React from 'react';

class ReactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Initial Data...',
            childdata: 'Initial Child Data...'
        }
        this.updateState = this.updateState.bind(this);
        this.updateChildState = this.updateChildState.bind(this);
    };

    updateState(e){
        this.setState({data: e.target.value});
    }
    updateChildState(e){
        this.setState({childdata: e.target.value});
    }
    render(){
        return(
            <div>
               State bind in Same Component <input type="text" value= {this.state.data}
                onChange = {this.updateState} /> <i>{this.state.data}</i>
                
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
            State bind in Child Component <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} /> <s>{this.props.myDataProp}</s>
         </div>
      );
   }
}
export default ReactForm;