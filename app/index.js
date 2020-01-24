import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

import './styles/index.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}