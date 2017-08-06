import React from 'react';

export default class TextBoxApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: ''
        }
        this.updateTextValue = this.updateTextValue.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    };
    updateTextValue(event) {
        const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;
           
        this.setState({
            [name]: value
        });
  
        
    }
    buttonClick(e){
        
        alert(this.state.fName+'::'+this.state.lName);
        //if (e.target.type === 'submit') {
            e.preventDefault();
        //}  
    }
    render() {
        return (
            <div>
                <form><label>
                FirstName: <TextBox txtVal={this.state.fName}
                    newVal={this.updateTextValue} name='fName' /> </label>
                <label>
                 LastName: <TextBox txtVal={this.state.lName}
                    newVal={this.updateTextValue} name='lName' /> </label>
                <button onClick={this.buttonClick}>PressHere</button>
                </form>
            </div>
        );
    }
}


class TextBox extends React.Component {

    render() {
        return (
            <div>
                <input type="text" value={this.props.txtVal}
                    onChange={this.props.newVal} name={this.props.name} />  
                    
            </div>
        );
    }
}
