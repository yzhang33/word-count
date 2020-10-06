import React, { Component } from 'react';
import Text from './text';
import './App.css';


class App extends Component {
    render() { 
        return (  
            <div id="title">
            <h1>Word Count</h1>
                <Text />
            </div>
        );
    }
}
 
export default App;