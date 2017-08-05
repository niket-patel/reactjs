import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Stateful from './Stateful.jsx';
import ReactForm from './ReactForm.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Stateful />, document.getElementById('stateful'));
ReactDOM.render(<ReactForm />,document.getElementById('reactForm'));