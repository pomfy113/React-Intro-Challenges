import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import CompList from './List';
import Categories from './Categories';


import registerServiceWorker from './registerServiceWorker';
import inventory, {categories} from './inventory';


ReactDOM.render(
    <div>
        <App />
        <CompList categories={categories} items={inventory}/>
    </div>, document.getElementById('root'));
registerServiceWorker();
