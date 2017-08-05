import React from 'react';

 var myStyle = {  
         color: '#225599'
      }

var redColor = {color: '#FF5522'}
var greenColor = {color: '#00FF00',fontSize: 15}

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 style={redColor}>Header</h1>
            <h2 style={myStyle}> Stateless Component </h2>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
       var i = 1;
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
            <h2>1+1={1+1}</h2>
            <h2>i == 1? {i == 1 ? 'True!' : 'False'}</h2>
            <p style={greenColor} >
            // End of the line Comment...} <br/>
            /* Multi line comment... */
            </p>
         </div>
      );
   }
}

export default App;