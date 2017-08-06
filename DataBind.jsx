import React from 'react';

export default class DataBind extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "welcom"
        };        
    }

    changeTitle(title){
        this.setState({title});
    }

    render(){
        return(
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            </div>
            
        );
    }
}

class Header extends React.Component{
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render(){
        return(
            <div>
            <Title title={this.props.title} />
            <input value={this.props.title} onChange={this.handleChange.bind(this)}  />
            </div>
        );
    }
}

class Title extends React.Component{
    render(){
        return(
            <h1> {this.props.title} </h1>
        );
    }
}