import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Stateful from './Stateful.jsx';
import ReactForm from './ReactForm.jsx';
import ReactEvent from './ReactEvent.jsx';
import DataBind from './DataBind.jsx';
import Clock from './Clock.jsx';
import Toggle from './Toggle.jsx';
import LoginControl from './LoginControl.jsx';
import TextBoxApp from './TextBoxApp.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Stateful />, document.getElementById('stateful'));
ReactDOM.render(<ReactForm />,document.getElementById('reactForm'));
ReactDOM.render(<ReactEvent />,document.getElementById('reactEvent'));
ReactDOM.render(<DataBind />, document.getElementById('dataBind'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Toggle />, document.getElementById('toggle'));
ReactDOM.render(<LoginControl />, document.getElementById('loginControl'));
ReactDOM.render(<TextBoxApp />, document.getElementById('textBoxApp'));
