import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import App from './App.js';
import Routers from './routers.js';
import "./main.css"

render(<Routers />,document.getElementById('root'));
